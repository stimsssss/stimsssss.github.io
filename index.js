import React from 'react'; // get the React object from the react module
import {useEffect} from "react";


fetch('https://api.covidtracking.com/v1/us/current.json')
.then(response => response.json())
.then(data => {
console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error));
export var data
document.getElementById('output').innerHTML = data;

class HelloWorld extends React.Component {
  render() {
    return <p>Hello, world!</p>;
    //return <p id="data"></p>
  }
}

export default HelloWorld;

//const Named = () => <div />;
//export default Named;