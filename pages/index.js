import { useState } from 'react';
import { getHeadlineNews } from '../util/util';
import FilterComponent from '../components/FIltersComponent';
import NewsDisplayComponent from '../components/NewsDisplayComponent';
import Head from 'next/head';
import FooterComponent from '../components/FooterComponent';

export default function Index({ initialNumberOfResults, initialNews, error }) {
    const [search, setSearch] = useState('');

    if (error) {
        return (
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <h1 style={{ textAlign: 'center', color: '#E53E3E' }}>
                    Não foi possível carregar o Website, foi atingido um limite
                    de pedidos à base de dados. 😰
                </h1>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>🔥 News Portugal - Início</title>
                <meta
                    name="description"
                    content="Hot news Portugal recolhe e filtra as melhores notícias da imprensa nacional."
                />
            </Head>
            <FilterComponent search={search} setSearch={setSearch} />
            <NewsDisplayComponent
                newsList={initialNews}
                numberOfResults={initialNumberOfResults}
            />
            <FilterComponent />
            <FooterComponent />
        </>
    );
}

export async function getServerSideProps() {
    const countryNews = await getHeadlineNews();
    return {
        props: {
            error: countryNews.status === 'error' ? true : false,
            initialNumberOfResults:
                countryNews.status !== 'error' && countryNews.totalResults,
            initialNews: countryNews.status !== 'error' && countryNews.articles,
        },
    };
}
