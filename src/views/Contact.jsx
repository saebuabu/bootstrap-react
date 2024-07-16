import React, { Component } from 'react';
import NavigatieHeader from '../components/NavigatieHeader';
import './style.css';


class Contact extends Component {
  render() {
    return (
        <>
            <NavigatieHeader />
          <h2>Contact</h2>
          <article>
            <p>Heb je een vraag of opmerking? Neem dan contact met ons op via het onderstaande formulier.</p>
            <form>
              <div className="form-group">
              <label htmlFor="voornaam">Voornaam:</label>
              <input type="text" id="voornaam" name="voornaam" required />
              </div>
              <div className="form-group">
              <label htmlFor="achterNaam">Achternaam:</label>
              <input type="text" id="achterNaam" name="achterNaam" required />
              </div>
              <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
              <label htmlFor="bericht">Bericht:</label> 
              <textarea id="bericht"></textarea>
              </div>
              </form>
              <button type="submit">Verstuur</button>

          </article>
        </>
    );
  }
}

export default Contact;