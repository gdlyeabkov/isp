<template>
    <div class="header">
        <p>ISP</p>
        <div v-if="!auth">
            <div v-if="!area" style="display: flex; justify-content: space-around;">
                <p class="personalArea" style="display: flex;">
                  Личный кабинет
                  <span @click="toPage('PersonalArea')" class="material-icons" style="margin-left: 15px; align-self: center;">
                      settings
                  </span>
                </p>
                <p class="support" style="display: flex;">
                  Контактная информация
                  <span class="material-icons" style="margin-left: 15px; align-self: center;">
                    call
                  </span>
                </p>
                <p class="feedback" style="display: flex;">
                  Техническая поддержка
                  <span class="material-icons" style="margin-left: 15px; align-self: center;">
                    support
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
    methods: {
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

  .personalArea, .logout, .feedback, .support {
    cursor: pointer;
  }

  .feedback {

  }

</style>