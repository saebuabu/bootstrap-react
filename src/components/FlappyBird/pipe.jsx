import Pipepng from "../../assets/img/pipe.png"; 


export default function Pipe() {
    /* image of pipe is placed in the folder src/assets/img */
    return (
        <div className="pipe">
            <img src={Pipepng} alt="pipe" />
        </div>
    )
}