import styles from '../styles/components/FooterComponent.module.scss';

export default function FooterComponent() {
    return (
        <div className={styles.footer}>
            <span>
                Realizado por{' '}
                <a
                    href="https://jose-marques.dev"
                    rel="noreferrer"
                    target="_blank"
                >
                    José Marques
                </a>
                , utilizando a excelente{' '}
                <a href="https://newsapi.org/" rel="noreferrer" target="_blank">
                    News Api
                </a>
            </span>
        </div>
    );
}
