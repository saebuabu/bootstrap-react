# QR code generator 

qr code generator met een react extensie

## Voorbeeld

``` sh
npm i react-qr-code
```

``` jsx
import React from 'react';
import NavigatieHeader from '../NavigatieHeader';
import QRCode from 'react-qr-code';

export default function QrCodeGenerator() {

    const [qrCode, setQrCode] = React.useState('');
    const [input, setInput] = React.useState('');

    function handleGenerateQrCode() {

        console.log(input);
        setQrCode(input);

        setInput(''); 
    }   
    
    return (
        <>
             <NavigatieHeader />
            <h1>Qr code generator</h1>
            <input name="qr-Code" onChange={ (e) => { setInput(e.target.value)} } type="text"  value={input} placeholder="Vul hier je tekst of URL in" />
            <button disabled={input && input.trim() !== '' ? false : true } onClick={handleGenerateQrCode} >Genereer qr code</button>
            <hr />
            <QRCode id="qr-code-value" value={qrCode} size={400} />
            
        </>
    )
}
```

## [Terug](README.md)


