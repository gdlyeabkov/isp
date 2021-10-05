<template>
  <div>
    <Header :auth="false" :area="true" :minheight="275" :balance="balance" :bonus="personalAccountBonus" :clientId="clientId" :clientName="clientName" />
    <Aside />
    <div class="main">
      <div style="background: rgb(92,194,207); background: linear-gradient(90deg, rgba(92,194,207,1) 0%, rgba(255,255,255,1) 100%); align-self: center; width: 100%; color: rgb(255, 255, 255); font-size: 28px;">
        <p>Личный кабинет: Интернет</p>
      </div>
      <div style="margin-top: 25px; width:85%; display: flex; flex-direction: column; align-items: flex-start;">
        <p class="newsHeader">
          Настройки «Личного Кабинета»
        </p>
        <p>
          <input @change="setOption('dont', dont)" v-model="dont" type="checkbox" style="margin: 10px;" />
          <span>Не отображать предупреждения о недостаточной безопасноти (крайне не рекомендуется)</span>
        </p>
        <p>
          <input @change="setOption('notification', notification)" v-model="notification" type="checkbox" style="margin: 10px;" />
          <span>Получать уведомления безопасности (о смене пароля например) на E-Mail</span>
        </p>
        <p>
          <input @change="setOption('sub', sub)" v-model="sub" type="checkbox" style="margin: 10px;" />
          <span>Получать рассылку уведомлений о возможных акциях и новвоведениях на E-Mail</span>
        </p>

            <span style="font-weight: bolder; margin-top: 25px;">Настройка привязки электронного почтового ящика (E-mail)</span>
            <div style="display: flex; width: 100%;  margin-bottom: 75px;">  
              <span style="align-self: center;">Ваш E-Mail: </span>
              <input type="email" class="w-25 form-control" style="margin: 0px 25px;" :value="email"/>
              <button :disabled="email.length <= 0" @click="deleteEmail()" class="btn btn-light">
                удалить
              </button>
            
            </div>
          



        <p style="font-weight: bolder;">
          Смена пароля на доступ в «Личный Кабинет»
        </p>
        <input style="margin: 10px 0px;" class="w-25 form-control" type="password" placeholder="старый пароль" />
        <input v-model="newPassword" style="margin: 10px 0px;" class="w-25 form-control" type="password" placeholder="новый пароль" />
        <input v-model="newPasswordCheck" style="margin: 10px 0px;" class="w-25 form-control" type="password" placeholder="новый пароль (повтор)" />
        <button @click="replacePassword()" class="btn btn-light">
          сменить пароль
        </button>
        
        <p class="newsHeader">
          Внимание! Настоятельно рекомендуем отказаться от использования простых и коротких паролей для вашей же безопасности.
        </p>
        <p>Рекомендации по выбору пароля для доступа в «Личный Кабинет»</p>
        <ul>
          <li>
            Рекомендованная длина пароля - от 8 до 16 символов
          <li>
            Не используйте в пароле только цифры или только буквы
          </li>
          <li>
            Рекомендуем указывать и цифры и строчные и прописные буквы
          </li>
        </ul>
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
      newPassword: '',
      newPasswordCheck: '',
      email: '',
      dont: false,
      notification: false,
      sub: false
      
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
          this.email = JSON.parse(result).client.email
          this.dont = JSON.parse(result).client.dontDisplayAboutUnfullSecurity
          this.notification = JSON.parse(result).client.receiveNotificationsSecurity
          this.sub = JSON.parse(result).client.receiveSubscribeForActions

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
    setOption(option, newValue){
      // console.log(`option, newValue: ${option}, ${newValue}}`)
      fetch(`http://localhost:4000/clients/settings/set/?clientid=${this.clientId}&option=${option}&newvalue=${newValue}`, {
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
          this.$router.push({ name: 'PersonalArea' })
        } else {
          alert("Ошибка задания опции")
        }
      })
    },
    deleteEmail(){
      fetch(`http://localhost:4000/clients/email/delete/?clientid=${this.clientId}`, {
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
          this.$router.push({ name: 'PersonalArea' })
        } else {
          alert("Ошибка удаления почты")
        }
      })
    },
    replacePassword(){
      if((this.newPassword.includes(this.newPasswordCheck)) && (this.newPassword.length === this.newPasswordCheck.length)){
        fetch(`http://localhost:4000/clients/password/replace/?clientid=${this.clientId}&newpassword=${this.newPassword}`, {
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
            this.$router.push({ name: 'PersonalArea' })
          } else {
            alert("Ошибка смены пароля")
          }
        })
      } else {
        alert('Пароли не совпадают')
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