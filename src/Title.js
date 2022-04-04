// scr/Title.js

import React from  'react'
import './App.test'

/**
 * The language is called JSX
 * It is build on HTML
 * @returns 
 */
function Title(){
    
    return(
        <div>
            <h1> return React.createElement("div", null, React.createElement("h1", null, "SFPOPOS"));</h1>
        </div>
    )
}
export default Title