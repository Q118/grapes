import React, { useState } from 'react';
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

  return (
    <>
      <div>
          <MainContainer />
      </div>
    </>
  );
}

export default App;
