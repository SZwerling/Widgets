import React, { useState } from "react";
import Search from './components/Search';
import Accordion from './components/Accordion';
import Dropdown from './components/dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: "What is React?",
        content: "React is a frontend JS framework. That folks like to use."
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers. It allows for "
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components."
    }
]

const options = [
    {
        label: "The color red",
        value: "red"
    },
    {
        label: "The color green",
        value: "green"
    },
    {
        label: "The color blue",
        value: "blue"
    }
]


const App = () => { 
    return(
        <div>
            <Translate />
        </div>
    )
}

export default App;