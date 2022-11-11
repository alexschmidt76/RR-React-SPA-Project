import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import PlayerListForm from "./PlayerListForm";

export default function Initiatives() {
    let [ playerList, setPlayerList ] = useState([]);

    const addToPlayerList = (e, newPlayer) => {
        e.preventDefault();
        e.target.reset();
        setPlayerList([
            ...playerList,
            newPlayer
        ]);
    }

    const updateRoll = (i) => (e) => {
        let newArr = [...playerList];
        newArr[i].roll = Number(e.target.value);
        setPlayerList(newArr);
    }

    const reorderPlayerList = () => {
        let newArr = [...playerList];
        newArr.sort((a, b) => a.roll > b.roll ? -1 : 1);
        setPlayerList(newArr);
    }

    return (
        <div>
            <PlayerListForm addToPlayerList={addToPlayerList}/>
            <Form onSubmit={reorderPlayerList}>
                {
                    playerList.map((player, i) => {
                        return(
                            <Form.Group>
                                <Form.Text>{player.name}</Form.Text>
                                <Form.Control type="number" value={player.roll} onChange={updateRoll(i)} />
                            </Form.Group>
                        )
                    })
                }
                {
                    playerList.length > 1 ?
                    <Button type="submit" variant="primary">Organize List</Button> : {}
                }
            </Form>
        </div>
    );
}