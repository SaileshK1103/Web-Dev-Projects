// Header.jsx
function Header(props) {
  // Use props.title if it exists, otherwise use a default string
  const headerTitle = props.title || "Default React Application";
    return (
      <header>
        <h1>{headerTitle}</h1>
      </header>
    );
  }
  
  export default Header;