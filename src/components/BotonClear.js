import React from "react";
import '../css/BotonClear.css'

const botonClear = (props) => {


    return(
        <div 
          className="boton-clear" 
          onClick={()=>{props.manejarClick()} }>
            Clear
        </div>
     )
}

export default botonClear