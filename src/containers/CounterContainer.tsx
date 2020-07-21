import React, {useCallback} from "react";
import {useSelector,useDispatch}   from 'react-redux'
import CounterComponent from "./CounterComponent";
import {decrease, increase} from "./counter.reducer";

const CounterContainer = () =>{
    const number = useSelector(state=> state.countReducer.number)
    const dispatch = useDispatch()
    const onIncrease = useCallback(()=>dispatch(increase),[dispatch])
    const onDecrease= useCallback(()=>dispatch(decrease),[dispatch])
    return(
        <CounterComponent number={number} onDecrease={onDecrease} onIncrease={onIncrease}/>
    )
}
export default CounterContainer