<template >

  <section class="src-components-header" :style="{'backgroundColor':bgcolor}">
    <h1>The Great <br>
			<span class="colorDisplay">{{ rgbString }}</span>
			<br>
			Guessing Game</h1>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-header',
    props: ['rgbString', 'bgcolor'],
    mounted () {

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
  .src-components-header {
    transition: all 0.3s;
    background: steelblue;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    background-color: #232323;
	
  }
  #colorDisplay {
    font-size: 200%;
  }
  
  h1 {
    font-weight: normal;
    line-height: 1.1;
    padding: 20px 0;

  }
</style>
