<template>

  <el-row class="mb-4">
    <el-button disabled>Default</el-button>
    <el-button type="primary"    @click="one()">primary</el-button>
    <el-button type="success" disabled>Success</el-button>
    <el-button type="info" disabled>Info</el-button>
    <el-button type="warning" disabled>Warning</el-button>
    <el-button type="danger" disabled>Danger</el-button>
  </el-row>


  <el-form :model="form" label-width="120px">
    <el-form-item label="Activity name">
      <el-input v-model="form.name"/>
    </el-form-item>
    </el-form>

</template>

<script>


  export function hello(){
    console.log("helo")
    this.axios.get("http://localhost:80/test").then((response)=>{
      console.log(response)

    })
  }

  export function hello2(){

  }
  export default {
    name :"test",
    data (){
      return{
        href : '',
        form:{
          name:''
        }
      }
      },
      methods:{
        one(){
          this.$router.push({name:'index'})

        }

        },

    }

</script>

<style>
</style>
