import "./home.scss"
import Image from "../assets/man.png"
import "../../global.scss";


export default function Home() {
    return (
        <div className="home" id="home">
            <div className="leftH">
                <div className="imgContainer">
                    <img src={Image} alt="" />
                </div>
            </div>
            <div className="rightH">
                <div className="wrapper">
                    <h1 class="bigText">Welcome to my <span class="blueWord">amazing</span> portfolio </h1>
                    
                    <h4 class="smallText"> <br/>
                    My name is Mikael Lindeman and I am studying to become a <span class="blueWord">Front-End Developer</span> at KYH Stockholm graduating year 2023. 
                    Keep scrolling or press Read more to see what I can do. 
                   </h4>
                </div>
                <a href="#about" class="button">Read more</a>
                 
            </div>
        </div>
    )
}
