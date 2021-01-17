import styles from '../styles/components/NavBarComponent.module.scss'
import Link from 'next/link'

export default function NavBarComponent() {
    return(
        <>
        <div className={styles.alert}>
            <a href="https://github.com/JJMarques/hot-news-portugal">
                Search functionality is only avaliable on development mode. 
                Click here to access the Github repository
            </a>
        </div>
        <div className={styles.navbar}>    
            <div className={styles.navbarContainer}>
                <Link href="/">
                    <a><h1>🔥News.<span>pt</span></h1></a>
                </Link>
                <ul> 
                    <Link href="/sobre"><a><li>Sobre</li></a></Link>
                    <Link href="/contactos"><a><li>Contactos</li></a></Link>
                </ul>
            </div>
        </div>
        </>
    )
}