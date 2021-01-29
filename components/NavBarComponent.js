import styles from '../styles/components/NavBarComponent.module.scss'
import Link from 'next/link'

export default function NavBarComponent() {
    return(
        <>
        <div className={styles.navbar}>    
            <div className={styles.navbarContainer}>
                <Link href="/">
                    <a><h1>🔥News.<span>pt</span></h1></a>
                </Link>
                <ul> 
                    <Link href="/sobre"><li>Sobre</li></Link>
                    <Link href="/contactos"><li>Contactos</li></Link>
                </ul>
            </div>
        </div>
        </>
    )
}