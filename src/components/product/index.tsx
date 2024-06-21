import { useState } from 'react'
import ImageWithHover from '../imageWithHover'
import styles from './product.module.css'
import { ShoppingCart } from '@phosphor-icons/react'

type ProductProps = {
    img: string,
    imgHover: string,
    imgZoom: number,
    name: string,
    price: number,
    onHandleAdd: () => void
}

export const Product = ({img, imgHover, imgZoom, name, price, onHandleAdd} : ProductProps) => {

    const [ProductHover, setProductHover] = useState<boolean>(false)

    return (
        <div 
            className={styles.product}
            onMouseEnter={() => setProductHover(true)}
            onMouseLeave={() => setProductHover(false)}
         >
            <div className={styles.actions}>
                <button className={`${styles.addButton} ${ProductHover && styles.buttonVisible}`} onClick={onHandleAdd} ><ShoppingCart size={27}/></button>
            </div>
            <ImageWithHover srcNormal={img} srcHover={imgHover} imgZoom={imgZoom} alt={name}/>
            <div className={styles.productDescription}>
                <h4>{name}</h4>
                <span className={styles.price}>{price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL',})}</span>
            </div>
        </div>
    )
}