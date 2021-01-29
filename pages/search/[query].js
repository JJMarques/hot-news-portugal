import { useState } from "react"
import { getNewsBySearch } from "../../util/util"
import FilterComponent from '../../components/FIltersComponent'
import NewsDisplayComponent from '../../components/NewsDisplayComponent'
import Head from "next/head"

export default function customSearchPage({ searchedQuery, initialNews, initialNumberOfResults }) {
    const [search, setSearch] = useState(searchedQuery)

    return(
        <>
        <Head>
            <title>🔥 News Portugal - {searchedQuery}</title>
            <meta name="description" content={`Hot news Portugal, ver notícias sobre ${searchedQuery}.`} />
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

export async function getServerSideProps(context) {
    const searchedQuery = context.query.query
    const searchedNews = await getNewsBySearch(searchedQuery)
    
    return {
        props: {
            searchedQuery,
            initialNews: searchedNews.articles,
            initialNumberOfResults: searchedNews.totalResults
        }
    }
}