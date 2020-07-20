import React, {useEffect, useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import '../assets/Signin.css'
const SigninTest:React.FC = () => {
    const [userid,setUserid]= useState('')
    const [password, setPassword] = useState('')
    //useEffect 컴포넌트가 렌더링될떄 마다 특정작업을 수행하도록 설정
    useEffect(()=>{
        alert(`ID변화만 체크합니다 -> ${userid}`)
    },[userid])
    const onChangeUserid= e => {
        setUserid(e.target.value)
    }
    const onChangePassword=e=>{
        setPassword(e.target.value)
    }

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody className="mx-4">
                            <div className="text-center">
                                <h3 className="dark-grey-text mb-5">
                                    <strong>Sign in</strong>
                                </h3>
                            </div>
                            <MDBInput
                                label="Your ID"
                                group
                                type="text"
                                value={userid}
                                onChange={onChangeUserid}
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Your password"
                                group
                                type="text"
                                value={password}
                                onChange={onChangePassword}
                                validate
                                containerClass="mb-0"
                            />
                            <p className="font-small blue-text d-flex justify-content-end pb-3">
                                Forgot
                                <a href="#!" className="blue-text ml-1">

                                    Password?
                                </a>
                            </p>
                            <div>
                                <b>아이디: </b>{userid}<br/>
                                <b>비밀번호: </b>{password}<br/>
                            </div>
                            <div className="text-center mb-3">
                                <MDBBtn
                                    type="button"
                                    gradient="blue"
                                    rounded
                                    className="btn-block z-depth-1a"
                                >
                                    Sign in
                                </MDBBtn>
                            </div>
                            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                                or Sign in with:
                            </p>
                            <div className="row my-3 d-flex justify-content-center">
                                <MDBBtn
                                    type="button"
                                    outline color="primary"
                                    rounded
                                    className="mr-md-3 z-depth-1a"
                                >
                                    <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                                </MDBBtn>
                                <MDBBtn
                                    type="button"
                                    outline color="primary"
                                    rounded
                                    className="mr-md-3 z-depth-1a"
                                >
                                    <MDBIcon fab icon="twitter" className="blue-text" />
                                </MDBBtn>
                                <MDBBtn
                                    type="button"
                                    outline color="primary"
                                    rounded
                                    className="z-depth-1a"
                                >
                                    <MDBIcon fab icon="google-plus-g" className="blue-text" />
                                </MDBBtn>
                            </div>
                        </MDBCardBody>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="font-small grey-text d-flex justify-content-end">
                                Not a member?
                                <a href="#!" className="blue-text ml-1">

                                    Sign Up
                                </a>
                            </p>
                        </MDBModalFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default SigninTest