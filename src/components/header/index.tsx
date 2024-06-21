import { useEffect, useState } from 'react';
import useCartStore from '../../store/cartStore';
import { Cart } from '../cart';
import styles from './header.module.css'
import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';

export const Header = () => {
    const cartItems = useCartStore((state) => state.products)
    const hasItem = cartItems.length > 0 ? true : false;

    const [showCart, setShowCart] = useState<boolean | null>(null)
    const [bulletCartClass, setBulletCartClass] = useState<string>('')


    const addClass = () => {
        setBulletCartClass(styles.bulletCartClass)
    }

    const removeClass = () => {
        setBulletCartClass('')
    }

    useEffect(() => {
        addClass()
        setTimeout(() => {
            removeClass()
        }, 300);
    }, [cartItems])

    return (
        <>
        <header>
            <div className={styles.logo}>
                <Link to="/">TYEAR</Link>
            </div>
            <nav className={styles.navbar}>
                <ul>
                    {/* <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/lookbook">LOOKBOOK</Link></li>
                    <li><Link to="/about">SOBRE</Link></li> */}
                    <li><Link to="/shop">LOJA</Link></li>
                    <li><Link to="/lookbook">COLEÇÕES</Link></li>
                    <li><Link to="/about">SOBRE</Link></li>
                </ul>
            </nav>
            <div className={styles.icons}>
                <Link to="/login"><button className={styles.iconButton}><UserCircle size={32} /></button></Link>
                <a className={styles.cartButton} onClick={() => setShowCart(true)}>
                    <button className={styles.iconButton}><ShoppingCart size={32} /></button>
                    <span className={`${styles.bulletCart} ${bulletCartClass} ${hasItem && styles.hasItem}`}>{cartItems.length}</span>
                </a>
            </div>
        </header>
        
            <Cart onHandleClose={() => setShowCart(false)} showCartState={showCart}/>
        </>
    )
}