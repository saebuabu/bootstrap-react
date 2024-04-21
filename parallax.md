# Parallax

Parallax scrollen is een suggestief parallax effect waarbij de achtergrondinhoud (d.w.z. een afbeelding) tijdens het scrollen met een andere snelheid wordt verplaatst dan de voorgrondinhoud. Het kan volledig in css worden bewerkstelligd.

## Uitleg

In de pagina About wordt een css effect gerealiseerd.
Dit gebeurt door:
De parallax-effect in de gegeven CSS-code wordt bereikt door het gebruik van de CSS transform eigenschap in combinatie met de position: sticky; eigenschap.

De .section klasse heeft een transform: scaleY(calc(1 - var(--scale))); eigenschap. Dit betekent dat de hoogte van de sectie wordt geschaald op basis van de waarde van de --scale variabele. Wanneer de waarde van --scale verandert, verandert de schaal van de sectie, wat een parallax-effect creëert.

De .section > * selector past de transform: scaleY(calc(1 / (1 - var(--scale)))); eigenschap toe op alle directe kinderen van de .section elementen. Dit zorgt ervoor dat de kinderen van de sectie worden geschaald in het omgekeerde van de schaal van de sectie zelf, waardoor ze hun normale grootte behouden terwijl de sectie wordt geschaald.

De .image-container klasse heeft de position: sticky; eigenschap, wat betekent dat het element op de pagina blijft "plakken" terwijl je scrollt, totdat het buiten het viewport valt. Dit, in combinatie met de z-index: -2; eigenschap, zorgt ervoor dat de afbeelding achter de inhoud van de sectie blijft terwijl je scrollt, wat bijdraagt aan het parallax-effect.

De .image-container img selector zorgt ervoor dat de afbeelding altijd de volledige breedte en hoogte van de .image-container inneemt, ongeacht de schaal van de sectie. Dit zorgt ervoor dat de afbeelding altijd zichtbaar is en bijdraagt aan het parallax-effect.

De .image-container::after pseudo-element creëert een verloop over de onderste helft van de afbeelding, wat bijdraagt aan het gevoel van diepte en beweging in het parallax-effect.

Samengevat, het parallax-effect wordt bereikt door het schalen van de secties en hun inhoud, en door het gebruik van een "sticky" afbeelding die achter de inhoud blijft terwijl je scrollt.

## [Terug](README.md)


