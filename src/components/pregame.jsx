import React from 'react'
import {Button, Form} from 'react-bootstrap'
import {Tab, Col, Row, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';
import Register from './Register.jsx'
import Join from './Join.jsx'

export default class PreGame extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
    
        return (
            <div>
                <Router>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col lg={3}>
                            <Nav variant="tabs" className="flex-column">
                                <Nav.Item>
                                    <NavLink   to="/join/" className="navlink navlink-left"
                                               activeStyle={{
                                                    border: '1px solid black', 
                                                    borderRadius: '10px'
                                                    }}
                                                exact>

                                                Join Game
                                                
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink   to="/register/" className="navlink navlink-left"
                                               activeStyle={{
                                                    border: '1px solid black', 
                                                    borderRadius: '10px'
                                                    }}
                                                exact>

                                                Register

                                    </NavLink>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col lg={9}>
                            <Tab.Content>
                                <Route exact path="/register/" component={() => <Register baseURL={this.props.baseURL}/> }/>

                                <Route exact path="/join/" component={() => <Join baseURL={this.props.baseURL}/>}/>

                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Router>

            </div>
        )
    }
}
