import React from "react"
import { NavLink } from "react-router-dom"

function Navbar(){

    return(
        <div className="navbar">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/players" >Players</NavLink>
            <NavLink to="/teams" >Teams</NavLink>
            <NavLink to="/coaches" >Coaches</NavLink>
        </div>
    )
}

export default Navbar