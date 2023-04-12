import JSX from '../note/JSX';
import Welcome from '../note/Components_Or_Props';
import Clock from '../note/State';
import Toggle from '../note/Toggle';

import React, { useState } from 'react';
import axios from 'axios';

function ExampleComponent() {
    const [message, setMessage] = useState('');

    const handleClick = async () => {
        try {
            const response = await axios.get('http://35.197.82.185/hello');
            setMessage(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const handleClick2 = async () => {
        try {
            const response = await axios.get('http://35.197.82.185/hello2');
            console.log('start');
            console.log(JSON.stringify(response.data));
            setMessage(JSON.stringify(response.data));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Click me hello</button>
            <button onClick={handleClick2}>Click me hello2</button>
            <p>{message}</p>
        </div>
    );
}

function Main() {
    return (
        <>
            <JSX />
            <Welcome name="Sara" />
            {/* <Welcome name="Cahal" /> */}
            {/* <Welcome name="Edite" /> */}
            <Clock />
            <Toggle />
            {ExampleComponent()}
        </>
    );
};


export default Main;