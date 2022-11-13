import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

export default function NpcListForm(props) {
    let [ nameInput, setNameInput ] = useState('')
    let [ hpInput, setHpInput ] = useState(0)

    const handleSubmit = (e) => {
        let npc = {
            name: nameInput,
            hp: hpInput
        }
        props.addToNpcList(e, npc);
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Container>
                <Row>
                    <Col sm={4}>
                        <Form.Control 
                            required
                            type="text" 
                            placeholder="Enter Name" 
                            onChange={(e) => setNameInput(e.target.value)} />

                    </Col>
                    <Col sm={4}>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Max HP"
                            onChange={(e) => setHpInput(e.target.value)} />
                    </Col>
                    <Col sm={4}>
                        <Button variant="primary" type="submit">Add Npc</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}