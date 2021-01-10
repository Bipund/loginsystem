import * as React from 'react'

import logo from '../assets/home_page.jpg'

export default function Home(){
 
    
    return(
        <div>

        <img src={logo} style={{width:window.innerWidth,height:window.innerHeight}} />
        <h2 className="text-white" style={{position:'absolute',zIndex:999,top: "50%",left:"5%"}}>You are in Home</h2>
        </div>
        
    )
}