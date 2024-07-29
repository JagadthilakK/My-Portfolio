import "../StyleSheet/Header.css"
import {Link} from "react-router-dom"

export const Header =(props)=> {
    return(
    <>
      <div className="header">
        <div className="title">
          {props.name}
        </div>
        <div className="menu">
          <ul>
              {props.list.map((item,index)=>(<li key={index}>
                <Link className="link" to={item.path}>{item.name}</Link>
              </li>))}
          </ul>
        </div>
      </div>
    </>
    )
}