<template>
  <el-button @click="hello()" >
    login

  </el-button>

</template>

<script>
  import {hello} from "../components/test.vue"


var login={


     name:"login",
     data(){
       return{}
     },
     methods:{
       hello
     },
     components:{

     }
     }

export default login



</script>

<style>
</style>
