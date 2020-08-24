import React from 'react'
import {Button} from 'react-bootstrap'

export default class AdminPage extends React.Component{

    constructor(props){
        super(props)
        // this.baseURL = "https://cupa-phi.herokuapp.com"
        this.baseURL = "http://127.0.0.1:5000"
        this.questionsInfo = []
        this.audios = []
    }

    startGame = async (e) => {

        if(e.team_code === this.admin_code){
            this.setState({
                status:'admin_page'
            })

        }

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
        return(
            <div>
                 <Button variant="primary" onClick={this.props.startGame}>Start Game</Button>{' '}
            </div>
        )
    }
}
