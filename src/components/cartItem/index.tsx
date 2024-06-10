import styles from './cartItem.module.css'
import { Trash } from '@phosphor-icons/react'

type CartItemProps = {
    img: string,
    imgZoom: number,
    name: string,
    price: number,
    onHandleRemove: () => void
}

export const CartItem = ({img, imgZoom, name, price, onHandleRemove}: CartItemProps) => {
    return (
        <div className={styles.product}>
            <div className={styles.productImg}>
                <img src={img} width={`${imgZoom - 10}%`} />
            </div>
            <div className={styles.productDescription}>
                <h4>{name}</h4>
                <span className={styles.price}>{price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL',})}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.removeButton} onClick={onHandleRemove} ><Trash size={27}/></button>
            </div>
        </div>
    )
}