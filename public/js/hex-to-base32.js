new Vue({
  el: '#app',
  data: {
    hex: '',    
  },

  computed: {
    base32: function () {
      return OTPAuth.Secret.fromHex(this.hex).base32;
    }
  }
});
