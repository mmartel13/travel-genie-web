import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/");
  }

  const displayDesktop = () => {
    return <Toolbar style={{backgroundColor: 'black', justifyContent: "center" }}>
      <Button onClick={handleHomePage}>
      <img src='/assets/travel-genie.svg' style={{height: "36px"}} alt='travel genie logo'/>
      </Button>
      </Toolbar>;
  };
  return (
    <header className="header">
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}