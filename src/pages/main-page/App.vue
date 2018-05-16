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

    <h2>`Vue.cordova`</h2>

    <div class="dump" v-if="cordova">{{ cordova }}</div>

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
  mounted () {
    this.$cordova.on('deviceready', () => {
      window.alert(111)
      window.echo && window.echo('echome', function (echoValue) {
        alert(echoValue === 'echome') // should alert true.
      })
    })
  },
  data: function () {
    return {
      cordova: Vue.cordova,
      plugins: {
        'cordova-plugin-camera': function () {
          if (!Vue.cordova.camera) {
            window.alert('Vue.cordova.camera not found !')
            return
          }
          Vue.cordova.camera.getPicture((imageURI) => {
            window.alert('Photo URI : ' + imageURI)
          }, (message) => {
            window.alert('FAILED : ' + message)
          }, {
            quality: 50,
            destinationType: Vue.cordova.camera.DestinationType.FILE_URI
          })
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

div.dump {
  background: #eee;
  text-align: left;
  border: solid 1px #ccc;
  padding: 20px;
  max-width: 600px;
  box-sizing: border-box;
  font-family: monospace;
  white-space: pre;
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
