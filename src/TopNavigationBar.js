import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./TopNavSearchHelper.js"
import "./TopNavigationBar.css"


class TopNavigationBar extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			text: '',
			strikethrough: false,
			underline: false,
			mispelled: false
		};
		this.onButtonClick = this.onButtonClick.bind(this);
		this.onSTClick = this.onSTClick.bind(this);
		this.onUClick = this.onUClick.bind(this);
		this.onMClick = this.onMClick.bind(this);
	}
	onSTClick()
	{
		this.setState(function(prevState) {
			if (prevState.strikethrough === true)
			{
				return {strikethrough: false}
			}
			else {
				return { strikethrough: true};
			}
		});
	}

	onUClick()
	{
		this.setState(function(prevState) {
			if (prevState.underline === true)
			{
				return {underline: false}
			}
			else {
				return { underline: true};
			}
		});
	}

	onMClick()
	{
		this.setState(function(prevState) {
			if (prevState.mispelled === true)
			{
				return {mispelled: false}
			}
			else {
				return { mispelled: true};
			}
		});
	}

	onButtonClick()
	{
		this.setState(function(prevState, props)
		{	
			//console.log(this.state.text);
			//var checkedSbox = document.querySelector("strikecheckbox:checked").value;
			//var checkedUbox = document.querySelector("undercheckbox:checked").value;
			var a = document.getElementById('searchbizzle').value;
			if (this.state.strikethrough !== true && this.state.underline !== true && this.state.mispelled !== true) 
			{
				//a.strike();
				//console.log("both no");
				return { text: a};
			}
			else if (this.state.strikethrough === true && this.state.underline !== true && this.state.mispelled !== true)
			{
				var p = document.getElementById("answer");
				p.style.textDecoration = "line-through";
				return { text: a };
			}
			else if (this.state.underline === true && this.state.strikethrough !== true && this.state.mispelled !== true)
			{
				document.getElementById("answer").style.textDecoration = "underline";
				return { text: a };
			}
			else if (this.state.underline !== true && this.state.strikethrough !== true && this.state.mispelled === true)
			{
				document.getElementById("answer").style.textDecoration = "underline dotted red";
				return {text: a };
	
			}
			else if (this.state.underline === true && this.state.strikethrough === true && this.state.mispelled === true)
			{
				return {
					text: "sorry you cant use both at the moment"
				};
			}
			
		});
	}
	render()
	{
		return (
			<div className="topnav">
				<input type="text" placeholder="Enter Text" id="searchbizzle"></input>
				<button type="submit" onClick={this.onButtonClick}>Submit</button>
				<p>Your new text: </p>
				<p id="answer">{this.state.text}</p>
				<ul className="checkboxes">
					<p className="checkbox" id="strike">strikethrough</p>
						<input type="checkbox" onClick={this.onSTClick}></input>
					<p className="checkbox" id="under">underline</p>
						<input type="checkbox" onClick={this.onUClick}></input>
					<p className="checkbox" id="mis">misspell</p>
						<input type="checkbox" onClick={this.onMClick}></input>
				</ul>
			</div>	
		);
	}
}




export default TopNavigationBar;