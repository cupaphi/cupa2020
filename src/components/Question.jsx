import React, { Component } from 'react'
import AnswerForm from './AnswerForm'

const Timer = (props) => {
  if(props.question_status === 'reading')
      return <h4>Reading: {props.reading_timer}</h4>;
  else if(props.question_status === 'thinking')
      return  <h4>Thinking: {props.thinking_timer}</h4>;
  else if(props.question_status === 'waiting')
      return  <h4>Waiting for the answers: {props.waiting_timer}</h4>
}

const MaterialDistributiv = (props) => {
  if(props.src !== ''){
    return (
              <div>
                  <h4>Material Distributiv</h4>
                  <img src={props.src} id="md" style={{
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      width:'50%'
                      }}/>
              </div>
            )
  }
  return <div></div>
}

export class Question extends Component {
    constructor(props){
        super(props)
    }

    render() {

          return(
            <div>
                  <h1>Intrebarea {this.props.questionId}</h1>
                  <MaterialDistributiv src={this.props.question.md}/>
                  <Timer reading_timer={this.props.reading_timer}/>
                  <AnswerForm submitAnswers = {this.props.onSubmit}/>
            </div>
        )
    }
}

export default Question
