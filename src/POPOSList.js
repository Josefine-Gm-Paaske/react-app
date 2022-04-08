// src/POPOSList.js
import './POPOSList.css';
import React from 'react';
import POPOSSpace from './POPOSSpace';

function POPOSList() {
    return (
      //List of pictures. Name, description, image are props
      <div className='POPOSList'> 
        <POPOSSpace
        name="Drone"
        description="Drone - a drone does not have any human pilot, crew or passengers on board. The drone may operate under remote control - often by a human as the operator. Drones in Denmark are classified and depending on the class, a driver's licence is needed by law."
        image="drone.png"/>
        <POPOSSpace
        name="Human Robot"
        description="Robot in the making - Made to look like a real life human. They have robots in different countries that are made to replace a humans job."
        image="Robot.png"/>
        <POPOSSpace
        name="Arm"
        description="Robot Arm - AI - To better robot arms or prosthetics, there is a lot of experiments and testing."
        image="robotic.png"/>
        <POPOSSpace
        name="Printed Circuit Board"
        description="PCB - A Printed circuit board or in technical terminology simply a print, is used in electronics to realize electronic circuits in a compact and robust form."
        image="pcs.png"/>
        <POPOSSpace
        name="Prosthetic"
        description="Traning with a new prosthetic arm - an artificial limb that often is made to replace the missing body part. Having a prosthetic limb can help people through the daily activities."
        image="Prosthetic.png"/>
        <POPOSSpace
        name="Music"
        description="Concert with a robot playing piano - 'Music is a world within itself, with a language we all understand' - Stevie Wonder"
        image="piano.png"/>
        <POPOSSpace
        name="Data collection"
        description="Dash board - Displays data on a user friendly user interface. The dashbord is able to make data more understandable."
        image="Data.png"/>
        <POPOSSpace
        name="Arduino"
        description="Arduino - Arduino boards are able to read inputs - light on a sensor, a finger on a button - and turn it into an output. The output is able to activate a motor, turning on an LED, publishing something online etc."
        image="ardurino.png"/>
        <POPOSSpace
        name="Motherboard"
        description="Motherboard - It's the circuit board that connects all of the hardware to the processor, distributes electricity from a power supply, and defines the types of storage devices, memory modules, and graphics cards, that can connect to the PC."
        image="motherboard.png"/>
      </div>
    )
  }

export default POPOSList