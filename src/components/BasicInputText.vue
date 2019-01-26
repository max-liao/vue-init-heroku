<template>
<div>
  <input
    type="text"
    class="input"
    :value="value"
    v-on="listeners"
  >
  <button id="AddCoinBtn">
    <i class="fas fa-coins" aria-hidden="true"></i>
  </button>
</div>
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style>
/* Custom */
button {
  display: inline-block;
  position: relative;
  padding: 10px;
  top: 0;
  font-size: 20px;
  font-family: "Open Sans", Helvetica;
  border-radius: 4px;
  border-bottom: 1px solid rgba( 28, 227, 125, 0.5 );
  background: rgba( 22, 230, 137, 1 );
  color: #fff;
  box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.1 );
  -webkit-transform: translateZ(0);
     -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
          transform: translateZ(0);
  -webkit-transition: all 0.2s ease;
     -moz-transition: all 0.2s ease;
      -ms-transition: all 0.2s ease;
          transition: all 0.2s ease;
}

button:hover {
  top: -10px;
  box-shadow: 0px 10px 10px rgba( 15, 165, 60, 0.2 );
  -webkit-transform: rotateX(20deg);
     -moz-transform: rotateX(20deg);
      -ms-transform: rotateX(20deg);
          transform: rotateX(20deg);
}

button:active {
  top: 0px;
  box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.0 );
  background: rgba( 20, 224, 133, 1 );
}

#AddCoinBtn{
  border-bottom: 1px solid rgba(227, 207, 28, 0.5);
  background: rgb(192, 230, 22);
}

#AddCoinBtn:active {
  background: rgb(136, 224, 20);
}
</style>
