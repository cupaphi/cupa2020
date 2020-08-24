import React from 'react'
import {Button, Form} from 'react-bootstrap'
export default class PreGame extends React.Component{
    
    render(){
        return (
            <div>
                 <Button variant="primary" onClick={this.props.startGame}>Start Game</Button>{' '}
                 <Form onSubmit={this.props.joinGame}>
                    <h1>Join game</h1>
                    <Form.Group>
                      <Form.Label>Team ID:</Form.Label>
                      <Form.Control type="text" placeholder="team_id" />
                      <Form.Text className="text-muted">
                        This is your team's unique identifier
                      </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                <h1>Game Hasn't Started Yet</h1>
            </div>
        )
    }
}
