import { AppBar, Toolbar } from "@material-ui/core";

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar style={{backgroundColor: 'black', display: "flex", justifyContent: "center" }}>
      <img src='/travel-genie.svg' style={{height: "36px"}} alt='travel genie logo'/>
      </Toolbar>;
  };
  
  return (
    <header className="header">
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}