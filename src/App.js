import React, { useState } from "react";
import Search from './components/Search';
import Accordion from './components/Accordion';
import Dropdown from './components/dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
    const [selected, setSelected] = useState(options[0])
    return( //when JSX tag inside JSX tag, it is provided as props.children to outer
        <div>
            <Header />
            <Route path='/'>  
                <Accordion items={items}/>
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                label = 'Select a color'
                options = {options}
                selected = {selected}
                onSelectedChange = {setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
            
        </div>
    )
}

export default App;