import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { MainCard } from '../../components/mainCard';
import styles from './home.module.css'

export const Home = () => {
    const cardImages = [
        "https://cdn.awsli.com.br/1605/1605630/arquivos/bradockdan0001.jpg",
        "https://cdn.awsli.com.br/1605/1605630/arquivos/bradockdan0002.jpg",
        "https://cdn.awsli.com.br/1605/1605630/arquivos/bradockdan0003.jpg"    
    ]

    return (
        <>
        <Header />
        <div className={styles.images}>
            {cardImages.map((item) => <MainCard image={item} /> )}
        </div>
        <Footer />
        </>
    )
}