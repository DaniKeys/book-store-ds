import '../css/styleHeader.css'
import React from 'react';
import ValidFieldsSubmit from './ValidFieldsSubmit.js';

function Header(props) {

    return (
        <>
         <div className="tamañoEncabezado">
            <header id="header" >
                 <div class="topnav">
                    <h3>{props.send}</h3>
                     <img id="logo" src="https://png.pngtree.com/template/20190810/ourmid/pngtree-creative-eco-book-logo-design-image_291929.jpg" />
                </div>
             </header>
        </div>
        </>

    );
};

export default Header;