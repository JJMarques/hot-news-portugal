import styles from '../styles/pages/index.module.scss'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'

export default function FilterComponent({ search, setSearch }) {
    return(
        <div className={styles.filters}>
            <div className={styles.search}>
                <label>Procurar </label>
                <input 
                    type="search" 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <Link href={`/search/${search}`}><a><FaSearch /></a></Link>
            </div>
            <div className={styles.keyWords}>
                <Link href={`/search/${search}`}>
                    <a value="covid" onClick={e => setSearch(e.target.value)}>Covid</a>
                </Link>
                <Link href={`/search/${search}`}>
                    <a value="coimbra" onClick={e => setSearch(e.target.value)}>Coimbra</a>
                </Link>
            </div>
        </div>
    )
}