import React from 'react'
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
        this.questionsInfo =  jsonres
        this.audios = {}
        this.questionsInfo.forEach((qinfo,question_counter) => {
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
		
	
		componentDidMount(){
			console.log("Game mounterd")
			this.getQuestions(() => {setInterval(this.props.getStatus, 500)})	
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
                    <div display={this.props.question_status === 'reading'}>
                        READING: {this.props.reading_timer}
                    </div>

                    <div display={this.props.question_status === 'thinking'}>
                        THINKING: {this.props.thinking_timer}
                    </div>

                    <div display={this.props.question_status === 'waiting_for_answers'}>
                        GATHERING ANSWERS: {this.props.waiting_timer}
                    </div>
                </div> 
            )
    }
}
