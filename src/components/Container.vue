<template>
    <div>
        컨테이너에요
        <ul>
            <li v-if="clickedIndex==0" >
                <Post :포스팅info="포스팅info[i]" v-for="(a, i) in 포스팅info" :key="i"/>
            </li>
            <li v-if="clickedIndex==1" >
                <div class="upload-image" :style="`background-image: url(${imgURL});`"></div>
                <div class="filters">
                    <FilterBox :필터="필터" :imgURL="imgURL" v-for="필터 in filter" :key="필터">
                        <span>{{ 필터 }}</span>
                    </FilterBox>
                </div>
            </li>
            <!-- 글작성페이지 -->
            <li v-if="clickedIndex==2" >
                <div class="upload-image" :style="`background-image: url(${imgURL});`"></div>
                <div class="write">
                    <textarea class="write-box" @input="$emit('write',$event.target.value)">write something!</textarea>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import FilterBox from './FilterBox.vue';
import filter from './filter';
import Post from './Post.vue';
export default {
    name: 'TheContainer',
    data() {
        return {
            filter: filter,
        }
    },
    components: {
    Post,
    FilterBox
},
    props:{
        포스팅info:Array,
        clickedIndex:Number,
        imgURL:String,

    },
    methods: {
        
    },

}
</script>

<style>
.upload-image {
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size: cover;
}

.filters {
    overflow-x: scroll;
    white-space: nowrap;
}

.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
}

.filters::-webkit-scrollbar {
    height: 5px;
}

.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>