/* eslint-disable no-undef */
export async function getHeadlineNews() {
    const res = await fetch(
        `http://newsapi.org/v2/top-headlines?country=pt&apiKey=${process.env.APIKEY}`
    ).then((r) => r.json());
    return res;
}

export async function getNewsBySearch(query) {
    const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&language=pt&apiKey=${process.env.APIKEY}`
    ).then((r) => r.json());

    return res;
}
