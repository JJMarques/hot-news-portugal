import { useState } from "react"
import { getNewsBySearch } from "../../util/util"
import FilterComponent from '../../components/FIltersComponent'
import NewsDisplayComponent from '../../components/NewsDisplayComponent'

export default function customSearchPage({ initialNews, initialNumberOfResults }) {
    const [search, setSearch] = useState('')

    return(
        <>
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
    const searchedNews = await getNewsBySearch(context.query.query)
    
    return {
        props: {
            initialNews: searchedNews.articles,
            initialNumberOfResults: searchedNews.totalResults
        }
    }
}