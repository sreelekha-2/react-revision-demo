import React, { useCallback, useEffect, useMemo, useReducer, useState } from "react"
import Heading from "./Heading"
import Person from "./Person"
import Header from "../Header"
import Router from "../routes"
import useUsers from "../customhook/useUsers"

function reducer(state, action) {
    if (action.type === "increase_age") {
        return { ...state, age: state.age + 2 }
    } else if (action.type === "change_name") {
        const updatedName = state.name === "sree" ? "sreelekha" : "sree"
        return { ...state, name: updatedName }
    }
    else if (action.type === "change_name_age") {
        const updatedName = state.name === "sree" ? "sreelekha" : "sree"
        return { ...state, name: updatedName, age: state.age + 2 }
    }
    return state
}

const HooksDemo = () => {

    //customHook
    const users = useUsers()

    //useState-->to add state to the component
    //It returns array with two arguments one is current state and second is function to update the state
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(10);
    const [personAge, setPersonAge] = useState(30)

    //useEffect-->allows performing side effects like data fetching and it will get call after initial render
    //It has two arguments callback func and dependency array
    //If one of it's dependency get changed useEffect will call again after re-render
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }, [])

    //Example is in Heading.js file
    //useContext-->it involves in state management mechanism.It allows to share data between multiple components without
    //need of prop drilling We can access the context with this hook,which is passed as a value to the provider

    //useReducer-->it will accept reducer and inital state as an arguments and returns an array that holds state value and
    // dispatch function

    const [state, dispatch] = useReducer(reducer, { name: "sree", age: 20 })

    //useMemo-->It returns memoized value,useMemo runs after inital render and when it's dependency get changed.It will help
    //for optimization and improves the performance of the component.It skips expensive recalculations

    //useMemo Example Starts
    const sumOfNumbers = (num) => {
        let total = 0;
        for (let i = 1; i <= num; i++) {
            total += i
        }
        return total
    }

    const sum = useMemo(() => sumOfNumbers(num), [num])
    //useMemo Example Ends

    //useCallback-->It returns memoized function.It returns or creates new function when it's dependency get changed.Basically
    //it skips re-rendering
    const changePersonAge = useCallback(() => {
        setPersonAge(personAge => personAge + count)
    }, [count])


    return (
        <div>
            <Header />
            {/* useState Example Starts */}
            <h3>Count {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            {/* useState Example Starts */}

            {/* useReducer Example Starts */}
            <h2>My name is {state.name} I am {state.age} old</h2>
            <div>
                <button onClick={() => dispatch({ type: "change_name" })} style={{ marginRight: 10 }}>Change Name</button>
                <button onClick={() => dispatch({ type: "increase_age" })} style={{ marginRight: 10 }}>Increase Age</button>
                <button onClick={() => dispatch({ type: "change_name_age" })} style={{ marginRight: 10 }}>Change Name and Age</button>
            </div>
            {/* useReducer Example Ends */}

            {/* useContext Example Starts */}
            <Heading />
            {/* useContext Example Ends */}

            {/* useMemo Example Starts */}
            <input type="number" placeholder="Enter Number" onChange={(e) => setNum(e.target.value)} />
            <p>Sum of first {num} numbers is {sum}</p>
            {/* useMemo Example Ends */}

            <p>Person age is {personAge}</p>
            <Person changePersonAge={changePersonAge} />

            {/*Lazy Loading example */}
            <Router />

            {/*Custom Hook*/}
            <ul>
                {users?.map(user => {
                    return <li key={user.id}>
                        {user.name}
                    </li>
                })}
            </ul>

        </div>
    )
}

export default HooksDemo