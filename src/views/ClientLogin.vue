<template>
  <div>
    <Header :auth="true" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
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
        <input ref="passwordfield" v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Пароль" required=""/>
        <span ref="visibilitybtn" style="margin: 5px; cursor: pointer;" class="material-icons" @click="toggleVisibility()">
          visibility
        </span>
      </div>
      <button class="btn btn-lg btn-primary btn-block loginBtn" @click="login()">Войти</button>
      <div class="errors">{{ errors }}</div>
    </div>
    <br style="clear: both"/>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

import * as jwt from 'jsonwebtoken'

export default {
  name: 'ClientLogin',
  data(){
    return {
      clientid: "",
      password: "",
      errors: ""
    }
  }, 
  methods: {
    toggleVisibility(){
      if(this.$refs.passwordfield.type.includes("text")){
        this.$refs.passwordfield.type = "password"
        this.$refs.visibilitybtn.textContent = "visibility"
      } else {
        this.$refs.passwordfield.type = "text"
        this.$refs.visibilitybtn.textContent = "visibility_off"
      }
    },
    login(){
      fetch(`http://localhost:4000/clients/check/?clientid=${this.clientid}&password=${this.password}`, {
        mode: 'cors',
        method: 'GET'
      }).then(response => response.body).then(rb  => {
        const reader = rb.getReader()
        return new ReadableStream({
          start(controller) {
            function push() {
              reader.read().then( ({done, value}) => {
                if (done) {
                  console.log('done', done);
                  controller.close();
                  return;
                }
                controller.enqueue(value);
                console.log(done, value);
                push();
              })
            }
            push();
          }
        });
      }).then(stream => {
        return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
      })
      .then(result => {
        console.log(`JSON.parse(result): ${JSON.parse(result)}`)
        if(JSON.parse(result).status.includes("OK")){
          
          this.token = jwt.sign({
            clientId: this.clientid
          }, 'ispsecret', { expiresIn: '5m' })
          localStorage.setItem('isptoken', this.token)
          
          let clientInfo = JSON.parse(result).client
          // console.log(`Object.values(clientInfo): ${Object.values(clientInfo)}`)
          // this.$router.push({ name: 'PersonalArea', query: { bonus: clientInfo.personalAccountBonus, rateid: clientInfo.rate, name: clientInfo.name, cilentid: clientInfo.cilentId } })
          this.$router.push({ name: 'PersonalArea' })
        } else {
          this.errors = "Неправильно введены логин и пароль"
        }
      });
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

  .errors {
    color: rgb(255, 0, 0);
    font-weight: bolder;
  }

</style>