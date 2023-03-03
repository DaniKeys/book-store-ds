import Central from "./Central.js";
import Header from '../js/Header.js';
import Footer from '../js/Footer.js';
import Home from '../js/Home.js';


function Main(props) {
    return (
        <>
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Central />
            </div>
            <div>
                <Footer />
            </div>
       </div>
        </>
    );
};

export default Main;