import JSX from '../note/JSX';
import Welcome from '../note/Components_Or_Props';
import Clock from '../note/State';
import Toggle from '../note/Toggle';

import React, { useState } from 'react';
import axios from 'axios';

function ExampleComponent() {
    const [message, setMessage] = useState('');
    const [message2, setMessage2] = useState('');

    const handleClick = async () => {
        try {
            const response = await axios.get('http://10.128.0.2:3001/hello');
            setMessage(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClick2 = async () => {
        try {
            const response = await axios.get('http://35.184.4.199:3001/hello');
            setMessage2(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClick2}>Click me2</button>
            <p>{message}</p>
            <p>{message2}</p>
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