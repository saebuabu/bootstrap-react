/***********************************  
Maak een fluid navigatieheader component 
deze component bevat een header row 
met bootstrap classes met 3 cols
1 het menu, 
2 een logo in het midden en 
3 een deel waar sociale links worden geplaatst 
*************************/

import './style.css';

function NavigatieHeader() {
  return (
    <>
      <header class="container-fluid">
        <div className="row">
          <div className="col-3">
            <nav class="navbar navbar-expand-md">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Over ons</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-6">
            <h1>Logo</h1>
          </div>
          <div className="col-3">
            Social media links
          </div>
        </div>
      </header>
    </>
  );
}

export default NavigatieHeader;
