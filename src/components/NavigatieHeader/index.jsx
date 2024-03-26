/***********************************  
Maak een fluid navigatieheader component 
deze component bevat een header row 
met bootstrap classes met 3 cols
1 het menu, 
2 een logo in het midden en 
3 een deel waar sociale links worden geplaatst 
*************************/

import "./style.css";
import NavBar from "../NavBar";

function NavigatieHeader() {
  return (
    <>
      <header class="container-fluid">
        <div className="row">
          <div className="col-3">
            <NavBar></NavBar>
          </div>
          <div className="col-6">
            <h1><img alt="logo" className="logo-img" src="https://picsum.photos/100"></img></h1>
          </div>
          <div className="col-3">Social media links</div>
        </div>
      </header>
    </>
  );
}

export default NavigatieHeader;
