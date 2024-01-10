import { useState } from "react"

const useUsers=()=>{
    const [users,setUsers]=useState([]);

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
    .catch(err=>console.log(err))
    
    return users
}

export default useUsers;