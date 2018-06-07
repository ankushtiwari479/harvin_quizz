import React, { Component } from 'react';
import { Switch, Route ,Link } from 'react-router-dom';
import RightButton from '../rightButton.png'
import LeftButton from '../leftButton.png'
import mcqQuestionJSON from '../QandA/questions.json';
import './McqComponent.css';
class McqComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      question:"",
      options:[],
      id:0
    }
  }

  handleRadioButtonChange=(value,index)=>{
    console.log(value,index);
  }

  handleLeftButtonCliked=()=>{
    this.setState(()=>{
      return {
        question:mcqQuestionJSON.arrOfQuestions[(this.state.id!==0?this.state.id-1:14)].question,
        options:mcqQuestionJSON.arrOfQuestions[(this.state.id!==0?this.state.id-1:14)].options,
        id:mcqQuestionJSON.arrOfQuestions[(this.state.id!==0?this.state.id-1:14)].questionId
      }
    })
  }
  handleRightButtonCliked=()=>{
    this.setState(()=>{
      return {
        question:mcqQuestionJSON.arrOfQuestions[(this.state.id!==14?this.state.id+1:0)].question,
        options:mcqQuestionJSON.arrOfQuestions[(this.state.id!==14?this.state.id+1:0)].options,
        id:mcqQuestionJSON.arrOfQuestions[(this.state.id!==14?this.state.id+1:0)].questionId
      }
    })
  }
  componentWillMount(){
      this.setState(()=>{
        return {
          question:mcqQuestionJSON.arrOfQuestions[0].question,
          options:mcqQuestionJSON.arrOfQuestions[0].options,
          id:mcqQuestionJSON.arrOfQuestions[0].questionId
        }
      })
    }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState(()=>{
      return {
        question:mcqQuestionJSON.arrOfQuestions[nextProps.selectComponent].question,
        options:mcqQuestionJSON.arrOfQuestions[nextProps.selectComponent].options,
        id:mcqQuestionJSON.arrOfQuestions[nextProps.selectComponent].questionId,
        checked:[]
      }
    })
  }
  render() {
    var options = this.state.options;
    var optionsJsx = options.map((e,index)=>{
      return(
        <div>
        <label className="container">{e}
        <input type="radio" className="radio" value={e} key={index} onChange={()=>{this.handleRadioButtonChange(e,index)}} name="abc" />
        <span className="checkmark"></span>
        </label>
        <br/>
        </div>
      );
    })
    console.log('render called');
    return (
      <div className="McqComponent">
      <div className="wrapper">
      <div className="sideButtons" onClick={this.handleRightButtonCliked} style={{float:"right",width:"5vw",marginRight:"2vw",marginTop:"28%"}}><img src={RightButton} /></div>
        <div className="mcqQuestions">
          <div>
            <div className="questionNumber">
              <span style={{float:"left"}}>
              {"Q. "} {this.state.id+1}
              </span>
              <span style={{float:"right",backgroundColor:"orange",fontSize:"12px",padding:"1vh",cursor:"pointer",fontWeight:"bold",color:"white"}}>
                MARK FOR REVIEW
              </span>
            </div>
            <div className="question">
              {this.state.question}
            </div>
            <div className="checkboxes" style={{}}>
                {optionsJsx}
              </div>
            </div>
          </div>
          <div className="sideButtons" onClick={this.handleLeftButtonCliked} style={{float:"right",width:"5vw",marginTop:"28%"}}><img src={LeftButton}/></div>
        </div>
      </div>
    );
  }
}

export default McqComponent;
