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
        <div style={{width:"150px",height:"100px",display:"flex",flexDirection:"column" ,alignItems:"center",justifyContent:"center",margin:"10px",cursor: "crosshair"}} onMouseOver={onMouseIcon} onMouseLeave={onMouseIconOf}>
            <img src={props.address} width="50px" height="50px" alt={props.name} style={{borderRadius:"50px"}}></img>
            {name && <div style={{fontSize:"20px" ,color:"#b4b4b4" ,fontWeight:"500"}}>{props.name}</div>}
        </div>
    </>
)}