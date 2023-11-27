import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user'); //to check localstorage for user info
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear()//ckear user data from localstorage
        navigate('/signup');
    }
    return (//if auth ture(localsorage have data) then upper conditon 
        <div>
            
            {auth ? 
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">PubWeb</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/">Home</Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/add">Add Products</Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/update/:id">Update Products</Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/profile/:id">Profile</Link> </li>
                <li className="nav-item"><Link className="nav-link nav-right" onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link> </li>
               
              </ul>
            </div>
          </div>
        </nav>
                :
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="#">PubWeb</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item"><Link className="nav-link " aria-current="page" to="/">Home</Link> </li>
                      </ul>
                      <ul className="navbar-nav nav-right">
                      <li className="nav-item"><Link className="nav-link" to="/signup">SignUP</Link> </li>
                      <li className="nav-item"><Link className="nav-link" to="/login">Login</Link> </li>
                    </ul>
                  </div>
                </div>
              </nav>
            }
        </div>  
    )
}
export default Nav;