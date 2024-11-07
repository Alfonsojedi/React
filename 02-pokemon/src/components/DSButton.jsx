import { useState } from "react";

export function DSButton({icon,text}){
    return <h6 className="red"><button type="button" className="btn p-0 radius-btn border">{icon}</button> {text.toUpperCase()}</h6>
}

export default DSButton;