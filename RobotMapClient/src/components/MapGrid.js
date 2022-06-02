import React, { useState, useEffect, useRef } from 'react';
import MapElement from "../components/MapElement"
import { getColor } from '../apiCaller'
import { move } from '../RobotMovement'
import socketIOClient from "socket.io-client";
const ENDPOINT = "federicoshytte.dk/socket";
const socket = socketIOClient(ENDPOINT);
let interval
function MapGrid(props) {
   
    const [elementGrid, setElementGrid] = useState([
        ["empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty"]
    ])
    const [seconds, setSeconds] = useState(0);

    //test code
    const [input, setInput] = useState("");
    function handleChange(event){
        const {value, name} = event.target
        setInput(value)
    }
    function test() {
        changeGrid({red: "100", green: "230", blue: "100"}, input)
    }

    function startTimer(start) {
        if(start) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else {
            clearInterval(interval)
        }
    }

 


    async function changeGrid(color, direction) {
        let tempGrid = [...elementGrid]
        let result = move(tempGrid, color, direction)
        setElementGrid(result.grid)
        if(result.startTimer) {
            startTimer(true)
        }
        if(result.stopTimer) {
            startTimer(false)
        }
        
    }

    useEffect(() => {
        socket.on("colorinfo", data => {
            console.log("gotten info")
            changeGrid(data.color, data.direction)
        });
    }, [])

    useEffect(() => {
        console.log(elementGrid)
    }, [elementGrid]);
    
    return (
        <ul className="elements">
            {elementGrid.map((element, index) => {
                return ( 
                    <li className={"element-collumn " + index} key={index}>
                         {element.map((e, i) => {
                             return (
                                 
                                <MapElement key={i} color={((typeof e == "string" || typeof e == "object") ? e : "empty")}/>
                             )
                             
                         })}    
                    </li>   
                    )    
            })}
            
            <text style={{
                color: "black"
            }} className="timer">{seconds} s</text>
            <button onClick={test}>wd</button>
            <input style={{
                color: "black"
            }} onChange={handleChange}></input>
        </ul>
        
    )
}

export default MapGrid
