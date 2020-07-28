import React from 'react';
import './style.css';

 const Navbar = (props) => {


    const submitSearch=(e)=>{
        e.preventDefault();
        alert('Searched');
    }

    return (
        <div className="search">
           <form onSubmit={submitSearch}>
           <input type="text" className="searchinput" placeholder="Search" />
            <img src={require('../../assets/Icons/sanu.png')} alt="Search" />
           </form>
        </div>
    )
}

export default Navbar;
