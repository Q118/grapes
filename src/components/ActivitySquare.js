import React, { useContext } from "react";
import { ActivityContext } from "../App";


export default function ActivitySquare(props) {
    //set up the initial state to hold name and activity

    const { meanings } = useContext(ActivityContext);

    return (
        <>
        <div>

        </div>
            <textarea
                type="activity"
                name="activity"
                className="activity__input"
                placeholder= {meanings[0]} 
            />
        </>
    )
}

// corelated with proper selectedID