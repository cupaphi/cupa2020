import React from 'react'
import PreGame from './pregame';
import PostGame from './postgame'

export default class Game extends React.Component{

    state = {
        status: 'not_started',
        currentQuestion: -1,
        question_status : 'None',
        reading_timer   : -1,
        thinking_timer  : -1,
        waiting_timer   : -1,
    }

    async componentDidMount(){
        var baseURL = "https://cupa-phi.herokuapp.com"
        // var baseURL = "http://127.0.0.1:5000"
        try {
            setInterval(async () => {
                const url = baseURL + "/get_status"; 
                const res = await fetch(url)
                const jsonres = await res.json()
                console.log(jsonres)

                this.setState({
                    status          : jsonres['status'],
                })

                if(jsonres['status'] === 'ongoing'){

                    if(jsonres['current_question'] !== this.state.currentQuestion) {
                        const url2 = baseURL + "/get_question"; 

                        const res2 = await fetch(url2)

                        const jsonres2 = await res2.json()
                        const md = document.getElementById("md") 
                        md.src = jsonres2["md"]
                        // const audioEl = document.getElementsByClassName("audio-element")[0]
                        // const audioSrc = document.getElementById("audiosource")
                        // audioSrc.setAttribute("src",jsonres2["audio"])
                        // audioEl.play()

                        let audio = new Audio(jsonres2["audio"])
                        audio.play()

                    }

                    this.setState({
                        status          : jsonres['status'],
                        currentQuestion : jsonres['current_question'],
                        question_status : jsonres['question_status'],
                        reading_timer   : jsonres['reading_timer'],
                        thinking_timer  : jsonres['thinking_timer'],
                        waiting_timer   : jsonres['waiting_timer']
                    })

                }

            }, 1000);
        } catch(e) {
            console.log(e)
        }
    }
    render(){
        if(this.state.status === 'not_started'){
            return(
                <PreGame/>
            )
        }
        if(this.state.status === 'finished'){
            return(
                <PostGame/>
            )
        }

        if(this.state.status === 'ongoing'){
            return(
                <div>
                    <h1>{this.state.status}</h1>
                    <h2>Question {this.state.currentQuestion}</h2>
                    <div>
                        <audio className="audio-element">
                            <source id="audiosource" src=""></source>
                        </audio>
                    </div>
                    <h4>Material Distributiv</h4>
                    <div>
                        <img src="" id="md" style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width:'50%'
                            }}/>
                    </div>
                    <div display={this.state.question_status === 'reading'}>
                        READING: {this.state.reading_timer}
                    </div>

                    <div display={this.state.question_status === 'thinking'}>
                        THINKING: {this.state.thinking_timer}
                    </div>

                    <div display={this.state.question_status === 'waiting_for_answers'}>
                        GATHERING ANSWERS: {this.state.waiting_timer}
                    </div>
                </div> 
            )
        }
    }
}