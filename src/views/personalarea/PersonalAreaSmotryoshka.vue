<template>
  <div>
    <Header :auth="false" :area="true" :minheight="275" :balance="balance" :bonus="personalAccountBonus" :clientId="clientId" :clientName="clientName" />
    <Aside/>
    <div class="main">
      <div style="background: rgb(92,194,207); background: linear-gradient(90deg, rgba(92,194,207,1) 0%, rgba(255,255,255,1) 100%); align-self: center; width: 100%; color: rgb(255, 255, 255); font-size: 28px;">
        <p>Личный кабинет: Интернет</p>
      </div>
      <div style="margin-top: 25px; width:85%; display: flex; flex-direction: column; align-items: flex-start;">
        <img src="https://lk.flex.ru/img/lifestreamlogo.png" alt="">
        <p>
          Телевидение в любом месте где есть Интернет<span style="font-weight: bolder;">!</span>
        </p>
        <p>
          Подробно о том, как пользоваться услугой, можно почитать на сайте компании «ФЛЕКС»
        </p>
        <p>
          Реквизиты для пользования услугой:
        </p>
        <p>
          <span style="font-weight: bolder;">
            Логин (номер лицевого счета): 411269@flex
          </span>
        </p>
        <p>
          <span style="font-weight: bolder;">
            Пароль (на смотрешку): 972321
          </span>
        </p>
        <p>
          Для сброса (смены) пароля для доступа к услуге, нажмите на кнопку Сброс пароля
        </p>
        
        <div id="packagesContainer">
          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>

          <div style="background-color: rgb(0, 175, 255); width: 215px; height: 325px;">
            <p style="color: rgb(255, 255, 255);">пакет</p>
            <p style="font-weight: bolder; color: rgb(255, 255, 255);">more.tv</p>
            <p style="font-size: 24px; color: rgb(255, 255, 255);">за 299</p>
            <p style="color: rgb(255, 255, 255);">рублей в месяц</p>
            <a style="color: rgb(225, 225, 0);" href="">Список каналов</a>
            <button class="btn btn-primary">
              Подключить пакет
            </button>
          </div>
        </div>

        <p>
          <span style="font-size: 24px; color: rgb(255, 100, 0);">
            Вам доступны
          </span>
          <span style="font-size: 18px; color: rgb(0, 0, 255); font-weight: bolder;">
            специальные пакетные предложения.
          </span>
        </p>
        <p>
          «Смотрёшка-ФЛЕКС» – платная услуга доступа к вещанию телевизионных каналов через сеть Интернет.
        </p>
        <p>
          Отличительной особенность данной услуги является её доступность для клиента в любом месте где есть Интернет.
        </p>
        <p>
          Введя свой логин и пароль в системе, вы можете просматривать выбраные вами каналы на компьютере, с использованием приставки или смартТВ.
        </p>
        <p>
          Для просмотра телевизионных каналов необходо иметь подключение к сети Интернет.
        </p>
        <p>
          Для комфортного просмотра, рекомендуемая скорость тарифного плана – <span style="font-weight: bolder;">не менее 4 Мбит/сек.</span>
        </p>
        <p>
          Возможен одновременный просмотр разных каналов на 3-х (не более) устройствах.
        </p>
        <p>
          *Отключение пакета «Смотрёшки», входящего в состав тарифного пакета, происходит при смене тарифного плана.
        </p>
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
          this.clientRate = JSON.parse(result).rate.name

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
    Footer,
    Aside
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

  #packagesContainer > div > button {
    margin-top: 25px;
  }

  #packagesContainer > div {
    width: 200px !important;
    height: 275px !important;
    margin: 5px;
    float: left;
  }

</style>