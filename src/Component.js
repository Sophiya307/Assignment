import React from "react";

const Card =(userInfo)=>{
    const {title}=userInfo;
    return (<div>
        <h2>{title}</h2>
    </div>)
}
export default Card;