export const state = () => ({
    currentSection: 1,
    formData: {
        clientID: '',
        updateType: '',
    }
})
export const mutations = {
    currentSectionPlus(state) {
        state.currentSection++
    },
    setFormData(state, val) {
        state.formData[val.field] = val.value
    },
}
