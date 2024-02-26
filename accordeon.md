# Accordeon 

Een accordeon is een bekende functionaliteit dat voor bijvoorbeeld FAQs wordt gebruikt. 

## Voorbeeld

``` jsx
import { useState } from 'react';

import './style.css';
import data from './data';

function handleSingleSelection(currentId,setSelected) {
    setSelected(currentId);
}


export default function Accordion() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="accordion">
           {data && data.length > 0 ? 
           data.map((dataItem) =>  (
            <>
                    <div className="item"></div>
                    <div onClick={() => handleSingleSelection(dataItem.id,setSelected)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id &&
                        <div className="content">
                            <p>{dataItem.answer}</p>
                        </div>
                    }
            </>
            ))
           : <div>Geen data</div>}
        </div>
    );
}
```

## [Terug](README.md)


