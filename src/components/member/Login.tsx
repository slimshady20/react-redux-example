import React, {Component} from "react";
import  '../../assets/Login.css'
import userActions from "../../actions/user.actions";
import {connect} from "react-redux";

class Login extends Component<any, any>{
    constructor(props){
        super(props);
        this.state= {
            userid:'',
            password: '',
            name: '',
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        const {name,value} =e.target
        this.setState({[name]:value})
    }
    handleSubmit(e){
        e.preventDefault()
        alert(` 폼 태그 알러트 `)
        this.setState({submitted:true})
        const {userid,password}= this.state
        if(userid && password){
            this.props.login(userid,password)
        }
    }

    render() {
      //  const { logginIn} = this.props
        const {userid,password,submitted}= this.state
        const helpBlock = { color: "red"}
        return <div>
            <h2>Login Form</h2>
            <form name="form" onSubmit={this.handleSubmit}>
                <div className="imgcontainer">
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar"
                         id={"avatar"}/>
                </div>
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="userid" value={userid}
                    onChange={this.handleChange}/>
                    { submitted && !userid &&
                    <div style={helpBlock}>아이디는 필수입력값입니다.</div>
                    }
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={password}
                           onChange={this.handleChange}
                    />
                    {
                        submitted && !password &&
                        <div style={helpBlock}> 비밀번호는 필수입력값입니다.</div>
                    }
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked={true} name="remember"/> Remember me
                    </label>
                </div>
                <div className="container">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    }
}
function mapStateToProps(state) { //JSON 반환.
    const { loggingIn } = state.userReducers
    return { loggingIn}
}
const actionCreators = {
    login: userActions.login
}
const connectedLoginPage = connect(mapStateToProps, actionCreators)(Login)
export {connectedLoginPage as Login}
