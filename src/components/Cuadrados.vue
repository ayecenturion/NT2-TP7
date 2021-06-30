<template>

  <section class="src-components-cuadrados">
     <Cuadrado v-for="(cuadrado, index) in mostrarCuadrados" 
            :key="index"
            :color="color"/>
  </section>

</template>

<script lang="js">
  import Cuadrado from './Cuadrado.vue'
  export default  {
    name: 'src-components-cuadrados-cuadrado',
    props: [],
    components:{
      Cuadrado
    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-cuadrados {

  }
</style>
