import React from 'react';
import './App.css';
import Game from './components/game'
import PreGame from './components/pregame'
import PostGame from './components/postgame'
import {BrowserRouter as Router}  from 'react-router-dom'
import AdminPage  from './components/AdminPage'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
		
    constructor(props){
        super(props)
        // this.baseURL = "https://cupa-phi.herokuapp.com"
        this.baseURL = "http://127.0.0.1:5000"

        this.audios = []
        this.admin_code = "i_am_the_admin"
    }

    state = {
        status: 'not_started',
        question_couter : -1,
        question_status : 'none',
        reading_timer   : -1,
        thinking_timer  : -1,
        waiting_timer   : -1
    }


    render(){
        if(this.state.status === 'admin_page'){
            return(
                <AdminPage startGame = {this.startGame}/>
            )                    
        }

        if(this.state.status === 'not_started'){
                return(
                        <div className="App">
                                <PreGame 
                                    baseURL  ={this.baseURL}
                                    startGame={this.startGame}
                                    joinGame={this.joinGame}/>
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

        if(this.state.status === 'ongoing'){
            return (
                    <div className="App">
                        <Game
                                baseURL          = {this.baseURL}
                                getStatus        = {this.getStatus}
                                status 		     = {this.state.status}
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
}

export default App;
