// export const myMutation = (state) => {

// }

export const setEntries = (state, entries) => {
    state.entries = [...entries]
}

export const updateEntry = (state, updatedEntry) => {
    const index = state.entries
        .findIndex(entry => entry.id === updatedEntry.id)
    state.entries[index] = updatedEntry
}

export const addEntry = (state, entry) => {
    state.entries.unshift(entry)
}

export const deleteEntry = (state, id) => {
    const index = state.entries.findIndex(entry => entry.id === id)
    state.entries.splice(index, 1)
}

export const setIsLoading = (state, value) => {
    state.isLoading = value;
}