import Birdgif from "../../assets/img/bird.gif";

export default function Bird({ birdPosition }) {
    return (
        /* img is placed in the folder src/assets/img */
        <div className="bird"
            style={{ left: birdPosition.x, top: birdPosition.y }}
            draggable={true}
        >
            <img src={Birdgif} alt="bird"
            />
        </div>
    )
}