import useCartStore from '../../store/cartStore'
import useProductStore from '../../store/productStore';
import { CartItem } from '../cartItem'
import styles from './cart.module.css'
import { X } from '@phosphor-icons/react'
import 'animate.css';

type CartProps = {
    onHandleClose: () => void,
    showCartState: boolean | null
}

export const Cart = ({onHandleClose, showCartState}: CartProps) => {   

    const cartItems = useCartStore((state) => state.products)
    const removeFromCart = useCartStore((state) => state.removeFromCart)
    const addToList = useProductStore((state) => state.addToList)

    const verifyClass = () => {
        let cartClass = ''

        if (showCartState == null) {
            cartClass = styles.noVisible
        } else if (showCartState == true) {
            cartClass = 'animate__animated animate__slideInRight'
        } else if (showCartState == false) {
            cartClass = 'animate__animated animate__slideOutRight'
        }
        return cartClass
    }

    const removeItemCart = (product: any) => {
        addToList(product)
        removeFromCart(product.id)
    }

    return (
        <div className={`${styles.cart} ${verifyClass()}`}>
            <div className={styles.cartHeader}>
                <div className={styles.text}>
                    <h2>Carrinho</h2>
                    <span>({cartItems.length} {cartItems.length == 1 ? 'item' : 'itens'})</span>
                </div>
                <button className={styles.iconButton} onClick={onHandleClose}><X size={24} /></button>
            </div>
            <div className={styles.cartContent}>
                {cartItems.length > 0 ?
                    cartItems.map((item) =>
                        <CartItem 
                            key={item.id}
                            img={item.img} 
                            imgZoom={item.imgZoom} 
                            name={item.name} 
                            price={item.price} 
                            onHandleRemove={() => removeItemCart(item)}
                        />
                    ) : <h5>Seu carrinho está vazio</h5> 
                }
            </div>
        </div>
    )
}