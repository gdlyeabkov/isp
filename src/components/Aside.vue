<template>
  <div class="aside">
    <div class="asideItem">
      <p @click="toPage('PersonalAreaNews')">Новости и уведомления</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalArea')">Лицевой счет</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaTariffPlan')">Тарифный план</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaTrafficData')">Данные по трафику</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaTurboButton')">Турбокнопка</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaPasswordForAccess')">Пароль на доступ в интернет</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaConnectionStatistics')">Данные по соединениям</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaPaymentStatistics')">Статистика платежей</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaDebitStatistics')">Статистика списаний</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaFinancialDocuments')">Финансовые документы</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaPaymentCardActivation')">Активация карты оплаты</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaPaymentByCreditCard')">Оплата банковской картой</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaPromisedPayment')">Обещанный платеж</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaPaymentForServices')">Оплата услуг</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaAccountLockout')">Блокировка учетной записи</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaSmotryoshka')">Смотрёшка</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaDrWebAntiVirus')">Антивирус Dr.Web</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaRealIPAddress')">Статический IP адрес</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaSMSNotifications')">SMS уведомления</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaSettings')">Настройки</p>
    </div>
    <div class="asideItem">
      <p @click="toPage('PersonalAreaHelp')">Помощь по ЛК</p>
    </div>
    <div class="asideItem">
      <p @click="logout()">Выход</p>
    </div>
  </div>
</template>

<script>
import * as jwt from 'jsonwebtoken'

export default {
  name: 'Aside',
  data(){
    return {
      token: window.localStorage.getItem("isptoken")
    }
  },
  methods: {
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

  .asideItem {
    color: rgb(0, 0, 255);
    cursor: pointer;
    height: 45px;
    border-bottom: 1px solid rgb(145, 145, 145);
  }

  .asideItem:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 255);
  }

</style>