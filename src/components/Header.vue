<template>
  <div :style="`min-height: ${minheight}px; ${minheight > 100 ? 'display: flex; justify-content: space-between;' : ''}`" class="header">
    <!-- <div style="display: flex;"> -->
      <p v-if="minheight <= 75" style="cursor: pointer;" @click="toPage('Home')">ISP</p>
      <div v-if="minheight > 75" style="display: flex; flex-direction: row; align-items: center;">
        <p  style="cursor: pointer;" @click="toPage('Home')">ISP</p>
        <img v-if="minheight > 75" style="height: 100%;" src="https://lk.flex.ru/blocks/pre/1/logo.png">  
      </div>
    <!-- </div> -->
    <div v-if="!auth">
      <div v-if="!area" style="display: flex; justify-content: space-around;">
          <p class="support" style="display: flex;">
            Контактная информация
            <span @click="toPage('Feedback')" class="material-icons" style="margin-left: 15px; align-self: center;">
              call
            </span>
          </p>
          <p class="feedback" style="display: flex;">
            Техническая поддержка
            <span @click="toPage('Support')" class="material-icons" style="margin-left: 15px; align-self: center;">
              support
            </span>
          </p>
          <div class="personalArea" ref="personalArea" style="display: flex;">
            Личный кабинет
            <span @click="openLoginWindow()" class="material-icons" style="margin-left: 15px; align-self: center;">
              settings
            </span>
            <div v-if="loginToggler" style="display: flex; flex-direction: column; align-items: center; justify-content: center; position: absolute; top: 70px; left: 825px; width: 400px; height: 200px; background-color: rgb(225, 225, 225); border: 2px solid rgb(200, 200, 200); z-index: 5; border-radius: 8px;">
              <input v-model="clientid" type="text" id="inputClientId" class="form-control" placeholder="Client id" required="" autofocus="" style="width: 215px; margin: 5px;">
              <!-- <input ref="passwordfield" v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Пароль" required="" style="width: 275px; margin: 5px;"/> -->
              <div style="display: flex; text-align: center;">
                <input ref="passwordfield" v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Пароль" required=""/>
                <span ref="visibilitybtn" style="margin: 5px; cursor: pointer; color: rgb(0, 0, 0);" class="material-icons" @click="toggleVisibility()">
                  visibility
                </span>
              </div>
              <button class="btn btn-lg btn-primary btn-block loginBtn" @click="login()">Войти</button>
              <p class="errors">{{ errors }}</p>
            </div>
          </div>
      </div>
      <div v-else-if="area" style="display: flex;">
        <div style="display: flex; flex-direction: column;">
          <p>
            Служба технической поддержки ООО «ISP»
          </p>
          <p style="font-weight: bolder;">
            +7 (495) 600-42-11
          </p>
          <p style="font-weight: bolder;">
            +7 (906) 70-111-70
          </p>
          <p>
            Электронная почта: support@isp.ru
          </p>
        </div> 
        
        <div style="display: flex; flex-direction: column; margin-left: 125px;">
          <p style="font-weight: bolder;">Личный кабинет</p>
          <p>Лицевой счет: <span style="color: rgb(255, 0, 0);">{{ clientId }}</span></p>
          <p>Имя пользователя: <span style="color: rgb(255, 0, 0);">{{ clientName }}</span></p>
          <p>Баланс л/с: <span style="color: rgb(255, 0, 0);">{{ balance }}Ք</span></p>
          <p>Скидка: <span style="color: rgb(255, 0, 0);">{{ bonus }}%</span></p>
          <p class=" logout" style="display: flex;">
            <span style="color: red; font-weight: bolder;">
              Выйти
            </span>
            <span class="material-icons" @click="logout()" style="margin-left: 15px; align-self: center;">
              logout
            </span>
          </p>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import * as jwt from 'jsonwebtoken'

