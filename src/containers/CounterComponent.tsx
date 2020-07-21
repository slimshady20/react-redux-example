import React from "react";

// Redux
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE' // type이 counter
// export const increase =() =>{return ({type:INCREASE})} 생략하면 아래처럼
export const increase =() =>({type:INCREASE}) // ({type:INCREASE}) is action
export const decrease =() =>({type:DECREASE})
const initialState={
    number : 0
}
// reducer
function counter(state,action) {
}

// --component
// 프로퍼티로 number, onIncrease,onDecrease를 jsx에 전달한다
const CounterComponent= ({number,onIncrease,onDecrease}) => {

    return(<>
        <h1>숫자:{number} </h1>
        <br/>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </>)
}
export default CounterComponent