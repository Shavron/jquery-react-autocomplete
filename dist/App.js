import React, { useState } from 'react';
import JqueryReactAutocomplete from "./JqueryReactAutocomplete";

function App() {
  const [sourceCity, setsourceCity] = useState({});

  const handleSourceCitySelect = value => {
    setsourceCity(value);
    console.log(value);
  };

  return React.createElement("div", {
    className: "col-sm-6 pad-3"
  }, React.createElement(JqueryReactAutocomplete, {
    inputProps: {
      id: 'sourceCity',
      label: 'City: ',
      value: sourceCity.label || ''
    },
    onSourceSelect: handleSourceCitySelect
  }));
}

export default App;