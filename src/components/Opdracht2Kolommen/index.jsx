import './style.css'
import events from './events.js';

export default function Opdracht2Kolommen() {
    return (
        <>
        <div className="container-fluid" id="opdracht2K">
            <div className="row">
                <div className="col-6" style={{ 
                            backgroundImage: `url("/img/tangofrankrijk.jpg")`,
                            backgroundSize: "cover",
                            backgroundPosition: "top"
                            
                        
                        }}
                >
                </div>
                <div className="col-6">
                    <h2>Agenda</h2>
                    <ul>
                    { events.map(event => (
                        <li key={event.id}>
                            <span>{event.date}</span>
                            <h3>{event.title}</h3>
                        </li>
                    ))} 
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};