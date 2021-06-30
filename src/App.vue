<template>
  <div id="app">
      <br>
      <Header :rgbString="colorDisplayText" :bgcolor="headerBackgroundColor"/>
      <NavBar :rbText="restartButtonText" @onRestart="restart" :txtContent="messageDisplayText" :isHard="getIsHard()" @differenceChanged="differenceChanged($event)"/>
      <Cuadrados :colors="colors" @checkSelection="checkSelection($event)"/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'
import Cuadrados from './components/Cuadrados.vue'

export default {

  name: 'App',
  components: {
    Header,
    NavBar,
    Cuadrados
   
  },
  props:[],
  data () {
    return {
      colorCount: 6,
      isHard:true,
      colors:[],
      pickedColor:0,
      colorDisplayText:"",
      headerBackgroundColor:"",
      restartButtonText:"",
      messageDisplayText:""
    }
  },
  mounted() {
    this.restart();
  },
  methods: {
    getIsHard() {
      return this.isHard
    },
    differenceChanged(isHard) {
      this.isHard = isHard
      this.colorCount = isHard?6:3
      this.restart()
    },
    PickColor(){
      var quantity;
      if (this.isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity );
    },
    createNewColors(numbers){
      var arr = [];
      for (var i = 0; i < numbers; i++) {
        arr.push(this.createRandomStringColor());
      }
        return arr;
    },
    createRandomStringColor(){
      var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
      return newColor;
    },
    randomInt(){
      return Math.floor(Math.random() * 256);
    },
    restart(){
      this.colors = this.createNewColors(this.colorCount);
      this.pickedColor = this.colors[this.PickColor()];
      this.colorDisplayText = this.pickedColor;
      this.textContent = "Pick New Colors!";
      this.headerBackgroundColor = "steelblue";
      this.messageDisplayText = "";
      this.restartButtonText = "New Colors!";
    },
    setAllColorsTo(color) {
      let newColors = []
      for (let i = 0;i < this.colorCount; i++) {
        newColors.push(color)
      }
      this.colors = newColors
    },
    checkSelection(clickedSquare){
      let clickedColor = this.colors[clickedSquare]
      if (clickedColor === this.pickedColor) {
        this.messageDisplayText = "You Picked Right!";
        this.setAllColorsTo(this.pickedColor);
        this.restartButtonText = "Play Again!";
        this.headerBackgroundColor = this.pickedColor;
      } else {
        this.colors.splice(clickedSquare, 1, "#232323")
        this.messageDisplayText = "Try Again!";
      }
    }
}
}
</script>

<style>

#app {
  font-family: "Montserrat", "Avenir";
  margin:0;
  background : #232323;
}

</style>