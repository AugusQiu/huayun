<template>
   <p @click="logout">登出</p>
</template>

<script>
    export default {
        name: "logout",
        methods:{
          logout:function () {
            this.$http.post("/user/quit",{}).then((res)=>{
              if(res.data.msg ==="用户已退出")
              {
                this.$router.push("/");
              }
            }).catch((err)=>{
              console.log(err);
            })
          }
        }
    }
</script>

<style scoped>
 p{
   color: #ffffff;
   margin-top: 15px;
   margin-left: 95%;
 }
</style>
