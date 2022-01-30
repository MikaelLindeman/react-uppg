import "./skills.scss"
import "../../../src/global.scss"
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ComputerIcon from '@mui/icons-material/Computer';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';


export default function Skills() {

    
        return (
        <div className="skills" id="skills">
            <h1 class ="bigText">My <span class="blueWord">Skills</span> </h1>
                <div className="container">
                     <div className = "card">
                        <div className="top">
                           <ArchitectureIcon sx={{ fontSize: 150}} 
                           
                            />
                        </div>
                    <div className="center">
                        <h3 class="titleCard">Front-end</h3>
                        <h4>Includes languages like <span class="blueWord">HTML, CSS, Javascript</span> and many different frameworks like 
                        <span class="blueWord"> Bootstrap </span> 
                        and much more. </h4>

                 </div>
                </div>
                <div className="card">
                <div className="top">
                    <ComputerIcon sx={{ fontSize: 150 }} />
                    
                    </div>
                    <div className="center">
                        <h3 class="titleCard">React JS</h3>
                        <h4>This website is made using <span class="blueWord">React JS</span>. A framework used 
                        to make your experience here <span class="blueWord">smooth.</span></h4>
                    </div>
                </div>
                <div className="card">
                <div className="top">
                    <AspectRatioIcon sx={{ fontSize: 150 }} />
                    
                    </div>
                    <div className="center">
                        <h3 class="titleCard">Figma</h3>
                        <h4> To help create and design <span class="blueWord">responsive</span>, easy to use websites with 
                        <span class="blueWord"> success</span>. This is why <span class="blueWord">Figma</span> is the best.</h4>
                    </div>
                </div>
                <div className="card">
                <div className="top">
                    <EventAvailableIcon sx={{ fontSize: 150 }} />
                    
                    </div>
                    <div className="center">
                        <h3 class="titleCard">Toolbox</h3>
                        <h4>Experience using <span class="blueWord">SASS, Asana, Trello, VS Code, </span> and other  
                        skills and tools. And last but not least,  <span class="blueWord">GitHub</span>.</h4>
                    </div>
                </div>
            </div>
        </div>
   
    
    
    )
}
