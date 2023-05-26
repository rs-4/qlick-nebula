import { Route, Routes, BrowserRouter  } from "react-router-dom";
import Panel from "../pages/panel"
import HomePage from "../pages/homepage"


const AllRoutes = () => {

    return ( 
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/panel*" element={<Panel />} />
        </Routes>
        </BrowserRouter>
    )
}
export default AllRoutes;