import axios from 'axios'
import React, { useState, useEffect } from 'react'


function MemoCard({ memo }) {

    const { id } = memo

    const [newMemo, setNewMemo] = useState("")

    function handleEdit() {
        axios.patch(`/notes/${id}`, {
            memo: newMemo
        })

    }

    function handleDelete() {
        axios.delete(`/notes/${id}`)
        window.location.reload();
    }

    function handleChange(e){
        setNewMemo(e.target.value)
    }

    console.log(memo)

    return (
        <div>
            <h1>{memo.memo}</h1>
            <form>
                <input value={newMemo} onChange={handleChange} required></input>
            <button role="button" onClick={handleEdit}>Edit</button>
            </form>
            
            <button role="button" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default MemoCard