# Bootstrap

## Bootstrap en resposiviteit

Bootstrap is een populair framework voor het ontwikkelen van responsieve websites. Het bevat kant-en-klare HTML-, CSS- en JavaScript-componenten die je kunt gebruiken om je website er op elk apparaat goed uit te laten zien.

Bootstrap werkt met een "mobile-first" benadering. Dit betekent dat de ontwikkelaar eerst de website ontwerpt voor mobiele apparaten en daarna aanpast voor grotere schermen.

Bootstrap maakt gebruik van de term "breakpoints". Dit zijn punten waarop de lay-out van de website verandert, afhankelijk van de breedte van het scherm.

Bootstrap heeft vier standaard breakpoints:
* **Extra small (xs):** Schermen smaller dan 576px (bijv. smartphones)
* **Small (sm):** Schermen tussen 576px en 768px (bijv. tablets)
* **Medium (md):** Schermen tussen 768px en 992px (bijv. kleine laptops)
* **Large (lg):** Schermen tussen 992px en 1200px (bijv. grote laptops)
* **Extra large (xl):** Schermen breder dan 1200px (bijv. desktops)

Je kunt deze breakpoints gebruiken om de lay-out van je website aan te passen voor verschillende apparaten. 

Bootstrap biedt verschillende hulpmiddelen om je te helpen responsieve websites te maken:

* **Media queries:** Hiermee kun je CSS-stijlen definiëren die alleen worden toegepast bij bepaalde breakpoints.
* **Responsive grids:** Hiermee kun je je website opdelen in een raster van kolommen, die automatisch worden aangepast aan de breedte van het scherm.
* **Responsive afbeeldingen:** Hiermee kun je afbeeldingen automatisch laten schalen op verschillende apparaten.

### Bootstrap Grid systeem

Gebruik Bootstrap om een eenvoudig voorbeeld van een pagina met een grid te maken. Hier een basisstructuur:

```jsx
// src/App.js

import React from 'react';


function App() {
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

export default App;
```

### Documentatie bootstrap 

Raadpleeg de documentatie [Getbootstrap](https://getbootstrap.com/docs/5.0/layout/breakpoints/) van bootstrap 5 zelf.

Of raadpleeg de documentatie [React-Bootstrap](https://react-bootstrap.github.io/)  over bijvoorbeeld Bootstrap-componenten die je in combinatie met React kunt gebruiken.

Of bekijk de video tutorial [Bootstrap - full course for beginners](https://www.youtube.com/watch?v=-qfEOE4vtxE)
