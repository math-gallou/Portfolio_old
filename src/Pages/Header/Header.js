import React from 'react';
import './style.css';
import BoxNav from "../Nav/Nav";

function BoxHeader(props){
    const parent = props.object;
    return (
        <header className="header">
            <BoxNav object={parent}/>
        </header>);
}

export default BoxHeader;