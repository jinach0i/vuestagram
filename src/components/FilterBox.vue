<template>
    <div class="filter-item"  :style="`background-image:url(${imgURL});`"></div> 
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
        
    },
    props:{
        imgURL:String,
        filter:Array,
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