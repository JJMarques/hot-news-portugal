export async function getHeadlineNews() {
    const res = await fetch(`http://newsapi.org/v2/top-headlines?country=pt&apiKey=18f254cb89d54f4fb1fce11ee63c119a`)
        .then(r => r.json())

    return res
}

export async function getNewsBySearch(query) {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=pt&apiKey=18f254cb89d54f4fb1fce11ee63c119a`)
        .then(r => r.json())

    return res
}