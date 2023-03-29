// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: March 20 2023
// This file contains the JS functions for index.html

"use strict";

function enterClicked() {
  // The first base
  let aBase= parseFloat(document.getElementById("base-a").value)

    // Get the second base
  let bBase= parseFloat(document.getElementById("base-b").value)
  
	// Get the height
  let height= parseFloat(document.getElementById("height").value)


  //calculate the area
  let area =  (aBase+bBase)/2*height


  // display the user's pay
  document.getElementById('answer1').innerHTML = "The area of your trapezoid is " +area.toFixed(2)+"cm<sup>2</sup>";
}

