import Vue from 'vue'

var miMixin = {
    computed : {
        mostrarCuadrados() {
            return this.$store.state.cuadrados
        }
    }
}

Vue.mixin(miMixin)