import React from 'react';
import './AppTitle.css';

export default function AppTitle(props){
    return <h2 className="app-title text-center">{props.title}</h2>
}