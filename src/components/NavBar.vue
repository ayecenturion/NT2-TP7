<template>

  <section class="src-components-nav-bar">
    <button id="reset" @click="$emit('onRestart')">{{ rbText }}</button>
		<span id="message">{{ txtContent }}</span>
		<button id="easy" @click="setEasy()" :class="isHard?'':'selected'">easy</button>
		<button id="hard" @click="setHard()" :class="isHard?'selected':''">hard</button>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-nav-bar',
    props: ['rbText','txtContent','isHard'],
      
    mounted () {

    },
    data () {
      return {
        
      }
    },
    methods: {
      setHard() {
        this.$emit('onDifChanged',true)
      },
      setEasy() {
        this.$emit('onDifChanged',false)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-nav-bar {
    background:#232323;
    height: 30px;
    text-align: center;
    margin: 0;
    margin-top: -30px;
  }

  #message {
    color: #ffffff;
    display: inline-block;
    width: 20%;
  }
  .selected {
    background-color: steelblue;
    color: white;
  }
  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  button:hover {
	color:white;
	background-color:steelblue;
  }
</style>
