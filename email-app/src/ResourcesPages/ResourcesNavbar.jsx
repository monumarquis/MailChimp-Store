
import "./NavbarResou.css";  
import { FaChevronDown } from "react-icons/fa";


const ResourcesNavbar = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;
    }

    return (
        <div>
            <div id="navbar">
                <div className="navbar-ele">
                    <div >Marketing Library</div>
                    <div> | </div>
                    <div className="explore">Explore Topics</div>
                    <div><FaChevronDown/></div>
                </div>
            </div>
        </div>
    )
}

export default ResourcesNavbar;