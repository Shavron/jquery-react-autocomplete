import React,{useState} from 'react';
import JqueryAutocomplete from "./JqueryAutocomplete"


function App() {
  const[sourceCity,setsourceCity]  = useState({});

  const handleSourceCitySelect = (value) => {
    setsourceCity(value);
    console.log(value);
  }  


  return (
    <div className="col-sm-6 pad-3">
    <JqueryAutocomplete inputProps={{id : 'sourceCity',label:'City: ',value:sourceCity.label || ''}} onSourceSelect={handleSourceCitySelect}/>
  </div>
  );
}

export default App;
