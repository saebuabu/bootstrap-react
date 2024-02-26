# Nieuw React project

## Stappen React Project

### Stap 1: Nieuw React-project aanmaken

```bash
# Gebruik npm om een nieuw React-project aan te maken
npm create-react-app@latest mijnreact

# Navigeer naar het aangemaakte project
cd mijnreact
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

## Bootstrap Integreren

### Stap 4: Installeren van Bootstrap 5

```bash
# Installeer react-bootstrap en Bootstrap 5
npm install react-bootstrap bootstrap
```

### Stap 5: Importeer Bootstrap CSS in index.js

Voeg de volgende regel toe aan `src/index.js` om de Bootstrap CSS te importeren:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

## [Terug](README.md)

## [Volgende](gridsysteem.md)
