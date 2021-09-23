<template>
  <div>
    <!-- <Header :auth="false" :area="true" :minheight="275" :balance="balance" :bonus="personalAccountBonus" :clientId="clientId" :clientName="clientName" /> -->
    <div class="aside">
      <p @click="toPage('Home')">Новости и уведомления</p>
      <hr/>
      <p @click="toPage('Home')">Лицевой счет</p>
      <hr/>
      <p @click="toPage('Home')">Тарифный план</p>
      <hr/>
      <p @click="toPage('Home')">Данные по трафику</p>
      <hr/>
      <p @click="toPage('Home')">Турбокнопка</p>
      <hr/>
      <p @click="toPage('Home')">Пароль на доступ в интернет</p>
      <hr/>
      <p @click="toPage('Home')">Данные по соединениям</p>
      <hr/>
      <p @click="toPage('Home')">Статистика платежей</p>
      <hr/>
      <p @click="toPage('Home')">Статистика списаний</p>
      <hr/>
      <p @click="toPage('Home')">Финансовые документы</p>
      <hr/>
      <p @click="toPage('Home')">Активация карты оплаты</p>
      <hr/>
      <p @click="toPage('Home')">Оплата банковской картой</p>
      <hr/>
      <p @click="toPage('Home')">Обещанный платеж</p>
      <hr/>
      <p @click="toPage('Home')">Оплата услуг</p>
      <hr/>
      <p @click="toPage('Home')">Блокировка учетной записи</p>
      <hr/>
      <p @click="toPage('Home')">Смотрёшка</p>
      <hr/>
      <p @click="toPage('Home')">Антивирус Dr.Web</p>
      <hr/>
      <p @click="toPage('Home')">Статический IP адрес</p>
      <hr/>
      <p @click="toPage('Home')">SMS уведомления</p>
      <hr/>
      <p @click="toPage('Home')">Настройки</p>
      <hr/>
      <p @click="toPage('Home')">Помощь по ЛК</p>
      <hr/>
      <p @click="logout()">Выход</p>
    </div>
    <div class="main">
      <div style="background: rgb(92,194,207); background: linear-gradient(90deg, rgba(92,194,207,1) 0%, rgba(255,255,255,1) 100%); align-self: center; width: 100%; color: rgb(255, 255, 255); font-size: 28px;">
        <p>Личный кабинет: Интернет</p>
      </div>
      <div style="margin-top: 25px; width:85%; display: flex; flex-direction: column; align-items: flex-start;">
        <p class="newsHeader">
          Новости и уведомления
        </p>
        <div id="newsBlock">
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 100px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              08.08.2021
            </p>
            <p style="margin-left: 15px;">
              Электросталь. Обрыв магистральной оптики. Разбираемся.
            </p>
          </div>
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 200px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              13.07.2021
            </p>
            <p style="margin-left: 15px;">
              Сегодня, 13.07.2021 г., на центральном узле связи в течение дня будут проводится внеплановые сервисные работы на оборудовании. Возможны кратковременные перерывы в предоставлении услуг связи абонентам, получающим услугу доступа в Интернет с авторизацией на VPN-сервере (PPPOE, L2TP). Приносим извинения за доставленные неудобства.
            </p>
          </div>
            
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 325px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              09.06.2021
            </p>
            <p style="margin-left: 15px;">
            График работы абонентского отдела в праздники:
            </p>
            <p style="margin-left: 15px;">
            11 июня 2021г. - с 9:00 до 18:00
            </p>
                      <p style="margin-left: 15px;">
            12 июня 2021г. - ВЫХОДНОЙ
            </p>
            <p style="margin-left: 15px;">
            13 июня 2021г. - ВЫХОДНОЙ
            </p>
            <p style="margin-left: 15px;">
            14 июня 2021г. - с 10:00 до 16:00
            </p>
            <p style="margin-left: 15px;">
            ТЕХНИЧЕСКАЯ ПОДДЕРЖКА РАБОТАЕТ КРУГЛОСУТОЧНО И БЕЗ ВЫХОДНЫХ.
            </p>
            <p style="margin-left: 15px;">
            Тел : 8 (495) 600 42 13
            </p>
          </div>
            
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 400px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              08.08.2021
            </p>
            <p style="margin-left: 15px;">
              Уважаемые абоненты!
            </p>
            <p style="margin-left: 15px;">
              График работы абонентского отдела в праздничные дни:
            </p>
            <p style="margin-left: 15px;">
            30 апреля 2021 - с 9:00 до 18:00
            </p>
            <p style="margin-left: 15px;">
            1,2,3 мая 2021 - ВЫХОДНОЙ
            </p>
            <p style="margin-left: 15px;">
            4,5,6,7,8 мая 2021 - с 10:00 до 16:00
            </p>
            <p style="margin-left: 15px;">
            9,10 мая 2021 - ВЫХОДНОЙ
            </p>
            <p style="margin-left: 15px;">
            Техническая поддержка работает КРУГЛОСУТОЧНО , в обычном режиме
            </p>
            <p style="margin-left: 15px;">
            тел: 8(495) 600-42-11, 8(495) 600-42-13
            </p>
          </div>

          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 100px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              04.04.2021
            </p>
            <p style="margin-left: 15px;">
              Уважаемые абоненты. На данный момент существует проблема с авторизацией L2TP и PPPOE во всей Московской области. Мы уже занимаемся устранением неисправности.
            </p>
          </div>
            
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 375px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              04.03.2021
            </p>
            <p style="margin-left: 15px;">
              ВНИМАНИЕ!
            </p>
            <p style="margin-left: 15px;">
              График работы абонентского отдела в праздничные дни:
            </p>
            <p style="margin-left: 15px;">
              5 марта 2021 - с 9:00 до 16:00,
            </p>
            <p style="margin-left: 15px;">
              6 марта 2021 - с 10:00 до 16:00,
            </p>
            <p style="margin-left: 15px;">
              7 марта 2021 - ВЫХОДНОЙ,
            </p>
            <p style="margin-left: 15px;">
              8 марта 2021 - ВЫХОДНОЙ,
            </p>
            <p style="margin-left: 15px;">
              Техническая поддержка работает КРУГЛОСУТОЧНО , в обычном режиме
            </p>
            <p style="margin-left: 15px;">
              тел: 8495-600-42-11, 8495-600-42-13"
            </p>
          </div>

          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 175px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              22.02.2021
            </p>
            <p style="margin-left: 15px;">
              Уважаемые абоненты! Существует общая проблема по следующим адресам: Авдотьино , Пашуково , Пятково , Кабаново, Мишуково, Вокресенское Лесные Поляны. Занимаемся устранением. Приносим извинения за доставленные неудобства.
            </p>
          </div>
            
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 225px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              19.02.2021
            </p>
            <p style="margin-left: 15px;">
              Внимание! Сегодня проводятся аварийные работы на узле связи. Возможны кратковременные потери связи в течение дня, затрагивает следующие адреса: Ногинск ул. Декабристов, ул. 28 Июня, ул. Белякова 1,2к1,2к2,2к3, ул. 60-летия октября; Пешково; Ельная; Золотой улей; Березовый мостик; Стулово; Аборино Мать и дитя; также оперативно узнавать о проводимых работах/авариях можете в нашем telegram-канале https://t.me/FlexLive
            </p>
          </div>
            
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 375px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              16.02.2021
            </p>
            <p style="margin-left: 15px;">
              ВНИМАНИЕ!
            </p>
            <p style="margin-left: 15px;">
              График работы абонентского отдела в праздничные дни:
            </p>
            <p style="margin-left: 15px;">
              20 февраля 2021 - с 9:00 до 18:00,
            </p>
            <p style="margin-left: 15px;">
              21 февраля 2021 - ВЫХОДНОЙ,
            </p>
            <p style="margin-left: 15px;">
              22 февраля 2021 - с 10:00 до 16:00,
            </p>
            <p style="margin-left: 15px;">
              23 февраля 2021 - ВЫХОДНОЙ,
            </p>
            <p style="margin-left: 15px;">
              Техническая поддержка работает КРУГЛОСУТОЧНО , в обычном режиме
            </p>
            <p style="margin-left: 15px;">
              тел: 8495-600-42-11, 8495-600-42-13
            </p>
          </div>
            
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 150px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              03.02.2021
            </p>
            <p style="margin-left: 15px;">
              Уважаемые абоненты! На данный момент Вы можете испытывать трудности при попытке дозвониться до нас. О проблеме знаем. Занимаемся устранением. Заявки на неисправность можете оставлять на электронную почту support@flex.ru
            </p>
          </div>
            
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 100px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              08.08.2021
            </p>
            <p style="margin-left: 15px;">
              Электросталь. Обрыв магистральной оптики. Разбираемся.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 150px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              01.02.2021
            </p>
            <p style="margin-left: 15px;">
              Уважаемые абоненты, получающие услугу интерактивного телефидения Смотрешка. В пакетах «Стандарт», «Оптима», «50М/ТВ/390», «100М/ТВ+/499» с 1 февраля 2021 года произошли изменения. Ряд каналов, которые были добавлены поставщиком услуги при проведении акции от 10 декабря 2020 года, были убраны из пакетов.
            </p>
          </div>
            
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 500px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              График работы абонентского отдела в праздники:
            </p>
            <p style="margin-left: 15px;">
              Электросталь. Обрыв магистральной оптики. Разбираемся.
            </p>
            <p style="margin-left: 15px;">
              31 декабря 2020г. - с 10:00 до 14:00
            </p>
            <p style="margin-left: 15px;">
              04 января 2021г. - с 10:00 до 16:00  
            </p>
            <p style="margin-left: 15px;">
              08 января 2021г. - с 10:00 до 16:00
            </p>
            <p style="margin-left: 15px;">
              09 января 2021г. - с 10:00 до 16:00
            </p>
            <p style="margin-left: 15px;">
              1, 2, 3, 6, 7, 10 января 2021г. - выходные.
            </p>
            <p style="margin-left: 15px;">
              ТЕХНИЧЕСКАЯ ПОДДЕРЖКА РАБОТАЕТ КРУГЛОСУТОЧНО И БЕЗ ВЫХОДНЫХ.
            </p>
            <p style="margin-left: 15px;">
              Тел : 8 (495) 600 42 13
            </p>
            <p style="margin-left: 15px;">
              С 29.12.2020г. Абонентский отдел работает по новому адресу: г.Ногинск ул.Трудовая д.5
            </p>
          </div>
            
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 700px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              03.11.2020
            </p>
            <p style="margin-left: 15px;">
              График работы абонентского отдела в праздники:
            </p>
            <p style="margin-left: 15px;">
              3 ноября 2020 г. - с 8:30 до 18:00
            </p>
            <p style="margin-left: 15px;">
              4 ноября 2020 г. - ВЫХОДНОЙ
            </p>
            <p style="margin-left: 15px;">
              ТЕХНИЧЕСКАЯ ПОДДЕРЖКА РАБОТАЕТ КРУГЛОСУТОЧНО И БЕЗ ВЫХОДНЫХ.
            </p>
            <p style="margin-left: 15px;">
              Тел : 8 (495) 600 42 13
            </p>
            <p style="margin-left: 15px;">
              03.07.2020
            </p>
            <p style="margin-left: 15px;">
              Уважаемые Абоненты! В последнее время участились случаи использования методов недобросовестной конкуренции со стороны наших "коллег". Неустановленные лица делают поквартирный обход домов и распространяют ложную информацию о том, что у ООО «ФЛЕКС» есть проблемы с оборудованием в доме, и, якобы в связи с этим будут проводиться работы по модернизации Сети для повышения качества обслуживания. Одновременно с этим наши "коллеги" ненавязчиво предлагают заключить Договор или оставить заявку на подключение к «новой Сети». ООО «ФЛЕКС» уведомляет вас, что мы регулярно проводим работы по модернизации нашей Сети для улучшения качества предоставляемых Услуг, но при этом обход квартир не производим и свои услуги не навязываем. Сотрудники ООО «ФЛЕКС» могут прийти к вам только после вашего обращения для подключения к Сети или устранения неисправности по вашей заявке. По всем интересующим вас вопросам, вы можете обратиться по телефону нашего офиса 8(495) 600-42-11, 600- 42-13
            </p>
          </div>
            
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 600px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              11.06.2020
            </p>
            <p style="margin-left: 15px;">
              График работы абонентского отдела в праздники:
            </p>
            <p style="margin-left: 15px;">
              12 июня 2020г. - ВЫХОДНОЙ
            </p>
            <p style="margin-left: 15px;">
              24 июня 2020г. - ВЫХОДНОЙ
            </p>
            <p style="margin-left: 15px;">
              01 июля 2020г. - ВЫХОДНОЙ
            </p>
            <p style="margin-left: 15px;">
              ТЕХНИЧЕСКАЯ ПОДДЕРЖКА РАБОТАЕТ КРУГЛОСУТОЧНО И БЕЗ ВЫХОДНЫХ.
            </p>
            <p style="margin-left: 15px;">
              Тел : 8 (495) 600 42 13
            </p>
            <p style="margin-left: 15px;">
              20.08.2014
            </p>
            <p style="margin-left: 15px;">
              C 20 августа 2014 года абонентам компании "ФЛЕКС", подключенным по технологии домовой сети (с авторизацией на VPN сервере), доступна возможность оплаты услуг банковскими картами платежных систем VISA и MasterCard из "Личного Кабинета". Данный вариант оплаты доступен только для физических лиц.
            </p>
            <p style="margin-left: 15px;">
              11.11.2008
            </p>
            <p style="margin-left: 15px;">
              Уважаемые абоненты, подключенные по домовым сетям в г.Ногинск и г.Электросталь! С текущего момента услуга "реальный динамический IP адрес" является для вас базовой и предоставляется бесплатно.
            </p>
          </div>
            
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 175px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              17.06.2008
            </p>
            <p style="margin-left: 15px;">
              Уважаемые пользователи!
            </p>
            <p style="margin-left: 15px;">
              Убедительная просьба, проверяйте ваш баланс не реже 2х раз в месяц, и обращайте внимание на появление новых объявлений, уведомлений и просто информационных сообщений в вашем Личном Кабинете.
            </p>
          </div>
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: rgb(235, 235, 235); width: 75%; height: 135px; border: 1px solid rgb(145, 145, 145);">
            <p style="margin-left: 15px; font-weight: bolder;">
              01.01.1900
            </p>
            <p style="margin-left: 15px;">
              Уважаемые пользователи! Настоятельно рекомендуем вам периодически (не реже, чем раз в полгода) менять пароль для доступа в сеть.
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

import * as jwt from 'jsonwebtoken'

export default {
  name: 'PersonalAreaNews',
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
          this.clientRate = JSON.parse(result).client.rate
          this.personalAccountBonus = JSON.parse(result).client.personalAccountBonus
          this.balance = JSON.parse(result).client.balance
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
    Footer
  }

}
</script>
<style scoped>
  .aside {
    float: left;
    height: 5200px;
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
    height: 5200px;
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

  #newsBlock > div {
    margin: 15px;
  }

</style>