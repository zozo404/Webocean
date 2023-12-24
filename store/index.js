/* eslint-disable quotes */
export const state = () => ({
    product: [],
    imageSite: [],
    team: []
})

export const getters = {
    getProduct(state) {
        return state.product
    },
    getImageSite(state) {
        return state.imageSite
    },
    getTeam(state) {
        return state.team
    }
}

export const mutations = {
    SET_PRODUCT(state, product) {
        state.product = product
    },
    SET_IMAGESITE(state, imageSite) {
        state.imageSite = imageSite
    },
    SET_TEAM(state, team) {
        state.team = team
    }
}

export const actions = {
    async nuxtServerInit({ dispatch }, { $axios }) {
        const product = await $axios.$get('https://4qizwmnw.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "product"]{title, description,"imageId":image{asset,alt}, slug, new, price, stripeUrl}')

        const imageSite = await $axios.$get('https://4qizwmnw.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "imageSite"]{name,"imageId":image{asset,alt},titre,text}')

        const team = await $axios.$get('https://4qizwmnw.api.sanity.io/v2022-03-07/data/query/production?query=*[_type=="team"]{id, name, description,"imageId":image{asset,alt}, role}')

        await dispatch('setProduct', product.result)
        await dispatch('setImageSite', imageSite.result)
        await dispatch('setTeam', team.result)
    },
    setProduct({ commit }, product) {
        commit('SET_PRODUCT', product)
    },
    setImageSite({ commit }, imageSite) {
        commit('SET_IMAGESITE', imageSite)
    },
    setTeam({ commit }, team) {
        commit('SET_TEAM', team)
    }
}