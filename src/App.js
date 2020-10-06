import React, {useState} from 'react';
import './App.css';


const initialCounters = [
    {id: 1, title: 'Blue', value: 0},
    {id: 2, title: 'Orange', value: 10},
    {id: 3, title: 'Green', value: 20},
    {id: 4, title: 'Red', value: 30},
];

function App() {
    const [counters, setCounters] = useState(initialCounters);
    const deleteById = (id) => {
        const filteredCounters = counters.filter(el => el.id !== id);
        setCounters(filteredCounters)
    }

    const addCounter = () => {
        const newCounter = [...counters, {id: Math.random(), title: " ", value: 0}];
        setCounters(newCounter);
    }

    const counterChange = (id, value) => {
        const newCounters = counters.map(el => {
            if (el.id === id) {
                return {...el, value: el.value + value}
            }
            return el;
        })

        setCounters(newCounters);
    }

    return (
        <div className="App">
            <button onClick={() => addCounter()}> add counter</button>
            <ul>
                {counters.map((el, i) => <li key={el.id}>
                    <button onClick={() => counterChange(el.id, -1)}> -</button>
                    {el.value}
                    {' '}
                    <button onClick={() => counterChange(el.id, 1)}> +</button>
                    <button onClick={() => deleteById(el.id)}> delete</button>
                </li>)}
            </ul>
        </div>
    );
}
    export default App;