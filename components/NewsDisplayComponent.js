import styles from '../styles/components/NewsDisplayComponent.module.scss';

export default function NewsDisplayComponent({ newsList, numberOfResults }) {
    return (
        <div className={styles.news}>
            <div className={styles.categoryDisplay}>
                <h2>
                    <span>Todas as notícias</span>
                </h2>
                <span>{numberOfResults} resultados</span>
            </div>
            <div className={styles.newsDisplay}>
                {newsList.map((n, k) => (
                    <a key={k} href={n.url} rel="noreferrer" target="_blank">
                        <div className={styles.newsCard}>
                            <img src={n.urlToImage} alt={n.title} />
                            <div>
                                <h1>{n.title}</h1>
                                <p>{n.description}</p>
                                <small>
                                    Ver notícia completa em {n.source.name}
                                </small>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
