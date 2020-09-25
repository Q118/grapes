import React from 'react'

export default function ActivitySquare(props) {
    //set up the initial state to hold name and activity

    const { id, name, meaning, start } = props;


    return (
        <>
        <div>
            <h3>{name}</h3>
        </div>
            <textarea
                type="activity"
                name="activity"
                className="activity__input"
                // placeholder= {props.meaning}
            />
        </>
    )
}


//need to map in the "start" for each

{/* <div> {activities.map((recipe) => {
    return <li key={activity.id} {...activity} />;
})}           
       </div>  */}