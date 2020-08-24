import React, { Component } from 'react'

export class AnswerForm extends Component {
    render() {
        return (
            <Form onSubmit={this.props.onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Raspuns:</Form.Label>
                <Form.Control type="text" placeholder="Introduceti Raspunsul" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Trimite
            </Button>
            </Form>

        )
    }
}

export default AnswerForm
