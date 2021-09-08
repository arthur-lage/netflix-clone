const API_KEY = `666ed9415ee0127603161009a93dc143`
const BASE_URL = `https://api.themoviedb.org/3`

const basicFetch = async (endpoint) => {
    const req = await fetch(`${BASE_URL}${endpoint}`)
    const json = req.json()
    return json
}

// eslint-disable-next-line
export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais da Netflix",
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomendados para você",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: "Em Alta",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: "Ação",
                items: await basicFetch(`/discover/movie?with_genre=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: "Comédia",
                items: await basicFetch(`/discover/movie?with_genre=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: "Terror",
                items: await basicFetch(`/discover/movie?with_genre=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genre=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: "Documentários",
                items: await basicFetch(`/discover/movie?with_genre=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },
    getMovieInfo: async (id, type) => {
        let info = {};

        if(id){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                default:
                    info = null
                    break
            }
        }
        
        return info
    }
}