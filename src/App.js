import './App.css';
function Example1() {
  return (
  <>
  <div class="container">
    <div class="row">
      <div class="col">
        1 of 2
      </div>
      <div class="col">
        2 of 2
      </div>
    </div>
    <div class="row">
      <div class="col">
        1 of 3
      </div>
      <div class="col">
        2 of 3
      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
  </div>
  </>
  );
}

function Example2() {
  return(
  <>
  <div class="container text-end">
    <div class="row justify-content-md-center">
      <div class="col col-lg-1">
        1 of 3 row: justify-content-md-center
      </div>
      <div class="col-md-auto">
        Variable width content
      </div>
      <div class="col col-lg-1">
        3 of 3
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        1 of 3
      </div>
      <div class="col-md-auto">
        Variable width content
      </div>
      <div class="col col-lg-1">
        3 of 3
      </div>
    </div>
  </div>
  </>
  );  
}
  
function Example3() {
  return (
  <>
<div class="container">
  <div class="row">
    <div class="col-md-8 col-sm-6">.col-md-8 .col-sm-6</div>
    <div class="col-6 col-md-4 col-sm-6">.col-6 .col-md-4 col-sm-6</div>
  </div>
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>
</>
  );  
}


function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Bootstrap Grid System</h1>
      </header>
      <h2>Example1</h2>
      <Example1 />
      <hr />
      <h2>Example2</h2>
      <Example2 />
      <hr />
      <h2>Example3</h2>
      <Example3 />
    </div>
 
    </>
  );
}

export default App;
