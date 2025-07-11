import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Login = () => {

    const { store, dispatch } = useGlobalReducer()

    return (

        <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="col-lg-8 text-light p-5 rounded-4 shadow-lg" style={{ backgroundColor: '#0E397F' }}>

                <h2 className="text-center fw-bold mb-4 border-bottom border-danger pb-2">Register</h2>

                <form className="row g-6">
                    <div className="col-md-6">
                        <label htmlFor="inputYear" className="form-label">Full Name</label>
                        <input type="text" className="form-control shadow-sm" id="inputYear" name="year"
                        // value={form.year} 
                        // onChange={handleChange} 
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputMake" className="form-label">Username</label>
                        <input type="text" className="form-control shadow-sm" id="inputMake" name="make"
                        // value={form.make} 
                        // onChange={handleChange} 
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputModel" className="form-label">Email</label>
                        <input type="text" className="form-control shadow-sm" id="inputModel" name="model"
                        // value={form.model} 
                        // onChange={handleChange} 
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputPickup" className="form-label">Password</label>
                        <input type="text" className="form-control shadow-sm" id="inputPickup" name="pickupLocation"
                        // value={form.pickupLocation} 
                        // onChange={handleChange} 
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
