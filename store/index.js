export const state = () => ({
    currentSection: 1,
    formData: {
        clientID: '',
        updateType: '',
        getConsent: null,
        bereavment: null,
        bereavmentDetails: '',
        mentalHealth: '',
        mentalHealthDetails: '',
        physical: '',
        physicalDetails: '',
        other:'',
        otherDetails: '',
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
