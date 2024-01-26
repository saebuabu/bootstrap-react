import './App.css';

function Example3() {
  return (
  <>
<div class="container">
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
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

function Example2() {
return(
<>
<div class="container text-end">
  <div class="row justify-content-md-center">
    <div class="col col-lg-1">
      1 of 3
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

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      </header>
      <div className="container border ">
        <div className="row text-start">
        <div className="col-lg-8 col-md-6">
            <p>col 1</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <p>col 2</p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <Example2 />
    <hr />
    <Example3 />
    </>
  );
}

export default App;
