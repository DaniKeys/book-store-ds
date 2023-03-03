import { Link, Outlet } from "react-router-dom";
import '../css/styleMenu.css'



function Menu(props) {

    function slideBars() {
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;
    
        for (i = 0; i < dropdown.length; i++) {
            var isOpen = false; // variable para controlar el estado de visualización
    
            dropdown[i].addEventListener("mouseover", function () {
                this.classList.toggle("active");
    
                var dropdownContent = this.nextElementSibling;
                if (isOpen) {
                    dropdownContent.style.display = "none";
                    isOpen = false;
                } else {
                    dropdownContent.style.display = "block";
                    isOpen = true;
                }
            });
        }
    }

    return (
        <>
                  
         <div id="size">
         <img src="https://thumbs.dreamstime.com/b/hombre-3d-y-libros-coloridos-13846800.jpg"  alt="Avatar" class="avatar"></img>
             <div className="sidenav" >
                <button className=" fa fa-fw fa-user  dropdown-btn"  onMouseOver={() => slideBars()}>ADMIN
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-container">
                    <Link to="/updateStock" class="list-group-item list-group-item-action custom-bg">Update Stock</Link>
                    <Link to="/sales" class="list-group-item list-group-item-action custom-bg" >Sales</Link>
                </div>
                <button className="fa fa-fw fa-home dropdown-btn "  onMouseOver={() => slideBars()}>DONATIONS
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-container">
                     <Link to="/saveBook" class="list-group-item list-group-item-action custom-bg">Save Book</Link>
                </div>
                <button className="fa fa-fw fa-store dropdown-btn" onMouseOver={() => slideBars()}>BOOK STORE
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-container">
                    <Link to="/searchBook" class="list-group-item list-group-item-action custom-bg" >Search Book</Link>
                    <Link to="/buyBook" class="list-group-item list-group-item-action custom-bg" >Buy Book</Link>
                </div>
            </div>
        </div>
            <Outlet />

        </>
    );
};
export default Menu;

