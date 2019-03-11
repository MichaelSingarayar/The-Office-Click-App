import React from "react";
import jim from "../assests/images/jim.jpg";
import michael from "../assests/images/michael.jpg";
import pam from "../assests/images/pam.jpg";
import angela from "../assests/images/Angela.jpg";
import toby from "../assests/images/toby.jpg";
import dwight from "../assests/images/dwight.jpg";
import andy from "../assests/images/andy.jpg";
import creed from "../assests/images/creed.jpg";
import Counter from "./Counter";

function Container(props) {
    return (
        <>
        <div onClick={() => props.handleClick()} id ="property1">
        <img src={jim} alt="jim"  />

        </div>
        <div onClick={() => props.handleClick()} id ="property2">
        <img src={michael} alt="michael" />
        </div>
        <div onClick={() => props.handleClick()} id ="property3">
        <img src={pam} alt="pam" />
        </div>
        <div onClick={() => props.handleClick()} id ="property4">
        <img src={angela} alt="jim" />
        </div>
        <div onClick={() => props.handleClick()} id ="property5">
        <img src={toby} alt="toby" />
        </div>
        <div onClick={() => props.handleClick()} id ="property5">
        <img src={dwight} alt="dwight" />
        </div>
        <div onClick={() => props.handleClick()} id ="property6">
        <img src={andy} alt="andy" />
        </div>
        <div onClick={() => props.handleClick()} id ="property7">
        <img src={creed} alt="creed" />
        </div>
        </>
    );
}

export default Container;