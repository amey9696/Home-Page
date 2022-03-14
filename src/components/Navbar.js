import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar_row">
                    <h1 style={{margin:'20px 30px',color:'white'}}>Visualizer</h1>        
                    <div className="navbar_right">
                        <li>
                            <a to="#"><i class="far fa-flag"></i></a>
                        </li>
                        <li>
                            <a to="#"><i class="far fa-bell"></i></a>
                        </li>
                        <li>
                            <a to="#"><i class="far fa-user-circle"></i></a>
                        </li>
                    </div>
                </div>
            </div>
        </nav> 
    )
}

export default Navbar;