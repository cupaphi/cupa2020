import React from 'react'
import {Button, Form} from 'react-bootstrap'

export default class Register extends React.Component{

    constructor(props){
        super(props)
    }

    register = (e) => {
        e.preventDefault()
        var team_name = e.target.team_name.value
        console.log("Registering team " + team_name) 
        const url = this.props.baseURL + '/register_team/' + team_name
        console.log(url)
        fetch(url)
            .then(res=>res.json())
            .then( (result)=>{
                        console.log(result)
                    },
                   (error)=>{
                        console.log("couldnt connect")
                    })
    }

    render(){
        return (
            <div>
                <h1>
                    Registration Form
                </h1>

                 <Form onSubmit={this.register}>
                    <h1>Join game</h1>
                    <Form.Group>
                      <Form.Label>Team Name:</Form.Label>
                      <Form.Control name="team_name" type="text" placeholder="team_id" />
                      <Form.Text className="text-muted">
                        This is your team's display name.
                      </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Register Team
                    </Button>
                  </Form>
            </div>
        )
    }
}
