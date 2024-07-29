import { BrowserRouter} from "react-router-dom";
import { AnimatingRoutes } from "./AnimatingRoutes";


export const RoutesMaintain=()=>{
    return(<>
      <BrowserRouter>
        <AnimatingRoutes/>
      </BrowserRouter>
    </>)
}