export const LineComponent = (props)=>{
    return(
    <>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{width:"48%",height:"39px",display:"flex",alignItems:"center",justifyContent:'center'}}>
                <div style={{height:"5px", width:"90%", backgroundColor:"#b4b4b4"}}></div>
            </div>
            <div style={{width:'7%',height:'50px',display:"flex",justifyContent:"center",cursor:"default"}}>
                <div style={{fontSize:"25px" , color:"#b4b4b4"}}>{props.name}</div>
            </div>
            <div style={{width:"48%",height:"39px",display:"flex",alignItems:"center",justifyContent:'center'}}>
                <div style={{height:"5px", width:"90%", backgroundColor:"#b4b4b4"}}></div>
            </div>
        </div>
    </>
)}