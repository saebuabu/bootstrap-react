import Pipepng from "../../assets/img/pipe.png"; 


export default function Pipe(pipePosition) {
    /* image of pipe is placed in the folder src/assets/img */
    return (
        <div className="pipe"

        style={{
            left: pipePosition.x,
            top: pipePosition.y,
        }}
        draggable={true}
        >
            <img src={Pipepng} alt="pipe" />
        </div>
    )
}