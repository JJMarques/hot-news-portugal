import styles from '../styles/pages/index.module.scss'

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
            </div>
            <div className={styles.keyWords}>
                <button value="covid" onClick={e => setSearch(e.target.value)}>Covid</button>
                <button value="coimbra" onClick={e => setSearch(e.target.value)}>Coimbra</button>
                
            </div>
        </div>
    )
}