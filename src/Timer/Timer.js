import React, { Component } from 'react';
class Timer extends Component {
  constructor(props){
    super(props);
    this.state={number:0,stop:false}
  }



  componentDidMount(){
    if(this.state.stop){
      clearInterval(this.interval)
    }
    this.interval = setInterval(() => {
          if(!this.state.stop){
            this.setState({number: this.state.number + 1});
          }
          else{
            clearInterval(this.interval);
          }
      }, 1000);
  }
  render() {
    return (
      <span style={{color:"black"}}>
      {this.state.number>60? Math.floor(this.state.number/60) : 0} : {this.state.number%60}
      </span>
    );
  }
}

export default Timer;
