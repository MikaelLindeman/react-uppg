import "./navbar.scss"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                <a href="#home"className="itemContainer">
                 <a href="#home" className="arrowLogo">
                 <ArrowBackIosNewIcon fontSize="extrasmall" />
                </a>
                <a href="#home" className="slashLogo">
                &#x2215;
                </a>
                Mikael Lindeman  
                <a href="#home" className="arrowLogo">
                <ArrowForwardIosIcon fontSize="extrasmall"/>
                </a>
                </a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

