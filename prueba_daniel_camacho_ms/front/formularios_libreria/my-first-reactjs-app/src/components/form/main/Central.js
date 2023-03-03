import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../js/Home.js'
import NoPage from "../js/NoPage.js";
import BookBuy from "../js/BookBuy.js";
import UpdateStock from "../js/UpdateStock.js";
import GetAllVentas from "../js/GetAllVentas.js";
import FindById from "../js/FindById.js";
import Book from "../js/BookForm.js";
import Menu from "../js/Menu.js";
import '../css/styleMenu.css';


function Central(props) {
  return (
    <>
       <BrowserRouter>
      <div className='espacioCentral'>
        <div id="menu">
          <Menu />
        </div>
        <div id="formulario">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="/updateStock" element={<UpdateStock />} />
                <Route path="/sales" element={<GetAllVentas />} />
                <Route path="/saveBook" element={<Book />} />
                <Route path="/searchBook" element={<FindById />} />
                <Route path="/buyBook" element={<BookBuy />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
};

export default Central;