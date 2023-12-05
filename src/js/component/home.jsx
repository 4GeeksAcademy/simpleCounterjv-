import React, { useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Counters({seconds}){
return (
	<div className="background">
		<h1>Simple Counter</h1>
		<p>Jessica Valbuena</p>
	<button type="button" className="btn">
	<div className= "container">
	<i class="fas fa-clock"></i>
	<div className="two">{Math.floor(seconds / 100000) % 10}</div>
	<div className="three">{Math.floor(seconds / 10000) % 10}</div>
	<div className="four">{Math.floor(seconds / 1000) % 10}</div>
	<div className="five">{Math.floor(seconds / 100) % 10}</div>
	<div className="six">{Math.floor(seconds / 10) % 10}</div>
	<div className="seven">{Math.floor(seconds / 1) % 10}</div>
	</div>
	</button>
	</div>
	

);
}
	

export default Counters;