export default {
    name: 'Header',
    props: [
      'auth',
      'area',
      'minheight',
      'clientId',
      'bonus',
      'balance',
      'clientName',
    ],
    data(){
      return {
        loginToggler: false,
        loginWindow: null,
        loginWindowInputClientId: null,
        loginWindowInputPassword: null,
        loginWindowButton: null,
        clientid: '',
        password: '',
        errors: '',
        token: ''
      }
    },
    mounted(){
      this.token = localStorage.getItem('isptoken')
      jwt.verify(this.token, 'ispsecret', (err, decoded) => {
        if (err) {

          // this.$router.push({ name: "PersonalArea" })
         
          if(minheight > 100){
            this.$router.push({ name: "Home" })
          }

        }
      })
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
      logout(){
        this.token = jwt.sign({
            clientId: this.clientid
          }, 'ispsecret', { expiresIn: 1 })
          localStorage.setItem('isptoken', this.token)
        this.toPage('Home')
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
      },
      openLoginWindow(){
        this.loginToggler = !this.loginToggler
        if(this.loginToggler){
          this.$emit("closeAllMenus")
          this.$refs.personalArea.style = `
            background-color: rgb(225, 225, 225);
            color: white;
            z-index: 25;
          `
          // this.loginWindow =  document.createElement("div")
          // this.loginWindow.style = `
          //   display: flex;
          //   flex-direction: column;
          //   align-items: center;
          //   justify-content: center;
          //   position: absolute;
          //   top: 70px;
          //   left: 825px;
          //   width: 400px;
          //   height: 200px;
          //   background-color: rgb(225, 225, 225);
          //   border: 2px solid rgb(200, 200, 200);
          // `
          // this.loginWindowInputClientId =  document.createElement("input")
          // this.loginWindowInputClientId.type = "text"
          // this.loginWindowInputClientId.id = "inputClientId"
          // this.loginWindowInputClientId.classList.add("form-control")
          // this.loginWindowInputClientId.placeholder = "Client id"
          // this.loginWindowInputClientId.required = ""
          // this.loginWindowInputClientId.autofocus = ""
          // this.loginWindowInputClientId.style = `
          //   width: 175px;
          //   margin: 5px;
          // `
          // this.loginWindowInputClientId.setAttribute("v-model", "clientid")
          // this.loginWindow.appendChild(this.loginWindowInputClientId)
          // this.loginWindowInputPassword =  document.createElement("input")
          // this.loginWindowInputPassword.type = "password"
          // this.loginWindowInputPassword.id = "inputPassword"
          // this.loginWindowInputPassword.classList.add("form-control")
          // this.loginWindowInputPassword.placeholder = "Пароль"
          // this.loginWindowInputPassword.required = ""
          // this.loginWindowInputPassword.autofocus = ""
          // this.loginWindowInputPassword.style = `
          //   width: 175px;
          //   margin: 5px;
          // `
          // this.loginWindowInputPassword.setAttribute("v-model", "password")
          // this.loginWindow.appendChild(this.loginWindowInputPassword)
          // this.loginWindowBtn = document.createElement("button")
          // this.loginWindowBtn.classList.add("btn")
          // this.loginWindowBtn.classList.add("btn-lg")
          // this.loginWindowBtn.classList.add("btn-primary")
          // this.loginWindowBtn.classList.add("btn-block")
          // this.loginWindowBtn.classList.add("loginBtn")
          // this.loginWindowBtn.textContent = "Войти"
          // this.loginWindow.appendChild(this.loginWindowBtn)
          // document.body.appendChild(this.loginWindow)
        } else if(!this.loginToggler){
          this.$refs.personalArea.style = `
            background-color: transparent;
            color: black;
          `
          // this.loginWindow.remove()
        }
      },  
      toPage(pageName){
        this.$router.push({ name: pageName })
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
  }

  .header {
    /* box-sizing: content-box; */
    overflow: hidden;
    /* height: 75px; */
    /* min-height: 75px; */
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

  .personalArea, .logout, .feedback, .support {
    cursor: pointer;
  }

  .feedback {

  }

  .loginBtn {
    margin: 10px 0px;
    font-size: 16px;
  }

  .errors {
    color: rgb(255, 0, 0);
    font-weight: bolder;
  }

</style>