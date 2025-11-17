import { GAME_STATUSES } from "./constans.js"


const _state = {
    gameStatus:GAME_STATUSES.SETTINGS,
    settings:{
        googleJumpInterval:2000,
        gridSize:{
            rowsCount:4,
            columnCount:4
        },
        pointsToLose:5,
        pointsToWin:5,
    },
    positins:{
        google:{
            x:2, y:1
        },
        players:[{x:2, y:2},
                 {x:3, y:3}
        ]
    },
    points:{
        google:1,
        players:[3,2]
    }
}


// OBSERVER
let _observers = []
export function subcribe(observer){
    _observers.push(observer)

}

export function unsubcribe(observer){
    _observers = _observers.filter(o => o!== observer)
}


function _notifyObservers(){
    _observers.forEach(o =>{
        try{
            o()
        }catch(error){
            console.error(error)
        }
    })
}

function _generateIntegerNumber(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) +min
}

function _jumpGoogleToNewPosition(){
    const newPosition = {..._state.positins.google}
    do {
        newPosition.x =_generateIntegerNumber(0, _state.settings.gridSize.columnCount - 1)
        newPosition.y =_generateIntegerNumber(0, _state.settings.gridSize.rowsCount - 1)

        var isNewPositionMatchWitchCurrentGooglePosition = newPosition.x === _state.positins.google.x && newPosition.y === _state.positins.google.y
        var isNewPositionMatchWitchCurrentPlayer1Position = newPosition.x === _state.positins.players[0].x && newPosition.y === _state.positins.players[0].y
        var isNewPositionMatchWitchCurrentPlayer2Position = newPosition.x === _state.positins.players[1].x && newPosition.y === _state.positins.players[1].y
    } while (isNewPositionMatchWitchCurrentGooglePosition || isNewPositionMatchWitchCurrentPlayer1Position || isNewPositionMatchWitchCurrentPlayer2Position)
    _state.positins.google = newPosition
}



function _getPlayerIndexByNumber(playerNumber){
    const playerIndex = playerNumber - 1;
    
    if (playerIndex < 0 || playerIndex > _state.points.players.length -1){
        throw new Error('Incorrect player number')
    }

    return playerIndex
}

let googleJumpInterval


// INTERFACE
export async function getGooglePoints(){
    return _state.points.google
}

export async function start() {
    if(_state.gameStatus !== GAME_STATUSES.SETTINGS) throw new Error(`Incoreect transition from ${_state.gameStatus} to ${GAME_STATUSES.IN_PROGRESS}`)

    _state.positins.players[0]= {x:0,y:0}
    _state.positins.players[1]= {x:_state.settings.gridSize.columnCount-1, y:_state.settings.gridSize.rowsCount-1}
    _jumpGoogleToNewPosition()

    _state.points.google = 0;
    _state.points.players[0] = 0;
    _state.points.players[1] = 0;

    googleJumpInterval = setInterval(() =>{
    _jumpGoogleToNewPosition()
    _state.points.google++
    if(_state.points.google ===_state.settings.pointsToLose){
        clearInterval(googleJumpInterval)
        _state.gameStatus = GAME_STATUSES.LOSE
    }

    _notifyObservers()
},  _state.settings.googleJumpInterval)
_state.gameStatus = GAME_STATUSES.IN_PROGRESS
_notifyObservers()
}

export async function playAgain() {
    _state.gameStatus = GAME_STATUSES.SETTINGS
   
    _notifyObservers()
}
/**
 * 
 * @param {number} playerNumber - one-based index of player
 * @returns {Promise} number of points
 */
export async function getPlayerPoints(playerNumber){
    const playerIndex = _getPlayerIndexByNumber(playerNumber)

    return _state.points.players[playerIndex]
}

export async function getGameStatus(){
    return _state.gameStatus
}

export async function getGridSize(){
    return {..._state.settings.gridSize}
}

export async function getGooglePosition() {
    return {..._state.positins.google}
}

export async function getPlayersPosition(playerNumber) {
    const playerIndex = _getPlayerIndexByNumber(playerNumber)

    return {..._state.positins.players[playerIndex]}
}
