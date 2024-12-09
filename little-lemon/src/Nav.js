
function Navigation() {
    return (
      <nav className="navigation">
        <img
        src = "/Logo.svg"
        alt = "Little Lemon restaurant logo"
        />
        <ul>
            <li><a href = "./Home">Home</a></li>
            <li><a href = "./About">About</a></li>
            <li><a href = "./Menu">Menu</a></li>
            <li><a href = "./Reservations">Reservations</a></li>
            <li><a href = "./OrderOnline">Order Online</a></li>
            <li><a href = "./Login">Login</a></li>
        </ul>
      </nav>
    );
  }

  export default Navigation;
