import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route ,Link } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import McqComponent from './McqComponent/McqComponent';
import QuestionLists from './QuestionLists/QuestionLists';
class App extends Component {
  constructor(props){
    super(props);
    this.state={selectComponent:-1}
  }
  handleQuestionIndexClicked=(index)=>{
    this.setState(()=>{
      return{
        selectComponent:+index
      }
    })
  }
  render() {
    return (
      <div className="App">
      <Header/>
      <McqComponent selectComponent={this.state.selectComponent} />
        {// <Switch>
        //     <Route exact path='/' component={McqComponent}></Route>
        //       {
        //         // <Route path='/sample' component={McqComponent}></Route>
        //       }
        //
        // </Switch>
        }
        <QuestionLists onQuestionIndexClicked={this.handleQuestionIndexClicked}/>
      </div>
    );
  }
}

export default App;
