import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import NpcListForm from "./NpcListForm";

export default function HpTracker() {
    let [ npcList, setNpcList ] = useState([]);

    const addToNpcList = (e, newNpc) => {
        e.preventDefault()
        e.target.reset()
        setNpcList([
            ...npcList,
            newNpc
        ])
    }
    
    return (
        <div>
            <h1>HP Tracker</h1>
            <NpcListForm addToNpcList={addToNpcList} />
            <Container>
                {
                    npcList.map((npc, i) => {
                        return (
                            <Row>
                                <Col sm={6}>
                                    <h3>{npc.name}</h3>
                                </Col>
                            </Row>
                        )
                    })
                }
            </Container>
        </div>
    )
}