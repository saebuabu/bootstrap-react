import { useRef, useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, limit = 10, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const speed = 3000;
  let autoplayRef = useRef();

  //Met een useEffect hook wordt de timeOut gezet
  useEffect(() => {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = setTimeout(() => {
        handleNext();
      }, speed);
    });
  
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    console.log(currentSlide);
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    console.log(currentSlide);
  }

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

  useEffect(() => {
    if (url !== "") fetchImages(url);
  },[url]);

  if (loading) {
    return <div>Bezig met laden! Ogenblikje a.u.b.</div>;
  }

  if (errorMsg) {
    return <div>Downloaden afbeelding mislukt. {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      ></BsArrowLeftCircleFill>
      {images && images.length
        ? images.map((imageItem,index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={currentSlide === index 
                ? "current-image"
                : "current-image hide-image"}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      ></BsArrowRightCircleFill>
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  onClick={ () => setCurrentSlide(index) }
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
}
