import { Link } from 'react-router-dom';
import styles from './footer.module.css'
import { TwitterLogo, InstagramLogo, PinterestLogo, YoutubeLogo } from "@phosphor-icons/react";


export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.mediaIcons}>
                <button className={styles.iconButton}><InstagramLogo size={24} weight="fill" /></button>
                <button className={styles.iconButton}><PinterestLogo size={24} weight="fill" /></button>
                <button className={styles.iconButton}><TwitterLogo size={24} weight="fill" /></button>
                <button className={styles.iconButton}><YoutubeLogo size={24} weight="fill" /></button>
            </div>
            <div className={styles.contact}>
                <Link to="/contact">CONTATO</Link>
            </div>
        </div>
    )
}