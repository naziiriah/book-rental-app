import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './page/Home';
import {Setuser, Loginuser} from "./page/Auth"
import UserProfile from "./page/Profile";
import AddToBook from "./page/AddBook";
import Author from "./page/Authors/Author";
import Authors from "./page/Authors/Authors";
import Book from "./page/Book";
import UpdateBook from "./page/UpdateBook";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path = "/sign-up" element ={<Setuser/>}/>
          <Route path = "/login" element ={<Loginuser/>}/>
          <Route path = "/my-profile" element ={<UserProfile/>}/>
          <Route path = "/add-book" element = {<AddToBook/>}/>
          <Route path = "/authors/:author" element = {<Author/>}/>
          <Route path = "/authors" element = {<Authors/>}/>
          <Route path = "/library/:books" element = {<Book/>}/>
          <Route path = "/my-profile/my-books/:books" element = {<UpdateBook/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
