import { useState } from "react"

export const IconComp = (props)=>{
    
    const [name,setName] = useState(false)

    function onMouseIcon(){
        setName(true)
    }
    function onMouseIconOf(){
        setName(false)
    }

    return(
    <>
        <div style={{width:"75px",height:"70px",display:"flex",flexDirection:"column" ,alignItems:"center",justifyContent:"center",margin:"10px",cursor: "crosshair"}} onMouseOver={onMouseIcon} onMouseLeave={onMouseIconOf}>
            <img src={props.address} alt={props.name} style={{borderRadius:"30px"}}></img>
            {name && <div style={{fontSize:"13px" ,color:"#b4b4b4" ,fontWeight:"500"}}>{props.name}</div>}
        </div>
    </>
)}