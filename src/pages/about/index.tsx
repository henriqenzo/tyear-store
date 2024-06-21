import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import styles from './about.module.css'


export const About = () => {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <img src="//piet.com.br/cdn/shop/files/banner-site.jpg?v=1717592598&width=3000" alt="" />
                <div className={styles.infos}>
                    <div className={styles.text}>
                        <h5>Fundada em Brasília, a TYEAR nasceu da paixão por expressar atitude e autenticidade através da moda. Desde o início, nosso objetivo foi criar peças que não apenas vestissem, mas que contassem histórias e refletissem o espírito urbano e dinâmico das ruas.</h5>
                        <h5>
                            Inspirados pela cultura jovem e pelo movimento hip-hop, skate e arte de rua, nossas coleções são desenhadas para quem busca originalidade e conforto sem abrir mão do estilo. Cada peça é cuidadosamente criada com materiais de alta qualidade, priorizando o design único e a durabilidade.
                            Na TYEAR, acreditamos que a moda é uma forma poderosa de expressão pessoal. 
                        </h5>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
