import { useState } from "react";
import styles from './imageHover.module.css'

type ImageProps = {
    srcNormal: string,
    srcHover: string,
    alt: string,
    imgZoom: number
}

const ImageWithHover = ({ srcNormal, srcHover, alt, imgZoom }: ImageProps) => {

    const [hover, setHover] = useState(false);

    return (
        <div 
            className={styles.imageContainer}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img
                className={`${styles.image} ${hover ? styles.hide : ''}`}
                src={srcNormal}
                alt={alt}
                width={`${imgZoom}%`}
            />
            <img
                className={`${styles.image} ${hover ? '' : styles.hide}`}
                src={srcHover}
                alt={alt}
                width={`${imgZoom}%`}
            />
        </div>
    );
  }
  
  export default ImageWithHover;