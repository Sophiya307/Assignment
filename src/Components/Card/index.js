import React from "react";

const Card =({userInfo})=>{
    const {title}=userInfo;
    return (<div style={{color:"white"}}>
        <h2>{title}</h2>
    </div>)
}
export default Card;