import React from "react";
import Cards from "./Cards";

function Filter(){
    return(
        <div id="main">
        <h2 id='heading'>Latest Posts</h2>  
        <p id="filter-text"><i className ="fa-solid fa-filter"></i> Filter by Category</p>
        <div id="options">
            <button id="selected" className="filter-option">All</button>
            <button className="filter-option">Artificial Intelligence</button>
            <button className="filter-option">Cloud Computing</button>
            <button className="filter-option">DevOps</button>
            <button className="filter-option">Programming Languages</button>
            <button className="filter-option">Mobile Application Development</button>
            <button className="filter-option">Technology and Tools</button>
            <button className="filter-option">Get a Job in Tech Company</button>
            <button className="filter-option">Others</button>
        </div>
        <Cards />
    </div>
    )
}

export default Filter;