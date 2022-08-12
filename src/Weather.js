import React from 'react';
import axios from 'axios';
import { Puff } from  'react-loader-spinner'


export default function Weather (props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp} C`);
    }
    let apiKey = "a634dd1dee9be0dfeff6ce65b2525c84";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
        <Puff color="red" height={80} width={80} />
    );
}
