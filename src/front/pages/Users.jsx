import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Users = () => {
    const { store, dispatch } = useGlobalReducer();
    const { token } = store;
    const navigate = useNavigate();
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            if (!token) {
                alert("Usuario no autorizado");
                navigate("/login");
                return;
            }

            try {
                const backendUrl = import.meta.env.VITE_BACKEND_URL;
                const response = await fetch(`${backendUrl}/api/users`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error al cargar usuarios:", error);
                alert("Error al cargar usuarios");
                setUsers([]); 
            }
        };

        fetchUsers();
    }, [token, navigate]);

    if (users === null) {
        return (
            <div className="container d-flex justify-content-center align-items-center mt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando usuarios...</span>
                </div>
                <p className="ms-2">Cargando usuarios...</p>
            </div>
        );
    }

    
    if (users.length === 0) {
        return (
            <div className="container d-flex justify-content-center align-items-center mt-5">
                <div className="alert alert-warning" role="alert">
                    No hay usuarios para mostrar.
                </div>
            </div>
        );
    }

    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '100%', maxWidth: '600px' }}>
                <div className="card-body text-center">
                    <h1 className="card-title mb-4">LISTA DE USUARIOS</h1>
                    <ul className="list-group list-group-flush">
                        {users.map((user) => (
                            <li key={user.email || user.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{user.email}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};