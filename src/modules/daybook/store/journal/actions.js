// export const myAction = async ({ commit }) => {

import journalApi from "@/api/journalApi"

// }

export const loadEntries = async ({ commit }) => {
    commit('setIsLoading', true)
    const { data } = await journalApi.get('/entries.json')
    if (data) {
        const entries = [];
        for (let id of Object.keys(data)) {
            entries.push({
                id,
                ...data[id]
            })
        }
        commit('setEntries', entries)
    } else {
        commit('setEntries', [])
    }
    
    commit('setIsLoading', false)
}

export const updateEntry = async ({ commit }, updatedEntry) => { // Entry param
    const { date, text, picture, id } = updatedEntry
    
    const toUpdateObj = { date, text, picture }
    console.log(toUpdateObj)

    const { data } = await journalApi
        .put(`/entries/${id}.json`, toUpdateObj)
    
    const respEntry = { id, ...data }
    commit('updateEntry', respEntry)
}

export const createEntry = async ({ commit }, newEntry) => {
    const { text, picture, date } = newEntry

    const dataToSave = { text, picture, date }

    // Subir entrada
    const { data } = await journalApi
        .post(`/entries.json`, dataToSave)

    // Actualizar state
    const obj = { id: data.name, ...dataToSave }
    commit('addEntry', obj)
    return obj
}

export const deleteEntry = async ({ commit }, id) => {
    // Eliminar entrada
    await journalApi.delete(`/entries/${id}.json`)

    // Actualizar state
    commit('deleteEntry', id)
}