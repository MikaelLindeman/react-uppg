import GitHubIcon from '@mui/icons-material/GitHub';
import "./icons.scss"

export default function icons({
    icon = <GitHubIcon sx={{ fontSize: 90 }}/>
}) {
  return (
  <div>
        <div className="icon"_>{icon}</div>
  </div>
  );
}
