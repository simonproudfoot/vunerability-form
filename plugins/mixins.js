import Vue from "vue";
export default {
    name: "mixins"
};
Vue.mixin({
    computed: {
        formData: {
            get() {
                return this.$store.state.formData
            },
            set(value) {
                this.$store.commit('setFormData', value)
            }
        },
    }
})