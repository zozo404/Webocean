/* eslint-disable quotes */
export const state = () => ({
    kit: [], // Change the state property name to 'kit'
    imageSite: [],
    news: [] // Change the state property name to 'news'
})

export const getters = {
    getKit(state) { // Change the getter name to 'getKit'
        return state.kit
    },
    getImageSite(state) {
        return state.imageSite
    },
    getNews(state) { // Change the getter name to 'getNews'
        return state.news
    }
}

export const mutations = {
    SET_KIT(state, kit) { // Change the mutation name to 'SET_KIT'
        state.kit = kit
    },
    SET_IMAGESITE(state, imageSite) {
        state.imageSite = imageSite
    },
    SET_NEWS(state, news) { // Change the mutation name to 'SET_NEWS'
        state.news = news
    }
}

export const actions = {
    async nuxtServerInit({ dispatch }, { $axios }) {
        const kit = await $axios.$get('https://4qizwmnw.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "kit"]{id, title, description,"imageId":image{asset,alt}, slug, new, price, stripeUrl}')

        const imageSite = await $axios.$get('https://4qizwmnw.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "imageSite"]{name,"imageId":image{asset,alt},titre,text}')

        const news = await $axios.$get('https://4qizwmnw.api.sanity.io/v2022-03-07/data/query/production?query=*[_type=="news"]{title, date, description,"imageId":image{asset,alt}, new}')

        await dispatch('setKit', kit.result)
        await dispatch('setImageSite', imageSite.result)
        await dispatch('setNews', news.result)
    },
    setKit({ commit }, kit) {
        commit('SET_KIT', kit)
    },
    setImageSite({ commit }, imageSite) {
        commit('SET_IMAGESITE', imageSite)
    },
    setNews({ commit }, news) {
        commit('SET_NEWS', news)
    }
}
