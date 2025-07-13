import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Singup = () => {

	const navigate = useNavigate()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [username, setUsername] = useState("")
	const [fullName, setFullName] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault();

		// if (!email || !password) {
		//     alert("incorrect email or password")
		//     return
		// }

		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL;
			const response = await fetch(`${backendUrl}/api/singup`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ email, password, username, fullName }),
			})
			const data = await response.json()

			// dispatch({
			//     type: "login_success",
			//     payload: {
			//         token: data.token,
			//         user: data.user
			//     }
			// })
			navigate("/login")
		}
		catch (error) {
			console.error("Error de registro", error)
			alert("Register error")
		}
	}

	return (

		<div className="container d-flex justify-content-center align-items-center mt-5">
			<div className="col-lg-8 text-light p-5 rounded-4 shadow-lg" style={{ backgroundColor: ' #FFA500' }}>

				<h2 className="text-center text-dark fw-bold mb-4 border-bottom border-primary pb-2">REGISTER</h2>

				<form className="row g-6" onSubmit={handleSubmit}>
					<div className="col-md-6">
						<label htmlFor="inputFullName" className="form-label text-dark fw-bold ">Full Name</label>
						<input type="text" className="form-control shadow-sm" id="inputFullName" name="fullName"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
						/>
					</div>
					<div className="col-md-6">
						<label htmlFor="inputUsername" className="form-label text-dark fw-bold ">Username</label>
						<input type="text" className="form-control shadow-sm" id="inputUsername" name="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="col-md-6">
						<label htmlFor="inputEmail" className="form-label text-dark fw-bold ">Email</label>
						<input type="text" className="form-control shadow-sm" id="inputEmail" name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="col-md-6">
						<label htmlFor="inputPassword" className="form-label text-dark fw-bold ">Password</label>
						<input type="password" className="form-control shadow-sm" id="inputPassword" name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="col-12 text-center mt-4">
						<button
							type="submit"
							className="btn btn-danger btn-lg fw-bold px-5 py-2"
						>
							Let´s started
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

