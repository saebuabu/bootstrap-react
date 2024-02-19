import React from 'react';
import './style.css';

function Example1() {
  return (
    <>
    <div>
      <h2>Example1</h2>
        <div className="container">
            <div className="row">
                    <div className="col-sm-4">1</div>
                    <div className="col-sm-4">2</div>
                    <div className="col-sm-4">3</div>           
            </div>
        </div>
    </div>
    </>
    )
}

/* Function Example2 with an other example with a bootstrap grid system with 3 columns */
function Example2() {
  return (
    <>
    <div>
      <h2>Example2</h2>
        <div className="container">
            <div className="row">
                    <div className="col col-lg-6">1</div>
                    <div className="col col-lg-4">2</div>
                    <div className="col col-lg-2">3</div>           
            </div>
        </div>
    </div>
    </>
    )
}

/* Function Example3 with an other example with a bootstrap grid system with 3 columns */
function Example3() {
  return (
    <>
    <div>
      <h2>Example3</h2>
        <div className="container">
        <div className="row">
              <div className="col-6 col-xs-8">1</div>
              <div className="col-1 col-xs-3">2</div>
              <div className="col-5 col-xs-1">3</div>           
            </div>
            <div className="row">
              <div className="col-6 col-sm-8">1</div>
              <div className="col-1 col-sm-3">2</div>
              <div className="col-5 col-sm-1">3</div>           
            </div>
        </div>
    </div>
    </>
    )
}

export default function Grid() {
  return (
    <div>
      <h1>Grid</h1>
        <Example1 />
        <Example2 />
        <Example3 />
    </div>
    )
}  
    