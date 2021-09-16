<template>
  <div>
    <Header :auth="true" :area="false" />
    <div class="aside">
      
    </div>
    <div class="alignForm">
      <img src="../assets/logo.png" alt="" />
      <h1 class="h3 mb-3 font-weight-normal">Войдите в личный кабинет</h1>
      <div>
        <label for="inputClientId" class="sr-only">ID клиента</label>
        <input v-model="clientid" type="text" id="inputClientId" class="form-control" placeholder="Client id" required="" autofocus="" style="margin: 5px;">
      </div>
      <label for="inputPassword" class="sr-only">Пароль</label>
      <div style="display: flex; text-align: center;">
        <input ref="passwordfield" v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
        <span ref="visibilitybtn" style="margin: 5px; cursor: pointer;" class="material-icons" @click="toggleVisibility()">
          visibility
        </span>
      </div>
      <button class="btn btn-lg btn-primary btn-block loginBtn" @click="login()">Войти</button>
      <div class="customErros">{{ errors }}</div>
    </div>
    <br style="clear: both"/>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'ClientLogin',
  data(){
    return {
      clientid: "",
      password: ""
    }
  }, 
  methods: {
    login(){
      this.$router.push({ name: "Home" })
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
  .aside {
    float: left;
    height: 750px;
    width: 15%;
    background-color: rgb(205, 205, 205);
  }
  .alignForm {
    background-color: rgb(225, 225, 225);
    width: 85%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    height: 750px;
  }

  .header {
    height: 75px;
    width: 100%;
    background-color: rgb(235, 235, 235);
  }

  .loginBtn {
    margin-top: 15px;
  }

  .footer {
    height: 175px;
    width: 100%;
    background-color: rgb(185, 185, 185);
    overflow: hidden;
  }

  .footerLinks {
    display: flex;
    justify-content: space-around;
    width: 75%;
    height: 45px;
    margin: auto;
  }

  .logo {
    font-size: 24px;
    font-weight: bolder;
  }

  .footerDescription {
    font-size: 11px;
  }

</style>