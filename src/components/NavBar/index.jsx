import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink 
              className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
              to="/" >
                {" "}
                Home{" "}
              </NavLink>
              <NavLink to="/about" 
                className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
              >
                About
              </NavLink>
              <NavLink to="/contact" 
                className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
