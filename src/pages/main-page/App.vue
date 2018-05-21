<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <div v-if="!cordova" class="alert">
      There might be an error with your installation. Check that <strong>Vue.cordova</strong> is available
    </div>

    <div v-if="cordova && !cordova.deviceready" class="alert">
      The `deviceready` event has not been triggered.
      <br />
      Check the <a href="https://github.com/kartsims/vue-cordova#troubleshooting">Troubleshooting section</a> of vue-cordova's README.
    </div>

    <div class="indicators">
      <div :class="{ ok: cordova.deviceready }">
        <span></span>deviceready
      </div>
      <div v-for="(pluginTest, plugin) in plugins" :class="{ ok: pluginEnabled(plugin) }" :key="plugin" @click="pluginTest">
        <span></span>{{ plugin }}
      </div>
      <p>
        Click a plugin name to run a simple test
      </p>
    </div>
    <div>nativeRouter: <input v-model="nativeRouter" type="text"></div>
    <router-link :to="{path: nativeRouter}">调起Native</router-link>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'App',
  methods: {
    pluginEnabled: function (pluginName) {
      return this.cordova.plugins.indexOf(pluginName) !== -1
    }
  },
  data: function () {
    let that = this
    return {
      cordova: Vue.cordova,
      nativeRouter: '',
      plugins: {
        'cordova-plugin-camera': function () {
          if (!that.$cordova.camera) {
            window.alert('Vue.cordova.camera not found !')
            return
          }
          that.$cordova.camera.getPicture((imageURI) => {
            window.alert('Photo URI : ' + imageURI)
          }, (message) => {
            window.alert('FAILED : ' + message)
          }, {
            quality: 50,
            destinationType: window.Camera.DestinationType.DATA_URL,
            sourceType: window.Camera.PictureSourceType.PHOTOLIBRARY
          })
        },
        'cordova-plugin-oriente-axios': function () {
          window.alert('请在下面模块中测试')
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  height: 100%;
}

body {
  height: 100%;
}

.logo {
  padding-bottom: 30px;
}

.logo span {
  position: relative;
  top: -30px;
  font-size: 36px;
  margin: 0 20px;
}

.logo img {
  width: 90px;
  height: 90px;
}

div.alert {
  color: #c00;
  font-weight: bold;
  font-size: .9em;
  padding-bottom: 30px;
  line-height: 1.6;
}

div.alert a {
  color: inherit;
}

div.indicators {
  width: 340px;
  margin: 0 auto 40px;
  text-align: left;
  font-family: Courier, Courier New, sans-serif;
}
div.indicators div {
  padding-bottom: 15px;
  opacity: .6;
}
div.indicators div.ok {
  opacity: 1;
  cursor: pointer;
}
div.indicators div.ok span {
  background: #0c0;
}
div.indicators div span {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #c00;
  border-radius: 20px;
  position: relative;
  top: 3px;
  margin-right: 15px;
}
div.indicators p {
  font-size: .8em;
  font-weight: bold;
  padding-bottom: 20px;
}
</style>
