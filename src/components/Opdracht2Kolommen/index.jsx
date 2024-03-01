import './style.css'

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
                    <p>Eerste kolom met dynamische content</p>
                </div>
                <div className="col-6">
                    <p>Tweede kolom met dynamische content</p>
                </div>
            </div>
        </div>
        </>
    );
};