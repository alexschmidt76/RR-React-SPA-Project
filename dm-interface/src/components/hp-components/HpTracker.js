import React, { useState } from "react"
import { Container, Row, Col, Form, Button, CloseButton } from "react-bootstrap";
import NpcListForm from "./NpcListForm";

export default function HpTracker() {
    let [ npcList, setNpcList ] = useState([])
    /* 
        npcList is an array of npc objects
        npc = {
            name: string,
            hp: Number,
            maxHp: Number,
            hpChange: Number
        }
    */

    const addToNpcList = (e, newNpc) => {
        e.preventDefault()
        e.target.reset()
        setNpcList([
            ...npcList,
            newNpc
        ])
    }

    const removeFromNpcList = (i) => {
        let newArr = [...npcList]
        newArr.splice(i, 1)
        setNpcList(newArr)
    }

    const setHpChange = (e, i) => {
        let newArr = [...npcList]
        newArr[i].hpChange = Number(e.target.value)
        setNpcList(newArr)
    }

    const changeHp = (index, isPlus) => {
        let newArr = [...npcList]
        newArr[index].hp = (
            isPlus ?
            newArr[index].hp + newArr[index].hpChange :
            newArr[index].hp - newArr[index].hpChange
        ) 
        setNpcList(newArr)
    }

    return (
        <div>
            <h1>HP Tracker</h1>
            <NpcListForm addToNpcList={addToNpcList} />
            <Container>
                {
                    npcList.map((npc, i) => {
                        return (
                            <div key={i}>
                            <Row>
                                <Col sm={1}>
                                    <CloseButton onClick={(i) => removeFromNpcList(i)} />
                                </Col>
                                <Col sm={3}>
                                    <h3>{npc.name}</h3>
                                </Col>
                                <Col sm={1}>
                                    <Button onClick={() => changeHp(i, false)}>-</Button>
                                </Col>
                                <Col sm={3}>
                                    <Form.Control type="number" value={npc.hpChange} onChange={(e) => (setHpChange(e, i))} />
                                </Col>
                                <Col sm={1}>
                                    <Button onClick={() => changeHp(i,true)}>+</Button>
                                </Col>
                                <Col sm={3}>
                                    <h3>{npc.hp}/<b>{npc.maxHp}</b></h3>
                                </Col>
                            </Row>
                            </div>
                        )
                    })
                }
            </Container>
        </div>
    )
}