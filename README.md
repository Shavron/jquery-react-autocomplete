This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## jquery-react-autocomplete
A react autocomplete using your loved one jQuery
![Example](https://i.imgur.com/DZIbceF.png?1)

### Installation

Run `yarn add jquery-react-autocomplete`

### Usage

Import:

`import JqueryReactAutocomplete from "jquery-react-autocomplete";`

and use as:

```javascript
<JqueryAutocomplete inputProps={{id : 'sourceCity',label:'City: ',value:sourceCity.label || ''}} onSourceSelect={handleSourceCitySelect}/>
```

Available Props are

| Prop             | Type    | Default                                                            |
| -------------    |---------| ------------------------------------------------------------------ |
| inputProps       | Object  | {id : 'sourceCity',label:'City: ',value:sourceCity.label || ''}    |
| onSourceSelect   | Function| Function to get the selected city                                  |



This autocomplete assumes API data like:
```
        {city_name: "Bangalore", city_id: 1001968, city_label: "Bangalore (All Locations)"}
```
You can change autocomplete below section, if needed...
```
        $.map(data.city_list, function(item) {
            return {
            label: item.city_label,
            value: item.city_name,
            name: item.city_name,
            code: item.city_id
        };
```



Example:

```javascript
function App() {
  const[sourceCity,setsourceCity]  = useState({});

  const handleSourceCitySelect = (value) => {
    setsourceCity(value);
    console.log(value);
  }  


  return (
    <div className="col-sm-6 pad-3">
    <JqueryReactAutocomplete inputProps={{id : 'sourceCity',label:'City: ',value:sourceCity.label || ''}} onSourceSelect={handleSourceCitySelect}/>
  </div>
  );
}

}
```
