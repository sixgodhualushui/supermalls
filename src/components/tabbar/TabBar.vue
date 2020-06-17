<template>
    <div id="tab-bar">
     <slot></slot>
    </div>
</template>

<script >
export default {
    name: "TabBar"
  }
 
</script>

<style>
 #tab-bar {
    display: flex;
    background-color: #e1e1e1e1;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    
    box-shadow: 0 -2px 2px rgba(100, 100, 100,.4);
  }
  
</style>
