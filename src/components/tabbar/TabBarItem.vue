<template>
    <div class="tab-bar-itme" @click= "itemClick">
      <div v-if="!cood"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon1"></slot></div>
      <div :class="{active: cood}"><slot name="item-text" ></slot></div>
    </div>

    
    
</template>

<script >
export default {
  name: "TabBarItem",
  props:{
    path: String
  },
  data() {
    return {
      
    }
  },
  computed:{
    cood() {
      return this.$route.path.indexOf(this.path)!==-1
    } 
  },
  methods:{
    itemClick() {
      this.$router.push(this.path)
      
    }
    
  }
 
}
</script>

<style>
    .tab-bar-itme{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 15px;
    
  }
  .tab-bar-itme img{
    width: 24px;
    height: 24px;
    margin-top: 2px;
  }
  .active{
    color: DEEPpink;
  }
</style>

