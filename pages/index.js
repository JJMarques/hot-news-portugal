import styles from '../styles/pages/index.module.scss'
import { useEffect, useState } from "react"
import { getHeadlineNews, getNewsBySearch } from "../util/util"
import FilterComponent from '../components/FIltersComponent'
import NewsDisplayComponent from '../components/NewsDisplayComponent'

export default function Index({ initialNumberOfResults, initialNews }) {
    const [newsList, setNewsList] = useState(initialNews)
    const [numberOfResults, setNumberOfResults] = useState(initialNumberOfResults)
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchSearchResults = async (searchResult) => {
            if (searchResult !== '') {
                const newResults = await getNewsBySearch(searchResult)
                console.log(newResults)
                setNewsList(newResults.articles)
                setNumberOfResults(newResults.totalResults)
            } else {
                setNewsList(initialNews)
                setNumberOfResults(initialNumberOfResults)
            }
        }
        fetchSearchResults(search)
    }, [search])

    return(
    <>
        <FilterComponent search={search} setSearch={setSearch} />
        <NewsDisplayComponent 
            newsList={newsList} 
            numberOfResults={numberOfResults}
        />
        <FilterComponent />
    </>       
    )
}

export async function getStaticProps() {
    const countryNews = await getHeadlineNews()
    return {
        props: {
            initialNumberOfResults: countryNews.totalResults,
            initialNews: countryNews.articles
        }
    }
}