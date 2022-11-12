import React, { useState } from "react"
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
            
        </div>
    )
}