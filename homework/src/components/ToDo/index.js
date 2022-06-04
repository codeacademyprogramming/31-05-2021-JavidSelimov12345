import React, { useState, useEffect } from 'react'


function Todo() {

    const [todos, setTodos] = useState([])
    const [todoText, setTodoText] = useState('')

    const [city, setCity] = useState('baku')
    const [cityList,setCityList] = useState([])


    const [items, setItems] = useState([]);



    const getData = (city) => {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d58c9776916be7ba74bbdeff6fa4729b`)
            .then(res => res.json())
            .then(
                (result) => {

                    setItems(result);
                    setCityList([...cityList,result])
                    
                },

                (error) => {

                    console.log(error)
                    alert('Eroror bash verdi')

                }
            )

    }

    useEffect(() => {
        getData(city)
        cityList.push(city)
    }, [city])

    console.log(items)

    console.log(cityList)


    



    const handleTodoCreate = evt => {
        evt.preventDefault();
        setTodos([
            ...todos,
            { text: todoText }

        ])
        setTodoText('')

    }

    return (
        <div>
            <h1>Todo App</h1>
            <form onSubmit={handleTodoCreate}>
                <label htmlFor="todoText">What to do</label>
                <input id="todoText" value={todoText} onChange={e => setTodoText(e.target.value)} />
                <button onClick={handleTodoCreate}>Add</button>
            </form>
            <h2>Things Todo</h2>
            <ul>

                {todos.map((todo, idx) => (
                    <li key={idx}>{todo.text}</li>
                ))}

            </ul>


            <h1>City</h1>
            <form>
            <input id="todoText" value={city} onChange={e => setCity(e.target.value)} />
                {/* <button onClick={handleCity}>AddCity </button> */}
            </form>

            <ul>

                {cityList.map((city, idx) => (
                    <li key={idx}>{city.name}</li>
                ))}

            </ul>

        </div>
    )
}

export default Todo
