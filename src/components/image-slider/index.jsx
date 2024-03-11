import { useEffect, useState } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

export default function ImageSlider({ url, limit=10, page=1}) {

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

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
  }, [url]);

  if (loading) {
    return <div>Bezig met laden! Ogenblikje a.u.b.</div>
  }

  if (errorMsg) {
    return <div>Downloaden afbeelding mislukt. { errorMsg }</div>
  }

  return <div className="container">
    <BsArrowLeftCircleFill className="arrow arrow-left"></BsArrowLeftCircleFill>
    {
        images && images.length 
        ? images.map((imageItem) => (
        <img
            key={imageItem.id}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            />))
            : null
    }
    <BsArrowRightCircleFill className="arrow arrow-right"></BsArrowRightCircleFill>
  </div>;
}
