import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Users = () => {
    const { store,dispatch }=useGlobalReducer   
    const {token}=store 
    const navigate=useNavigate()
    const [users,setUsers]=useState()

    useEffect(()=>{
        const fetchUsers = async (e) => {
            if (!token){
                alert("usuario no autorizado")
                navigate("/login")
                return
            }

            try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL;
			const response = await fetch(`${backendUrl}/api/users`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
                    "Authorizacion": `Bearer ${token}`
				},
			})
			const data = await response.json()
            setUsers(data)
		}
		catch (error) {
			console.error("Error al cargar usuario", error)
			alert("Error al cargar usuario")
		}
	}

    fetchUsers()
    },[])

    

    return (

        <div className="container d-flex justify-content-center align-items-center mt-5">
            <h1>USERS LIST</h1>

            <ul>
                {users.map((user)=>(
                    <li key={users.email}></li>))}
            </ul>
                   
                        
                   
        </div>
    );
}

