<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      
      <h1>Регистрация клиента</h1>
      <input v-model="clientEmail" type="email" id="inputEmail" class="form-control" placeholder="E-mail клиента" required="" autofocus="" style="width: 215px; margin: 5px;">
      <input v-model="clientName" type="text" id="inputName" class="form-control" placeholder="Имя клиента" required="" autofocus="" style="width: 215px; margin: 5px;">
      <input ref="passwordfield" v-model="clientPassword" type="password" id="inputPassword" class="form-control" placeholder="Пароль" required="" style="width: 215px; margin: 5px;">
      <!-- <div style="display: flex;">
        <input ref="passwordfield" v-model="clientPassword" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        <span ref="visibilitybtn" style="margin: 5px; cursor: pointer;" class="material-icons" @click="toggleVisibility()">
          visibility
        </span>
      </div> -->
      
      <div class="checkbox mb-3">
      </div>
      <button @click="register()" class="btn btn-lg btn-primary btn-block registerBtn">Зарегестрировать нового клиента</button>
      <div class="customErros">{{ errors }}</div>
      
      <div class="notifier">
        <h5>Оповестить клиентов о новинке</h5>
        <div class="notifierAligner">
          <input v-model="mailTitle" type="text" id="inputMailTitle" class="form-control" placeholder="Тема сообщения" required="" autofocus="" style="width: 215px; margin: 5px;">
          <input v-model="mailContent" type="text" id="inputMailContent" class="form-control" placeholder="Текст сообщения" required="" autofocus="" style="width: 215px; margin: 5px;">
        </div>
        <button class="w-100 btn btn-primary" @click="notifySubscribers()">Оповестить клиентов</button>
      </div>
    </div>
    <br style="clear: both"/>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

var ip = require("ip");
// const { networkInterfaces } = require('os');
// const nets = networkInterfaces();

import { networkInterfaces } from 'os';
const nets = networkInterfaces();

export default {
  name: 'ClientLogin',
  data(){
    return {
      clientEmail: '',
      clientName: '',
      clientPassword: '',
      errors: '',
      mailTitle: '',
      mailContent: ''
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    notifySubscribers(){
      fetch(`http://localhost:4000/subscribers/notify/?title=${this.mailTitle}&content=${this.mailContent}`, {
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
          alert('Сообщение отправлено')
        } else if(JSON.parse(result).status.includes("Error")){
          alert('Сообщение не отправлено')
        }
      })
      console.log(`mailContent: ${this.mailContent}, mailTitle: ${this.mailTitle}`)
    },
    register(){
      fetch(`http://localhost:4000/clients/create/?clientname=${this.clientName}&clientemail=${this.clientEmail}&clientpassword=${this.clientPassword}&clientaddress=${ip.address()}`, {
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
          console.log(`JSON.parse(result): ${JSON.parse(result)}`)
          this.$router.push({ name: 'Home' })
        }
      });
    }
  }
}
</script>
<style scoped>
  .aside {
    float: left;
    height: 2300px;
    width: 15%;
    background-color: rgb(205, 205, 205);
  }
  .main {
    background-color: rgb(225, 225, 225);
    width: 85%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    height: 2300px;
    overflow-y: auto;
  }

  .header {
    height: 75px;
    width: 100%;
    background-color: rgb(235, 235, 235);
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

  .ads {
    width: 50%;
    
    background-color: rgb(0, 0, 0); 
  }

  .rates {
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: auto;
  }

  .rate {
    width: 100%;
    margin: 15px;
    border: 1px solid white;
    color: white;
    font-weight: bolder;
  }

  .rateHeader {
    font-size: 18px;
    font-weight: bolder;
  }

  .rateSubheader {
    font-size: 12px;
  }

  .rateFeature {
    display: flex;
    flex-direction: column;
    margin: 35px 0px;
    line-height: 5px;
  }

  .plugInBtn {
    width: 125px;
    font-size: 12px;
    margin: 5px;
  }

  .otherRatesBtn {

  }

  .news {
    margin: auto;
    width: 75%;
    text-align: left;
  }

  .newsHeader {
    font-weight: bolder;
    font-size: 24px;
  }

  .newsItemHeader {
    font-weight: bolder;
  }

  .newsItem {
    font-weight: bolder;
  }

  .socialMedia {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
  }
  .socialMediaItem {
    margin: 5px;
  }

  .billboards {
    
  }

  .billboard {
    width: 100%;
  }

  .personalArea {
    cursor: pointer;
  }

  .notifier {
    margin-top: 75px;
  }

  .notifierAligner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>