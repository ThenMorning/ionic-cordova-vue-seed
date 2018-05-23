<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$ajax
      .get(
        "http://mobile.weather.com.cn/data/sk/101010100.html?_=1381891661455",
        {
          params: {}
        }
      )
      .then(res => {
        console.log(res);
      });

    this.$ajax(
      "http://mobile.weather.com.cn/data/sk/101010100.html?_=1381891661455"
    ).then(res => {
      console.log(res);
    });

    // this.$ajax({
    //   method: "post",
    //   url: "/user/12345",
    //   data: {
    //     firstName: "Fred",
    //     lastName: "Flintstone"
    //   }
    // }).then(res => {
    //   console.log(res);
    // });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
