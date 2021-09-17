<template>
    <div class="header">
        <!-- <div style="display: flex; height: 100%;"> -->
          <p>ISP</p>
          <!-- <img style="height: 100%;" src="https://lk.flex.ru/blocks/pre/1/logo.png"> -->
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
                <p class="personalArea" ref="personalArea" style="display: flex;">
                  Личный кабинет
                  <span @click="openLoginWindow()" class="material-icons" style="margin-left: 15px; align-self: center;">
                      settings
                  </span>
                </p>
            </div>
            <div v-else-if="area">
                <p class=" logout" style="display: flex;">
                  Выйти
                  <span class="material-icons" @click="toPage('Home')" style="margin-left: 15px; align-self: center;">
                      logout
                  </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: [
      'auth',
      'area'
    ],
    data(){
      return {
        loginToggler: false,
        loginWindow: null,
        loginWindowInputClientId: null,
        loginWindowInputPassword: null,
        loginWindowButton: null,
      }
    },
    methods: {
      openLoginWindow(){
        this.loginToggler = !this.loginToggler
        if(this.loginToggler){
          this.$refs.personalArea.style = `
            background-color: rgb(225, 225, 225);
            color: white;
          `
          this.loginWindow =  document.createElement("div")
          this.loginWindow.style = `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 70px;
            left: 825px;
            width: 400px;
            height: 200px;
            background-color: rgb(225, 225, 225);
            border: 2px solid rgb(200, 200, 200);
          `
          this.loginWindowInputClientId =  document.createElement("input")
          this.loginWindowInputClientId.type = "text"
          this.loginWindowInputClientId.id = "inputClientId"
          this.loginWindowInputClientId.classList.add("form-control")
          this.loginWindowInputClientId.placeholder = "Client id"
          this.loginWindowInputClientId.required = ""
          this.loginWindowInputClientId.autofocus = ""
          this.loginWindowInputClientId.style = `
            width: 175px;
            margin: 5px;
          `
          this.loginWindowInputClientId.setAttribute("v-model", "clientid")
          this.loginWindow.appendChild(this.loginWindowInputClientId)
          this.loginWindowInputPassword =  document.createElement("input")
          this.loginWindowInputPassword.type = "password"
          this.loginWindowInputPassword.id = "inputPassword"
          this.loginWindowInputPassword.classList.add("form-control")
          this.loginWindowInputPassword.placeholder = "Пароль"
          this.loginWindowInputPassword.required = ""
          this.loginWindowInputPassword.autofocus = ""
          this.loginWindowInputPassword.style = `
            width: 175px;
            margin: 5px;
          `
          this.loginWindowInputPassword.setAttribute("v-model", "password")
          this.loginWindow.appendChild(this.loginWindowInputPassword)
          this.loginWindowBtn = document.createElement("button")
          this.loginWindowBtn.classList.add("btn")
          this.loginWindowBtn.classList.add("btn-lg")
          this.loginWindowBtn.classList.add("btn-primary")
          this.loginWindowBtn.classList.add("btn-block")
          this.loginWindowBtn.classList.add("loginBtn")
          
          // letloginWindowBtn.setAttribute("@click", "login()")
          this.loginWindowBtn.textContent = "Войти"
          this.loginWindow.appendChild(this.loginWindowBtn)
          document.body.appendChild(this.loginWindow)
        } else if(!this.loginToggler){
          this.$refs.personalArea.style = `
            background-color: transparent;
            color: black;
          `
          this.loginWindow.remove()
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
    overflow: hidden;
    /* height: 75px; */
    min-height: 75px;
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

</style>