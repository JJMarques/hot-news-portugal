import styles from '../styles/pages/index.module.scss'
import { useState } from "react"
import { getHeadlineNews } from "../util/util"
import FilterComponent from '../components/FIltersComponent'
import NewsDisplayComponent from '../components/NewsDisplayComponent'
import Head from 'next/head'

export default function Index({ initialNumberOfResults, initialNews }) {
    const [search, setSearch] = useState('')

    return(
    <>
        <Head>
            <title>🔥 News Portugal - Início</title>
            <meta name="description" content="Hot news Portugal recolhe e filtra as melhores notícias da imprensa nacional." />
        </Head>
        <FilterComponent search={search} setSearch={setSearch} />
        <NewsDisplayComponent 
            newsList={initialNews} 
            numberOfResults={initialNumberOfResults}
        />
        <FilterComponent />
    </>       
    )
}

export async function getServerSideProps() {
    const countryNews = await getHeadlineNews()
    return {
        props: {
            initialNumberOfResults: countryNews.totalResults,
            initialNews: countryNews.articles
        }
    }
}