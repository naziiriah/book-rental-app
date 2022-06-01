import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './page/Home';
import {Setuser, Loginuser} from "./page/Auth"


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path = "/login" element ={<Setuser/>}/>
          <Route path = "/sign-up" element ={<Loginuser/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
