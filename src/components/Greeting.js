import React, {Fragment, useState} from "react";
import { MDBBtn } from "mdbreact";

const Greeting =() =>{
    const [message, setMessage]= useState("")
    const [color, setColor] =useState("")
    const onClickWelcome= ()=> setMessage("어서오세요")
    const onClickBye =() => setMessage("안녕히 가세요)")
    const onClickGreen=()=> setColor("green")
    const onClickRed=()=> setColor("red")
    const onClickBlue =()=> setColor("blue")
    return (
        <Fragment>
            <MDBBtn  gradient="peach" onClick={onClickWelcome}>입장</MDBBtn>
            <MDBBtn gradient="purple" onClick={onClickBye}>퇴장</MDBBtn>
            <h1 style={{color}}>{message}</h1>
            <MDBBtn color={"success"} onClick={onClickGreen}>녹색</MDBBtn>
            <MDBBtn color={"danger"} onClick={onClickRed}>적색</MDBBtn>
            <MDBBtn color={"primary"} onClick={onClickBlue}>청색</MDBBtn>
        </Fragment>
    )
}
export default Greeting
/*

const Greeting =() =>{
    const [message, setMessage] = useState("initial")
    //두번째인자는 디스패치라고 정의되어 있으니까.
    // 첫번째는 프로퍼티, 두번째는 프로퍼티를 set하는 함수라고 useState함수가 정의되어 있음
    const [color, setColor] = useState("")
    const onClickWelcome = () => setMessage("어서 오세요")
    const onClickBye = () => setMessage("안녕히 가세요")
    const onChangeColor = (color) => setColor(color)
    return (
        <>
            <button onClick={onClickWelcome}>입장</button>
            <button onClick={onClickBye}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <MDBBtn color={"danger"} onClick={onChangeColor("red")}>적색</MDBBtn>
            <MDBBtn color={"success"} onClick={onChangeColor("green")}>녹색</MDBBtn>
            <MDBBtn color={"primary"} onClick={onChangeColor("blue")}>청색</MDBBtn>
        </>
    )
}
/!*<>는 다른 컴포넌트의 부품이라는 뜻 *!/
export default Greeting*/
