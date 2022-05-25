import React, { useState, useEffect } from "react"
import '../stylesheets/Global.css';
import MapGrid from "../components/MapGrid"
function Homepage() {

   

    return (
        <main>
            <div className="home">
                <div className="homepage-picture">

                </div>
                <div className="header">
                    <h1 className="title">
                       Robot Map
                    </h1>
                </div>
                <div className="sub-header">
                    <h2>Illustrates the fucking robot map biiiiiiiiiiitch</h2>
                </div>
 
                <div className="sidebar">

                </div>
                <div className="bottom">
                        <MapGrid/>
                </div>

            </div>
        </main>

    )
}

export default Homepage