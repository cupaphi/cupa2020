import React from 'react';
import './App.css';
import Game from './components/game'
import PreGame from './components/pregame'
import PostGame from './components/postgame'
import {BrowserRouter as Router}  from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
		
    constructor(props){
        super(props)
        // this.baseURL = "https://cupa-phi.herokuapp.com"
        this.baseURL = "http://127.0.0.1:5000"
        this.questionsInfo = []
        this.audios = []
    }
    state = {
        status: 'not_started',
        question_couter : -1,
        question_status : 'none',
        reading_timer   : -1,
        thinking_timer  : -1,
        waiting_timer   : -1
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

		startGame = async () => {
				console.log("Starting game...")
				const url = this.baseURL + "/start_game"; 
				const res = await fetch(url)
				const jsonres = await res.json()
				console.log(jsonres)
				this.setState({
					status:'ongoing'
				})
		}

		render(){
				if(this.state.status === 'not_started'){
						return(
								<div className="App">
										<PreGame startGame={this.startGame}/>
								</div>
						)
				}
				if(this.state.status === 'finished'){
						return(
								<div className="App">
										<PostGame/>
								</div>
						)
				}

				return (
								<div className="App">
										<Game
												baseURL          = {this.baseURL}
												getStatus        = {this.getStatus}
												status 					 = {this.state.status}
												question_counter = {this.state.question_counter}
												question_status  = {this.state.question_status}
												reading_timer    = {this.state.reading_timer}
												thinking_timer   = {this.state.thinking_timer}
												waiting_timer    = {this.state.waiting_timer}
										/>
								</div>
				)
		}
}

export default App;
