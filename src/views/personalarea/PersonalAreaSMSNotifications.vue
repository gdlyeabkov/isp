<template>
  <div>
    <Header :auth="false" :area="true" :minheight="275" :balance="balance" :bonus="personalAccountBonus" :clientId="clientId" :clientName="clientName" />
    <Aside/>
    <div class="main">
      <div style="background: rgb(92,194,207); background: linear-gradient(90deg, rgba(92,194,207,1) 0%, rgba(255,255,255,1) 100%); align-self: center; width: 100%; color: rgb(255, 255, 255); font-size: 28px;">
        <p>Личный кабинет: Интернет</p>
      </div>
      <div style="margin-top: 25px; width:85%; display: flex; flex-direction: column; align-items: flex-start;">
        <p class="newsHeader">
          SMS уведомления
        </p>
        <p style="font-size: 24px; color: rgb(255, 150, 0);">
          Номера телефонов, подписанные на услугу:
        </p>
        <div style="width: 100%; text-align: left;">
          <span class="material-icons">
            stay_primary_portrait
          </span>
          +7 
          <input type="phone" placeholder="9031234567" style="display: inline;" class="w-25 form-control" v-model="phone">
          <button @click="bindPhone()" style="margin-left: 5px;" class="btn btn-light">
            добавить номер
          </button>
        </div>
        <div v-if="phones.length >= 1">
          <div v-for="phone in phones" :key="phone.phone">
            <p>{{ phone.phone }}</p>
          </div>
        </div>
        <div v-else>
          <p>Вы не прикрепили ещё ни 1 номер!</p>
        </div>
        <p>{{ errors }}</p>
        <hr />
          
        <div style="width: 100%; text-align: left;">
          <p>
            142403, Московская обл., г. Ногинск, пл. Ленина, д. 11
          </p>
          <p>
          Тел.: (495) 702-94-49, 993-04-32, 993-0433, 995-52-40, 600-42-13;(496) 517-30-02, 517-31-69
          </p>
          <p>
            Электронная почта: <span style="color: rgb(0, 0, 255);">info@flex.ru</span>
          </p>
          <p>
            По вопросам работы личного кабинета пишите на <span style="color: rgb(0, 0, 255);">web@flex.ru</span>
          </p>
        </div>
      </div>
    </div>
    <br style="clear: both"/>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'

import * as jwt from 'jsonwebtoken'

export default {
  name: 'PersonalArea',
  data(){
    return {
      _id: '',
      clientId: '411269',
      clientName: 'all-4973',
      clientRate: 'Супер u100M/399р',
      personalAccountBonus: 221.5,
      balance: 0,
      token: window.localStorage.getItem("isptoken"),
      phone: '',
      phones: [],
      errors: ''
    }
  },
  mounted(){
    jwt.verify(this.token, 'ispsecret', async (err, decoded) => {
      if (err) {
        this.$router.push({ name: "Home" })
      } else {
        console.log(`decoded.clientId: ${decoded.clientId}`)
        fetch(`http://localhost:4000/clients/get/?clientid=${decoded.clientId}`, {
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
          this.clientId = JSON.parse(result).client.clientId 
          this.clientName = JSON.parse(result).client.name
          this.clientRate = JSON.parse(result).client.rate
          this.personalAccountBonus = JSON.parse(result).client.personalAccountBonus
          this.balance = JSON.parse(result).client.balance
          this.phones = JSON.parse(result).client.phones
        
          fetch(`http://localhost:4000/clients/connections/add/?clientid=${this.clientId}`, {
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
            
          })
        
        });
      }
    })
  },
  methods: {
    bindPhone(){
      if(this.phone.length === 10){
        fetch(`http://localhost:4000/client/phone/?clientid=${this.clientId}&phone=+7${this.phone}`, {
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
          console.log(`JSON.parse(result).status: ${JSON.parse(result).status}, this.clientId: ${this.clientId}, this.phone: ${this.phone}`)
          if(JSON.parse(result).status.includes("OK")){
            // this.$router.push({ name: "PersonalArea" })
          }
        });
      } else {
        this.errors = "Неправильно указан номер телефона"
      }
      
    },
    plugIn(){

    },
    toPage(pageName){
      this.$router.push({ name: pageName })
    },
    logout(){
      this.token = jwt.sign({
          clientId: this.clientid
        }, 'ispsecret', { expiresIn: 1 })
        localStorage.setItem('isptoken', this.token)
      this.toPage('Home')
    },
  },
  components: {
    Header,
    Aside,
    Footer
  }

}
</script>
<style scoped>
  .aside {
    float: left;
    height: 2300px;
    width: 25%;
    background-color: rgb(205, 205, 205);
  }
  .main {
    background-color: rgb(225, 225, 225);
    width: 75%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    height: 2300px;
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

  .aside > p {
    color: rgb(0, 0, 255);
  }

</style>