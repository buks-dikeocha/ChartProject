import React from 'react';

export default function SignUp() {
    const signUpUser = async (e) => {
        try {
            e.preventDefault()

            const body = {
                "first": "Wunna",
                "last": "Flo",
                "email": "wunna@gunna.co",
                "username": "skybox",
                "password": "123"
            }

            const user = await fetch("http://localhost:5000/newuser", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
                .then(response => response.json())
            
            console.log(user)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="m-5">
            <form onSubmit={(e) => { signUpUser(e) }}>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="first name" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="last name" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="username" />
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="email" />
                </div>
                
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="password" />
                    <div className="text-muted">
                        <small>Password must:</small>
                        <ul>
                            <li><small>have at least 8 characters</small></li>
                            <li><small>have a uppercase letter</small></li>
                            <li><small>have a lowercase letter</small></li>
                            <li><small>have a number</small></li>
                        </ul>                        
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
}
