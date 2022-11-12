import { useState } from "react"
import { Button, Form } from "react-bootstrap"

export default function NpcListForm(props) {
    let [ input, setInput ] = useState('')

    const handleSubmit = (e) => {
        let player = {
            name: input,
            roll: 0
        }
        props.addToNpcList(e, player);
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Control 
                required
                type="text" 
                placeholder="Enter Npc Name" 
                onChange={(e) => setInput(e.target.value)} />
            <Button variant="primary" type="submit">Add Npc</Button>
        </Form>
    )
}