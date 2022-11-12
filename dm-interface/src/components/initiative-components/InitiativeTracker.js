import React, { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import PlayerListForm from "./PlayerListForm"

export default function InitiativeTracker() {
    let [ playerList, setPlayerList ] = useState([
        {
            name: 'Alex',
            roll: 10
        },
        {
            name: 'Nabil',
            roll: 15
        },
        {
            name: 'Jonas',
            roll: 4
        }
    ])

    const addToPlayerList = (e, newPlayer) => {
        e.preventDefault()
        e.target.reset()
        setPlayerList([
            ...playerList,
            newPlayer
        ])
    }

    const updateRoll = (i) => (e) => {
        let newArr = [...playerList]
        newArr[i].roll = Number(e.target.value)
        setPlayerList(newArr)
    }

    const reorderPlayerList = (e) => {
        e.preventDefault()
        let tempList = [...playerList]
        tempList.sort((a, b) => a.roll > b.roll ? -1 : 1)
        setPlayerList(tempList)
        console.log(playerList)
    }

    return (
        <div>
            <h1>Initiative Tracker</h1>
            <PlayerListForm addToPlayerList={addToPlayerList}/>
            <Form onSubmit={reorderPlayerList}>
                <Container>
                    <Row>
                        <Col sm={8}>
                            <h2>Players</h2>
                        </Col>
                        <Col sm={4}>
                            <h2>Rolls</h2>
                        </Col>
                    </Row>
                {
                    playerList.map((player, i) => {
                        return(
                            <Form.Group>
                                <Container>
                                    <Row>
                                        <Col sm={8}>
                                            <h3>
                                                {`${i+1}. ${player.name}`}
                                            </h3>
                                        </Col>
                                        <Col sm={4}>                                            
                                            <Form.Control type="number" value={player.roll} onChange={updateRoll(i)} />
                                        </Col>
                                    </Row>
                                </Container>
                            </Form.Group>
                        )
                    })
                }
                    <Row>
                        <Col sm={8}></Col>
                        <Col sm={4}>
                            {
                                playerList.length > 1 ?
                                <Button type="submit" variant="primary">Order List</Button> : ''
                            }
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    );
}