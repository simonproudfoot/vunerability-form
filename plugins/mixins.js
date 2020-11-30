import Vue from "vue";
export default {
    name: "mixins"
};
Vue.mixin({
    methods: {
        toTop() {
            setTimeout(() => {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })
            }, 100);
        }
    },
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