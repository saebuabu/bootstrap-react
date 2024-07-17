import './style.css'
import events from './events.js';

export default function Opdracht2Kolommen() {
    return (
        <>
        <article>
        <div className="container-fluid" id="opdracht2K">
            <div className="row">
                <div className="col col-12 col-md-6" style={{ 
                            backgroundImage: `url("/img/tangofrankrijk.jpg")`,
                            backgroundSize: "cover",
                            backgroundPosition: "bottom"
                            
                        
                        }}
                >
                </div>
                <div className="col col-12 col-md-6">
                    <h2>Agenda</h2>
                    <ul className="event-list">
                    { events.map(event => (
                        <li key={event.id}><span>{event.date}</span><h3>{event.title}</h3>
                        </li>
                    ))} 
                    </ul>
                </div>
            </div>
        </div>
        </article>
        </>
    );
};