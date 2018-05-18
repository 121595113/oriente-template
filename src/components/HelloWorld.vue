<template>
  <div class="hello">
    <h2>cordova-plugin-axios</h2>
    <div class="control-group">url:<input placeholder="请输入请求地址" v-model="url"/></div>
    <div class="control-group">method:
      <select v-model="method">
        <option value="get">GET</option>
        <option value="post">POST</option>
      </select>
    </div>
    <div class="control-group">{{dataLable}}:<textarea v-model="data"></textarea></div>
    <button @click="request">发送请求1</button>
    <button @click="request2">发送请求2</button>
    <div v-if="result">{{state}}:{{result}}</div>
  </div>
</template>

<script>
import Vue from 'vue'
let axios
export default {
  name: 'HelloWorld',
  data () {
    return {
      url: '',
      method: 'get',
      cordova: Vue.cordova,
      data: `
        {

        }
        `,
      result: '',
      state: ''
    }
  },
  mounted () {
    axios = this.$cordova.axios
  },
  computed: {
    dataLable () {
      return this.method === 'get' ? 'params' : 'data'
    }
  },
  methods: {
    request () {
      let data = JSON.parse(this.data)
      axios &&
        axios[this.method](this.url, data)
          .then(res => {
            this.state = '成功1'
            this.result = JSON.stringify(res)
            console.log(res)
          })
          .catch(err => {
            this.state = '失败1'
            this.result = JSON.stringify(err)
            console.log(err)
          })
    },
    request2 () {
      let data = JSON.parse(this.data)
      axios &&
        axios
          .request({
            url: this.url,
            data
          })
          .then(res => {
            this.state = '成功2'
            this.result = JSON.stringify(res)
            console.log(res)
          })
          .catch(err => {
            this.state = '失败2'
            this.result = JSON.stringify(err)
            console.log(err)
          })
    }
  }
}
</script>

<style lang="scss" scoped>
.hello {
  font-size: 20px;
  text-align: left;
}
.control-group {
  margin-bottom: 10px;
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
input {
  border: 1px solid #eee;
}
select {
  border: 1px solid #eee;
}
textarea {
  vertical-align: text-top;
  height: 100px;
  border: 1px solid #eee;
}
button {
  border: 1px solid #00f;
}
</style>
