<template>
    <div :class="필터 + ' filter-item'"  :style="`background-image:url(${imgURL});`">
        <slot></slot>
        <button @click="emitter1"></button>
    </div> 
</template>

<script>
export default {
    name:'FilterBox',
    data() {
        return {
            
        }
    },
    components:{

    },
    methods: {
        emitter1() {
            this.emitter.emit('작명','data명')
        },
    },
    props:{
        imgURL:String,
        필터:String,
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>