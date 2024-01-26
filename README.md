**Reader: Aanmaken React-project en Gebruik Bootstrap**

---

### Stap 1: Nieuw React-project aanmaken
```bash
# Gebruik npx om een nieuw React-project aan te maken
npx create-react-app@latest ansonreact

# Navigeer naar het aangemaakte project
cd ansonreact
```

### Stap 2: Test de React-app
```bash
# Start de ontwikkelingsserver
npm start
```
Open je browser en ga naar [http://localhost:3000](http://localhost:3000). Bekijk de standaardpagina van je nieuwe React-app.

### Stap 3: Leegmaken om een witte pagina te krijgen
Verwijder de standaard inhoud in de volgende bestanden:
- `src/App.css`
- `src/App.js`
- `src/index.css`
- `public/index.html`

Zorg ervoor dat je nu een lege witte pagina krijgt.

### Bootstrap Integreren

#### Stap 4: Installeren van Bootstrap 5
```bash
# Installeer react-bootstrap en Bootstrap 5
npm install react-bootstrap bootstrap
```

#### Stap 5: Importeer Bootstrap CSS in index.js
Voeg de volgende regel toe aan `src/index.js` om de Bootstrap CSS te importeren:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

#### Stap 6: Maak een Eenvoudige Pagina met Bootstrap Grid
Gebruik Bootstrap om een eenvoudig voorbeeld van een pagina met een grid te maken. Hier een basisstructuur:
```jsx
// src/App.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welkom bij mijn React-Bootstrap Voorbeeld</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>Links</Col>
        <Col xs={6}>Rechts</Col>
      </Row>
    </Container>
  );
}

export default App;
```

Dit is een eenvoudige introductie tot het opzetten van een React-project en het integreren van Bootstrap 5 voor een basaal grid-systeem. Vergeet niet om de documentatie van [React-Bootstrap](https://react-bootstrap.github.io/) te raadplegen voor meer mogelijkheden en details over Bootstrap-componenten binnen React.