import React, { useState, useEffect } from 'react';
import MainContainer from './components/MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/app.css";
import sampleActivities from './utils/sampleActivities.json';

//export activitycontext

const LOCAL_STORAGE_KEY = "reactGrapes.activities";

export const ActivityContext = React.createContext();


function App() {

  //state to store the selected activity box
  const [ activities, setActivities ] = useState(sampleActivities);
  const [ selectedActivityId, setSelectedActivityId] = useState();

  //for each activity, we just want to compare the activity ID to the ID of our selected recipe
	const selectedActivity = activities.find(
		(activity) => activity.id === selectedActivityId
  );
  
  
  //on load
  useEffect(() => {
		const activityJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
		//check if it exists yet
    if (activityJSON != null) setActivities(JSON.parse(activityJSON));
    console.log(sampleActivities)
    console.log(mappedActivities)
  }, []);
  
  
  useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activities));
	}, [activities]);


  const mappedActivities =  sampleActivities.map(activity => {
    return activity.name;
  });
 

  const ActivityContextValue = {
    mappedActivities
  }

  return (
    <ActivityContext.Provider value={ActivityContextValue}>
    <div>
          <p>{mappedActivities[0]}</p>
          <MainContainer />

    </div>
    </ActivityContext.Provider>
  );
}

export default App;
