import React from 'react'
import {Button, Form} from 'react-bootstrap'

export default class Join extends React.Component{

    constructor(props){
        super(props)
    }
    
    join = async (e) => {
        e.preventDefault()
        var team_id = e.target.team_id.value
        console.log("Joining Game as " + team_id) 
        const res = await fetch(this.baseURL + '/join/' + team_id)
        const jsonres = await res.json()
        console.log(jsonres)
    }

    render(){
        return (
            <div>
                 <Form onSubmit={this.join}>
                    <h1>Join game</h1>
                    <Form.Group>
                      <Form.Label>Team ID:</Form.Label>
                      <Form.Control name="team_code" type="text" placeholder="team_id" />
                      <Form.Text className="text-muted">
                        This is your team's unique identifier
                      </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Join Game
                    </Button>
                  </Form>
                <h1>Game Hasn't Started Yet</h1>
            </div>
        )
    }
}
