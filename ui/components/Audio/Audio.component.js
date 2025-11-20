import { EVENTS } from "../../../core/constans.js"
import { subcribe } from "../../../core/state-manager.js"

export function AudioComponent(){
    const catchAudio = new Audio('../sounds/341695__projectsu012__coins-1.mp3')
    const missAudio = new Audio('../sounds/heartbeatloop.mp3')
    
console.log(catchAudio)
    subcribe((e) =>{
        if(e.name === EVENTS.GOOGLE_RAN_AWAY){
            missAudio.crossOrigin="anonymous"
            missAudio.play()
        }
        if(e.name === EVENTS.GOOGLE_CAUGHT){
          catchAudio.crossOrigin="anonymous"
          catchAudio.currentTime = 0;  
          catchAudio.play()
        }
    })

}