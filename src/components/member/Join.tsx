import React, {Component} from 'react';
import '../../assets/Join.css'
import {connect} from "react-redux"
import userActions from "../../actions/user.actions";
class Join extends Component<any,any> {
    constructor(props) {
        super(props);
        this.state= {
            userid:'',
            password:'',
            email:'',
            submitted: false
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        const{name,value} = e.target
        this.setState({[name]:value})
    }
    handleSubmit(e){
        e.preventDefault()
        alert(`form tag alert`)
        this.setState({submitted:true})
        const {userid,email,password}= this.state
        if(userid && password && email){
            this.props.join(userid,email,password)
        }

    }
    render() {
        const temp = {}
        const {userid,password,email,submitted} = this.state
        return (
            <div>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="container">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr/>

                            <label htmlFor="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" value={email}
                                onChange={this.handleChange}/>

                                <label htmlFor="userid"><b>ID</b></label>
                                <input type="text" placeholder="Enter ID" name="userid" value={userid}
                                       onChange={this.handleChange}/>

                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="password" value={password}
                                       onChange={this.handleChange}/>
                                        <label>
                                            <input type="checkbox"  name="remember"
                                                   style={temp}/> Remember me
                                        </label>

                                        <p>By creating an account you agree to our <a href="#" style={temp}>Terms
                                            & Privacy</a>.</p>

                                        <div className="clearfix">
                                            <button type="button" className="cancelbtn">Cancel</button>
                                            <button type="submit" className="signupbtn">Sign Up</button>
                                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const {joinIn} =state.userReducers
    return {joinIn}
}
const actionCreators ={
    join: userActions.join
}
const connectedJoinPage= connect(mapStateToProps,actionCreators)(Join)
export {connectedJoinPage as Join}