<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="Activity name">
      <el-input v-model="name"/>
    </el-form-item>

  </el-form>
</template>

<script >
  var index={data(){
      return{
        name: 'hello',}

      },
      methods:{
        hello(){
          alert("hello");
        },
        hello2(){
          console.log("hello2");
        }

      },

    name :"index"}
  export default {
    index
    }
import { reactive } from 'vue'

// do not use same name with ref

</script>



<style>
</style>
