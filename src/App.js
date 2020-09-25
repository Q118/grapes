import React, { useState, useEffect } from 'react';
import MainContainer from './components/MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/app.css";
import sampleActivities from './utils/sampleActivities.json';

//export activitycontext

const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";



function App() {

  //state to store the selected activity box
  const [ activities, setActivities ] = useState(sampleActivities);
  const [ selectedActivityId, setSelectedActivityId] = useState(sampleActivities);

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

  return (
    <>
      <div>
          <MainContainer />
      </div>
    </>
  );
}

export default App;
