import React, { useState, useEffect, useRef } from 'react';

function MapElement(props) {


    return (
        <div style={{
            backgroundColor: props.color == "empty" ? "white" : `rgb(${props.color.red},${props.color.green},${props.color.blue})`,
            marginTop: "5%",
            marginBottom: "5%"
        }}
        className="element" >
        </div>
    )
}

export default MapElement