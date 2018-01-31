// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/route'
import VueCordova from 'vue-cordova'

Vue.config.productionTip = false

Vue.use(VueCordova, {
    optionTestKey: 'optionTestValue'
})

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
    var cordovaScript = document.createElement('script')
    cordovaScript.setAttribute('type', 'text/javascript')
    cordovaScript.setAttribute('src', 'cordova.js')
    document.body.appendChild(cordovaScript)
}

// 设备上运行
// document.addEventListener('deviceready', function() {
//   new Vue({
//     el: '#app',
//     router,
//     template: '<App/>',
//     components: { App },
//     data: function () {
//       return {
//         cordova: Vue.cordova
//       }
//     }
//   })
//   window.navigator.splashscreen.hide()
// }, false);

// 浏览器上运行
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: function () {
    return {
      cordova: Vue.cordova
    }
  }
})
