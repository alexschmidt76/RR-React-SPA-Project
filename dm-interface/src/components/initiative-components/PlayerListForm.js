import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

export default function PlayerListForm(props) {
    let [ input, setInput ] = useState('')

    const handleSubmit = (e) => {
        let player = {
            name: input,
            roll: 0
        }
        props.addToPlayerList(e, player);
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Container>
                <Row>
                    <Col sm={8}>
                        <Form.Control 
                            required
                            type="text" 
                            placeholder="Enter Charcter Name" 
                            onChange={(e) => setInput(e.target.value)} />
                    </Col>
                    <Col sm={4}>
                        <Button variant="primary" type="submit">Add Name</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}