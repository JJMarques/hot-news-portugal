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
                <div style={{ 
                    width: '140px', 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Link href="/sobre"><a>Sobre</a></Link>
                    <Link href="/contactos"><a>Contactos</a></Link>
                </div>
            </div>
        </div>
        </>
    )
}