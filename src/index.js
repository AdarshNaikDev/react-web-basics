// var React = require("react")
//befor es6 everyone used to use require function to import modules 
// var ReactDOM = require("react-dom")
import React from 'react'
import ReactDOM from 'react-dom'
//inside render method what to show where to show and a callback function is mentioned
ReactDOM.render(
    //to render multiple jsx elements use div tag
    // <div>
    // <h1>hello typescript</h1>
    // <p>Using two jsx elements enclosed by a div</p>
    
    // </div>,
    // [
    //     <h1>hello world!</h1>,
    //     <h2>some text</h2>,
    //     <p>lorem ipsum</p>,
    //     <p>jsx elemnts can be rendered via array of elements</p>
    //    //jsx elements h1 p can be rendered as array of objects 
    // ],
    //open and close bracket can be used or React.fragment can also be used 
    <>
        <h1>hello world!</h1>
         <h2>some text</h2>
         <p>lorem ipsum</p>
        <p>jsx elemnts can be rendered via array of elements</p>
    </>,
    document.getElementById("root")
);