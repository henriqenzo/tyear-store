import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Product } from '../../components/product';
import useProductStore from '../../store/productStore';
import useCartStore from '../../store/cartStore';
import styles from './shop.module.css'

export const Shop = () => {
    const addToCart = useCartStore((state) => state.addToCart)

    const productsList = useProductStore((state) => state.products)

    const removeFromList = useProductStore((state) => state.removeFromList)
    
    const onAddToCart = (product: any) => {
        removeFromList(product.id)
        addToCart(product)
    }

    return (
        <>
            <Header />
            <div className={styles.showcase}>
                <div className={styles.filter}>
                    <ul>
                        <li><a href="">ALL</a></li>
                        <li><a href="">T-SHIRTS</a></li>
                        <li><a href="">HOODIES</a></li>
                        <li><a href="">JACKETS</a></li>
                        <li><a href="">PANTS</a></li>
                        <li><a href="">SHORTS</a></li>
                        <li><a href="">ACCESSORIES</a></li>
                    </ul>
                </div>
                <div className={`${styles.products} ${productsList.length == 0 && styles.noProducts}`}>
                    {productsList.length > 0 ? 
                        productsList.map((product) =>
                            <Product 
                                key={product.id} 
                                img={product.img} 
                                imgHover={product.imgHover}
                                imgZoom={product.imgZoom} 
                                name={product.name} 
                                price={product.price} 
                                onHandleAdd={() => onAddToCart(product)}
                            />
                        ) : <h5>Sem produtos no catálogo</h5> 
                    }
                </div>
            </div>
            <Footer /> 
        </>
    )
}