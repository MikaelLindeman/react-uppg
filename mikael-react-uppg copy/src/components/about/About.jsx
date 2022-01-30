
import "./about.scss"
import ImageOne from "../assets/image.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function About() {
    return (
        <div class="about" id="about">
            <div className="titleTexto">
                <h1>About <span class="blueWord"> Me</span></h1>
            </div>
          
           <div className="container">
                <div className="leftAbout">
                <div class="aboutText">
                <h1>Lorem</h1>
                <h2>Ipsum <span class="blueWord"> Dolor</span></h2>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                <span class="blueWord">Officiis</span> alias iste, nobis, excepturi nam sunt deserunt fugit 
                    totam doloribus eaque autem vero illum nulla 
                    corporis consequuntur? <span class="blueWord">Vel quasi</span> ad iusto.</h3>
                    <h3>Lorem  adipisicing elit. 
                <span class="blueWord">Officiis</span> alias iste, nobis, excepturi nam sunt deserunt fugit 
                    totam doloribus eaque autem vero illum nulla 
                    corporis consequuntur? <span class="blueWord">Vel quasi</span> ad iusto.</h3>
            </div>
            </div>
            <div className="rightAbout">
                
                    <div class="imagesOne" >
                        <a href="https://www.facebook.com/mikael.kalaja" class="pici"><FacebookIcon sx={{ fontSize: 100}} /></a>
                        <a href="https://twitter.com/?lang=sv" class="pici"><TwitterIcon sx={{ fontSize: 100}} /></a>
                        <a href="https://github.com/MikaelLindeman" class="pici"><GitHubIcon sx={{ fontSize: 100}}/></a>
                        <a href="https://www.instagram.com/mikaelkalaja/" class="pici"><InstagramIcon sx={{ fontSize: 100}} /></a>
                    </div>
                </div>  
            </div>
            
        </div>
    )
}

