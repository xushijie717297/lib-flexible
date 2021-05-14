<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="box" @click="speechC">语音输入</div>
    <div>{{ lianjie }}</div>
    <van-button plain type="primary">朴素按钮</van-button>
    <van-button plain type="info">{{
      "1620375522" | parseTime("{y}-{m}-{d} {h}:{i}:{s} {a}")
    }}</van-button>
    <van-button plain type="info">{{
      "1620375522" | formatTime("{y}-{m}-{d} {h}:{i}:{s} {a}")
    }}</van-button>
    <div class="fox">防抖</div>
    <p class="line"></p>
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
      文字
    </van-divider>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import * as timeStamp from "../utils/index";
import { debounce } from "../utils/index";
import Vue from "vue";
import { Button } from "vant";
import { Collapse, CollapseItem } from "vant";
import { Divider } from "vant";

Vue.use(Divider);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Button);
import axios from "axios";
// import speech from "./speech.js";
import data from "../../static/data.json";
// import speech from "http://saasbate.dlmeasure.com:1801/test/speech.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      routerJson: null,
      lianjie: "待返回",
      activeNames: ["1"],
      date: 1620375522,
      obj:{
        "name":"xu",
        "age":"24",
        "sex":"man"
      }
    };
  },
  filters: {
    parseTime: timeStamp.parseTime,
    formatTime: timeStamp.formatTime,
  },
  mounted() {
    var self = this;
    axios.defaults.baseURL = "/api";
    axios
      .post("/zv-pay/sys/login", {
        params: {
          password: "Ruyi-2021",
          remember_me: true,
          username: "admin",
        },
      })
      .then(
        (response) => {
          console.log(response);
          // this.routerJson = response.data
        },
        (response) => {
          console.log("error");
        }
      );
    var url = timeStamp.getQueryObject(
      "http://192.168.1.134:9522/DirectionThematicMap/darktheme/admin/1?token=YWRtaW4tenRkYXRhQDEyMw"
    );
    console.log(url);
    var str = timeStamp.byteLength("qwe");
    console.log(str);
    var obj = timeStamp.deepClone(this.obj)
    obj.age = "25"
    console.log(obj)
    console.log(this.obj)
  },
  methods: {
    num() {
      return "防抖";
    },
    speechC() {
      // var routerJson = data
      // console.log(this.routerJson)
      // alert(window.speech(this.routerJson))
      window.speech(this.routerJson).then((res) => {
        console.log(res);
        this.lianjie = res;
      });
      // console.log(this.lianjie,11111111111111111111);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line {
  border-top: 1px solid rgb(25, 137, 250); /*no*/
  margin-top: 10px;
  transform: scaleY(0.5);
}
.fox {
  margin-top: 20px;
  height: 44px;
  width: 88px;
  box-sizing: border-box;
  border: 1px solid #1989fa; /*no*/
  color: #1989fa;
  line-height: 44px;
  text-align: center;
  font-size: 14px; /*no*/
}
.box {
  height: 100px;
  width: 100px;
  text-align: center;
  line-height: 100px;
  border: 1px solid red;
  background-color: red;
  font-size: 12px; /* no*/
}
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
