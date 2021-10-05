<template>
  <div>
    <Header :auth="false" :area="true" :minheight="275" :balance="balance" :bonus="personalAccountBonus" :clientId="clientId" :clientName="clientName" />
    <Aside/>
    <div class="main">
      <div style="background: rgb(92,194,207); background: linear-gradient(90deg, rgba(92,194,207,1) 0%, rgba(255,255,255,1) 100%); align-self: center; width: 100%; color: rgb(255, 255, 255); font-size: 28px;">
        <p>Личный кабинет: Интернет</p>
      </div>
      <div style="margin-top: 25px; width:85%; display: flex; flex-direction: column; align-items: flex-start;">
        <p class="newsHeader">Данные по тарифному плану</p>
        <p>Действующий тарифный план: {{ clientRate.name }}</p>
        <p style="font-weight: bolder;">Доступные для подключения тарифные планы:</p>
        <p style="font-weight: bolder;">Специальные предложения!</p>
        <div style="font-size: 13px; width: 100%; text-align: left;">
          <p>
            Для того чтобы запланировать переход на новый тарифный план, просто щелкните по его названию в списке, и подтвердите свой выбор.
          </p>
          <p>
            Для подключения "тарифного пакета" необходимо наличие суммы на лицевом счету не менее месячной стоимости "тарифного пакета".
          </p>
          <p>
            <span style="font-weight: bolder;">Внимание!</span> Для некоторых тарифных планов возможна досрочная смена.
          </p>
          <p class="newsHeader">
            Как правильно воспринимать название тарифного плана
          </p>
          <p>
            Тарифные планы классифицируются на следующие категории:
          </p>
          <div style="font-weight: bolder; font-size: 16px;">
            <p>
              <span style="color: rgb(0, 255, 0);">Помегабайтные тарифные планы с оплатой трафика по превышению лимита</span> – пример такого тарифа - «200р/500Мб/1,0р», где 200р - ежемесячная абонентская плата по тарифу, 500Мб - включенный трафик (предоплаченный лимит), 1,0р - стоимость каждого последующего мегабайта трафика при превышении лимита
            </p>
            <p>
              <span style="color: rgb(0, 255, 0);">Помегабайтные тарифные планы с ограничением скорости по превышению лимита</span> – пример такого тарифа - «350р/15Гб/u1M», где 350р - ежемесячная абонентская плата по тарифу, 15Гб - включенный трафик (предоплаченный лимит), u1M - ограничение скорости (до 1 мегабит/с), накладываемое при превышении лимита
            </p>
            <p>
              <span style="color: rgb(0, 255, 0);">Ассиметричные безлимитные тарифные планы</span> – пример такого тарифа - «u10M(2M)/430р», где 430р - ежемесячная абонентская плата по тарифу, u10M - максимально возможная скорость на прием (до 10 мегабит/с) и (2M) - максимально возможная скорость на отдачу (до 2 мегабит/с)
            </p>
            <p>
              <span style="color: rgb(0, 255, 0);">Симметричные безлимитные тарифные планы</span> – пример такого тарифа - «u20M/650р», где 650р - ежемесячная абонентская плата по тарифу, u20M - максимально возможная скорость как прием так и на отдачу (до 20 мегабит/с)
            </p>
            <p>
              <span style="color: rgb(0, 255, 0);">Безлимитные тарифные планы с понижением скорости по превышению лимита</span> – пример такого тарифа - «UR-128L/1800», где 1800р - ежемесячная абонентская плата по тарифу, 128 - максимально возможная скорость как прием так и на отдачу (до 128 килобит/с), для таких тарифов характерна литера L в названии. Лимиты на такие тарифы отображаются в тарифной сетке (например для данного тарифа при расходе 20Гбайт трафика, скорость будет снижена до 64 кбит/с)
            </p>
            <p>
              <span style="color: rgb(0, 255, 0);">Помегабайтные тарифные планы, с изначально выставленным ограничением по скорости</span> – пример такого тарифа - «VPN 5000/14000/0,34р», тариф по характеристикам причисляется к категории помегабайтных тарифов с оплатой трафика по превышению лимита, однако имеют изначальное ограничение скорости (указывается в тарифной сетке на сайте, для данного примера характерно ограничение скорости 2 мегабит/с)
            <p style="color: rgb(0, 255, 0);">
              Тарифные планы в названиях которых имеются аббревиатуры "VPN" и "UR" характерны для доступа к сети Интернет по выделенной линии с авторизацией на VPN-сервере (подключение посредством радиоканала, например)
            </p>
          </div>
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
      token: window.localStorage.getItem("isptoken")
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
          
          // this.clientRate = JSON.parse(result).client.rate
          this.clientRate = JSON.parse(result).rate

          this.personalAccountBonus = JSON.parse(result).client.personalAccountBonus
          this.balance = JSON.parse(result).client.balance
        
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