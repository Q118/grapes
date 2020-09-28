/** @format */

import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import sampleActivities from "./utils/sampleActivities.json";
import ActivityTable from "./components/ActivityTable";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import { v4 as uuidv4 } from "uuid";
import ActivityEdit from "./components/ActivityEdit";

const LOCAL_STORAGE_KEY = "reactGrapes.activities";

export const ActivityContext = React.createContext();

function App() {
	//state to store the selected activity box
	const [selectedActivityId, setSelectedActivityId] = useState();

	const [activities, setActivities] = useState(sampleActivities);

	//for each activity, we just want to compare the activity ID to the ID of our selected recipe
	const selectedActivity = activities.find(
		(activity) => activity.id === selectedActivityId
	);

	//on load
	useEffect(() => {
		const activityJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
		//check if it exists yet
		if (activityJSON != null) setActivities(JSON.parse(activityJSON));
	}, []);

	//called anytime the activities are altered by user
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activities));
	}, [activities]);

	function handleActivitySelect(id) {
		setSelectedActivityId(id);
	}

	//function to allow us to change an activity's 'start'
	function handleActivityChange(id, activity) {
		//set up variable to = all the current activities inside the array
		//use copy so that it doesn't change the state of our original array
		const newActivities = [...activities];
  	const index = newActivities.findIndex((r) => r.id === id);
    
    //this line will replace old activity with new one
		newActivities[index] = activity;
    
    setActivities(newActivities);
	}

	//to be accessed by the entire app
	const ActivityContextValue = {
		handleActivitySelect,
		handleActivityChange,
	};

	return (
		<ActivityContext.Provider value={ActivityContextValue}>
<div>
							<Navbar />
							<ActivityTable activities={activities} />
							{selectedActivity && <ActivityEdit activity={selectedActivity} />}
							{/* This line above is saying, is there a selectedRecipe? if true then
							its going to evaluate the next thing after the "&&", then it will return it
							if the selectedRecipe is undefined it like short-circuits and doesn't return the second part
							its the same as doing a turnery and the thing after the : wud be null */}
				</div>
		</ActivityContext.Provider>
	);
}

export default App;
