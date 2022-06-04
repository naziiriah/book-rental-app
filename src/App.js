import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './page/Home';
import {Setuser, Loginuser} from "./page/Auth"
import UserProfile from "./page/Profile";
import AddBook from "./page/AddBook";
import Author from "./page/Authors/Author";
import Authors from "./page/Authors/Authors";
import Book from "./page/Book";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path = "/sign-up" element ={<Setuser/>}/>
          <Route path = "/login" element ={<Loginuser/>}/>
          <Route path = "/my-profile" element ={<UserProfile/>}/>
          <Route path = "/add-book" element = {<AddBook/>}/>
          <Route path = "/authors/:author" element = {<Author/>}/>
          <Route path = "/authors" element = {<Authors/>}/>
          <Route path = "/:books" element = {<Book/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
