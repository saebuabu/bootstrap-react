import Birdgif from "../../assets/img/bird.gif";

export default function Bird() {
    return (
        /* img is placed in the folder src/assets/img */
        <div className="bird" >
            <img src={Birdgif} alt="bird" />
        </div>
    )
}