import React, { Component } from 'react';
import './QuestionLists.css';
import mcqQuestionJSON from '../QandA/questions.json';
class QuestionLists extends Component {
  constructor(props){
    super(props);
  }
  questionIndexClicked=(value)=>{
    this.props.onQuestionIndexClicked(value)
    console.log(value);
  }


  render() {
    var arrJSX = mcqQuestionJSON.arrOfQuestions.map((e,index)=>{
      return(
        <button key={index} value={index} className="clickOnNumber" onClick={()=>this.questionIndexClicked(index)}>
        <span className="dot">.</span>{index+1}
        </button>
      )});
    return (
      <div className="QuestionLists">
        <div className="mainWrapper">
          <div className="clickOnQuestionNumber">
          {"Click on Question Number"}
          </div>
          <div className="numberOfQuestions">
            {arrJSX}
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionLists;
