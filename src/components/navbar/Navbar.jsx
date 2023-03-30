import "./navbar.css"

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
            <span className="navbar-brand">
                <img className="logoImage" src="/images/restaurant-logo-design-template_79169-56.avif" />
            </span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav navLinks">
                    <li className="nav-item">
                        <span className="navbarLink">HOLIDAY MENU</span>
                    </li>
                    <li className="nav-item">
                        <span className="navbarLink">MOTHER GRAINS COOKBOOK</span>
                    </li>
                    <li className="nav-item">
                        <span className="navbarLink">ABOUT</span>
                    </li>
                    <li className="nav-item">
                        <span className="navbarLink">HOURS & LOCATION</span>
                    </li>
                    <li className="nav-item">
                        <span className="navbarLink">MENUS</span>
                    </li>
                    <li className="nav-item">
                        <span className="navbarLink">CATERING</span>
                    </li>
                    <li className="nav-item">
                        <button className="navbarButton">ORDER NOW</button>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
  )
}
