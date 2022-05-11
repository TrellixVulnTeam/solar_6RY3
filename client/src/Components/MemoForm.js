import { useState, useEffect } from "react"
import axios from "axios";



function MemoForm({user, planet}) {
    const [comment, setComment] = useState("")


    function handleSubmit(e) {
        axios.post(`/notes`, {
            user_id: user.id,
            planet_id: planet.id,
            memo: comment
            
        })

    }

    function handleOnChange(e) {

        setComment(e.target.value);
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={comment} onChange={handleOnChange}></input>
                </label>
             
                {/* <button class="button-52" role="button" type="submit">Post</button> */}
                <button type="submit">Post</button>
            </form>
        </div>

    )
}

export default MemoForm