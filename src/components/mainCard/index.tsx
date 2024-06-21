import styles from './mainCard.module.css'

type MainCardProps = {
    image: any;
}

export const MainCard = ({ image }: MainCardProps) => {
    return (
        <div className={styles.imgContainer} style={{backgroundImage: `URL(${image})`}} data-alt="Imagem do novo drop na tela de ínicio"></div>
    )
}