<template>

  <section class="src-components-cuadrados-cuadrado">
    <div class="square" :style="{backgroundColor:color}"></div>
  </section>

</template>

<script lang="js">
  
  export default  {
    name: 'src-components-cuadrados-cuadrado',
    props: ['color'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      clickCuadrado(){
        
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-cuadrados-cuadrado {
    margin: 20px auto;
    max-width: 600px;
    background: #232323;
  }
  .square {
    width: 30%;
    background: blue;
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 10%;
    transition: background 0.8s;
    -webkit-transition: background 0.8s;
    -moz-transition: background 0.8s;
  }

</style>
