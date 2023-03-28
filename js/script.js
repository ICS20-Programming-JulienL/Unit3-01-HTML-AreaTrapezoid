// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: March 20 2023
// This file contains the JS functions for index.html

"use strict";

function enterClicked() {
  // get the user work hours
  let aBase= parseFloat(document.getElementById("prism-base-a").value)

	// get the hourly pay from the user
  let height= parseFloat(document.getElementById("prism-height").value)

  // get the hourly pay from the user
  let bBase= parseFloat(document.getElementById("prism-base-b").value)


  //calculate the pay  
  let abBase = aBase+bBase;
  //calculate the taxes
  let area =  abBase*0.5*height


  // display the user's pay
  document.getElementById('answer1').innerHTML = "The area of your trapezoid is " +area.toFixed(2)+"cm<sup>2</sup>";
}

