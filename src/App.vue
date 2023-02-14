<template>
  <div id="wrap">
    <!-- 인스타그램의 고정식 상단 하단을 여기에 -->
    <div class="header">
      <ul class="header-button-left">
        <li @click="clickedIndex--">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="clickedIndex==1" @click="clickedIndex++">Next</li>
        <li v-if="clickedIndex==2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>
    <h4>안녕,{{ $store.state.name }} {{ $store.state.age }}세 님</h4>
    <button @click="$store.commit('agecounter')">무서운 버튼</button>
    <ul>
      <li>
        <a href="#" @click="clickedIndex=0">탭0</a>
      </li>
      <li>
        <a href="#" @click="clickedIndex=1">탭1</a>
      </li>
      <li>
        <a href="#" @click="clickedIndex=2">탭2</a>
      </li>
    </ul>
    
    <Container :포스팅info="포스팅info" :clickedIndex="clickedIndex" :imgURL="imgURL" @write="MyWrite=$event"/>
    <button @click="more">더보기</button>
    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from './components/Container.vue';
import data from './data';
import axios from 'axios';
let date=new Date();

console.log(date.getMonth);
export default {
  name: 'App',
  data() {
    return {
      포스팅info:data,
      clickedIndex:0,
      imgURL:'',
      MyWrite:'',
    }
  },
  components: {
    Container,
  },
  methods: {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.clickedIndex}.json`)
      .then(a => {
        console.log(a);
        this.포스팅info.push(a.data);
        this.clickedIndex++;
      })
    },
    upload(e) {
      let 파일=e.target.files;
      let url=URL.createObjectURL(파일[0]);
      console.log(url);
      this.imgURL=url;
      this.clickedIndex++;

    },
    publish() {
      let myCurPost = {
        name: this.$store.state.name,
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgURL,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.MyWrite,
        filter: ""
      };
      this.포스팅info.unshift(myCurPost);
      this.clickedIndex=0;
    },
  },
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
