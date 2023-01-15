import React, { Component } from 'react';
import "./external.css";

const styling ={
    width: "40%",
    height: "300px",
    backgroundColor: "rgb(191, 0, 255)",
    border: "2px solid black",
    borderRadius: "12px",
    textAlign: "center"
}
export default class ClassComponent extends Component {

   

    render() {
        return (
            <div style={styling}>
                <h1>
                    This is created using Class Component
                </h1>
                <h2 className='externalClass'>This is done using external CSS</h2>
                <h2 style={{ color : "blue"}}>This is done using inline CSS</h2>
            </div>

        )
    }
}

