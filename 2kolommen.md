# 2 kolommen en een navbar

Een oefening met een grid met 1 row en 2 kolommen en een Navbar

## Voorbeeld html code

De header met een navbar in de 1ste kolom

``` html
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
```

## [Terug](README.md)
