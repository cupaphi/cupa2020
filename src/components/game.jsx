import React from 'react'
import Question from './Question.jsx'
export default class Game extends React.Component{

    constructor(props){
        super(props)
        // this.baseURL = "https://cupa-phi.herokuapp.com"
        this.baseURL = "http://127.0.0.1:5000"
        this.questionsInfo = []
        this.audios = []
    }
    
    getQuestions = async (onQuestionsLoaded) => {
        const res = await fetch(this.baseURL + '/get_questions')
        const jsonres = await res.json()
        console.log('questions sources loaded!')
        console.log(jsonres)
        this.questions_list = jsonres
        this.audios = {}
        this.questions_list.forEach((qinfo,question_counter) => {
            console.log(qinfo['question_id'])
            const a = new Audio(qinfo['audio'])
            a.setAttribute('preload','auto')
            this.audios[question_counter] = a
        })

        onQuestionsLoaded()
    }


    abs = (n) => {
        if(n<0)
            return -n;
        
        return n;
    }

    startNewAudio = (question_counter) => { 
      if(this.props.question_status === 'reading'){
          const audio = this.props.audios[question_counter]
          var currentTime = audio.currentTime
					if(this.abs(currentTime - this.props.question.reading_timer)){
						audio.setAttribute('currentTime', this.props.reading_timer)
					}
          audio.play()
      }
    }

    getStatus = async () => {
        const url = this.baseURL + "/get_status"; 
        const res = await fetch(url)
        const jsonres = await res.json()
        console.log(jsonres)

        if(jsonres['current_question'] !== this.state.currentQuestion){
                this.changeQuestion()
        }

        this.setState({
                status              : jsonres['status'],
                question_counter    : jsonres['current_question'],
                question_status     : jsonres['question_status'],
                reading_timer       : jsonres['reading_timer'],
                thinking_timer      : jsonres['thinking_timer'],
                waiting_timer       : jsonres['waiting_timer']
        })
    }

	
    componentDidMount(){
        console.log("Game Component mounted")
        this.getQuestions(() => {setInterval(this.getStatus, 500)})	
    }

    stopAudioIfPlaying = (quesiton_counter) => {
      let audio = this.props.audios[quesiton_counter]
      if(!audio.ended && audio.currentTime > 0)
				audio.pause()
    }

    componentDidUpdate(prevProps){
      if(prevProps.question_counter !== this.props.question_counter){
        this.stopAudioIfPlaying(prevProps.question_counter)
        this.startNewAudio(this.props.question_counter)
      }
    }
		


    render(){

            return (
                <div>
                    <h1>{this.props.status}</h1>
                    <h2>Question {this.props.question_counter}</h2>
                    <div>
                        <audio className="audio-element">
                            <source id="audiosource" src=""></source>
                        </audio>
                    </div>

                    <Question 
                                question_counter = {this.props.question_counter}
                                quesiton_id      = {this.question['question_id']}
                                question_status  = {this.props.question_status}
                                md               = {this.question['md']}
                                reading_timer    = {this.props.reading_timer}
                                thinking_timer   = {this.props.thinking_timer}
                                waiting_timer    = {this.props.waiting_timer}/>
                </div> 
            )
    }
}
