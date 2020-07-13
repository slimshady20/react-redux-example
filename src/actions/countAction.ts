import React from "react";
const counAction = dispatcher =>({
    tick(currentCount){
        dispatcher.handleAction({type: 'TICK'})
    },
    reset(count){
        dispatcher.handleAction({
            type: 'REST',
            count
        })
    }
})
export default counAction