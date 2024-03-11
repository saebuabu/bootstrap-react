# Image slider 

Een image slider waarbij afbeelding vanuit een externe site worden opgehaald (REST API) en in de component worden getoond. Via buttons uit react-icons kan een volgende/vorige set foto's worden opgehaald.

## Code logica

- useState en useEffect
- react-icons

### Ophalen van de afbeeldingen

fetch is de httprequest functie in React, async is de keyword voor een functie om aan te geven dat deze functie asynchroon verloopt en de App dus niet blokkeert, omdat het zou moeten wachten op een response van de httprequest.

zowel de fetch als de response.json() starten met een await keyword en zijn aldus de op-te-wachten acties.

``` jsx
 async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  ```
