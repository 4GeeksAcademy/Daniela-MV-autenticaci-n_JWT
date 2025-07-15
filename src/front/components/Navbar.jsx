import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	const navigate=useNavigate()

	const handleLogout=()=>{
		dispatch({type:"logout"})
		navigate("/login")
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/login">
					<span className="navbar-brand mb-0 h1">Login</span>
				</Link>

				<div className="ml-auto">
					
						<button className="btn btn-primary" onClick={handleLogout}>Logout</button>
					
				</div>
			</div>
		</nav>
	);
};