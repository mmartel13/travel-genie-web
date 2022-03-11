import { AppBar, Toolbar } from "@material-ui/core";

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar style={{backgroundColor: 'black', color: 'white', float: 'center'}}>Travel Genie</Toolbar>;
  };
  
  return (
    <header className="header">
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}