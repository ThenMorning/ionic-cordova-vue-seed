<template>
  <div class="hello">
    <button @click="openCamera">打开相机</button>
  </div>
</template>

<script>
  import Axios from "@/util/AxiosPlugin";
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      openCamera: function () {
        navigator.camera.getPicture(this.onSuccess, this.onFail, {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL
        });
      },
      onSuccess:function () {

      },
      onFail:function () {

      }
    },
    mounted() {
      Axios.get({},'http://www.weather.com.cn/data/sk/101190408.html').then((res)=>{
        console.log(res);
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
