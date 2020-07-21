import React from "react";
import './App.css';
import SignIn from '../src/components/SignIn'
import SigninTest from "./components/SigninTest";
import HideTest from "./components/HideTest";

import {number} from "prop-types";
import CounterComponent from "./containers/CounterComponent";
import CounterContainer from "./containers/CounterContainer";

const App =() => <div className="App">
  <CounterContainer/>
</div>

export default App;
