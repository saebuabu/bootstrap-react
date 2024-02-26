# Bootstrap

## Bootstrap en responsiviteit

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

Bootstrap gebruikt een 12-kolom grid systeem systeem waarmee je aangeeft van 1 tot 12 wat de breedte is van een kolom

``` html
<div class="col-1">
  1 of 12
</div>
<div class="col-3">
  2 of 12
</div>
<div class="col-8">
  3 of 12
</div>
```

In bovenste voorbeeld zijn de relatieve breedtes 1/12, 3/12 en 8/12.

``` html
<div class="col-lg-1">
  1 of 12
</div>
<div class="col-lg-3">
  2 of 12
</div>
<div class="col-lg-8">
  3 of 12
</div>
```

Geef je ook een specifieke breakpoint (zie hierboven) aan dan geldt dit alleen voor die breakpoint.

### Documentatie bootstrap 

Raadpleeg de documentatie [Getbootstrap](https://getbootstrap.com/docs/5.0/layout/breakpoints/) van bootstrap 5 zelf.

Of raadpleeg de documentatie [React-Bootstrap](https://react-bootstrap.github.io/)  over bijvoorbeeld Bootstrap-componenten die je in combinatie met React kunt gebruiken.

Of bekijk de video tutorial [Bootstrap - full course for beginners](https://www.youtube.com/watch?v=-qfEOE4vtxE)

### Opdracht (branch 2-kolommen)

Maak in je eigen repo een nieuwe branch met de naam 2-kolommen, of switch naar deze branch en kopieer de code uit de app.js.

De pagina heeft een sectie met een 2 kolom grid systeem.

In de linker kolom zal een responsieve afbeelding worden getoond en in de rechterkolom worden een aantal gegevens getoond die vanuit een array die in een json object vanuit een extern bestand zal worden geladen.

Beide kolommen zijn even breed.
Het volgende responsieve gedrag wordt verwacht:
Vanaf de breakpoint lg zullen beide kolommen naast elkaar worden getoond in gelijke breedte, maar onder dit breakpoint zullen de kolommen onder elkaar worden getoond.

De uitwerking kan je vinden in de branch 2-kolommen-uitwerking.

## [Terug](README.md)

## [Volgende](accordeon.md)

