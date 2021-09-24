<template>
  <div>
    <Header :auth="false" :area="true" :minheight="275" :balance="balance" :bonus="personalAccountBonus" :clientId="clientId" :clientName="clientName" />
    <Aside />
    <div class="main">
      <div style="background: rgb(92,194,207); background: linear-gradient(90deg, rgba(92,194,207,1) 0%, rgba(255,255,255,1) 100%); align-self: center; width: 100%; color: rgb(255, 255, 255); font-size: 28px;">
        <p>Личный кабинет: Интернет</p>
      </div>
      <div style="text-align: left; margin-top: 25px; width:85%; display: flex; flex-direction: column; align-items: flex-start;">
        <p style="width:45%; font-weight: bolder;"> 
          Справочная система «Личного Кабинета»
        </p>
        <p style="cursor: pointer; width:45%; color: rgb(0, 0, 255);" @click="currentArticle = 1"> 
          Краткое описание разделов
        </p>
        <p style="cursor: pointer; width:45%; color: rgb(0, 0, 255);" @click="currentArticle = 2"> 
          Функциональные отличия с предыдущей версией
        </p>
        <p style="cursor: pointer; width:45%; color: rgb(0, 0, 255);" @click="currentArticle = 3"> 
          Возможные технические проблемы
        </p>
        <p style="cursor: pointer; width:45%; color: rgb(0, 0, 255);" @click="$router.push({ name: 'Support' })"> 
          Инструкции по настройкам доступа к локальной сети и к сети интернет
        </p>

        <div v-if="currentArticle === 1">
          <p style="font-weight: bolder;">
            Содержание:
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Новости и уведомления
          </p>
          <div style="margin-left: 45px;">
            <p style="color: rgb(0, 0, 255);">
              описание раздела
            </p>
          </div>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Лицевой счет
          </p>
          <div style="margin-left: 45px;">
            <p style="color: rgb(0, 0, 255);">
              описание раздела
            </p>
            <p style="color: rgb(0, 0, 255);">
              Статистика платежей
            </p>
            <p style="color: rgb(0, 0, 255);">
              Статистика списаний
            </p>
            <p style="color: rgb(0, 0, 255);">
              Обещанный платеж
            </p>
            <p style="color: rgb(0, 0, 255);">
              Активация карты
            </p>
            <p style="color: rgb(0, 0, 255);">
              Финансовые документы
            </p>
            <p style="color: rgb(0, 0, 255);">
              Оплата банковской картой
            </p>
            <p style="color: rgb(0, 0, 255);">
              Оплата услуг
            </p>
          </div>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Интернет и сеть
          </p>
          <div style="margin-left: 45px;">
            <p style="color: rgb(0, 0, 255);">
              описание раздела
            </p>
            <p style="color: rgb(0, 0, 255);">
              Данные по трафику
            </p>
            <p style="color: rgb(0, 0, 255);">
              Данные по соединениям
            </p>
            <p style="color: rgb(0, 0, 255);">
              Тарифный план
            </p>
            <p style="color: rgb(0, 0, 255);">
              Ускорение интернета
            </p>
            <p style="color: rgb(0, 0, 255);">
              Смена пароля на доступ в сеть
            </p>
            <p style="color: rgb(0, 0, 255);">
              Блокировка учетной записи
            </p>
          </div>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Дополнительные услуги
          </p>
          <div style="margin-left: 45px;">
            <p style="color: rgb(0, 0, 255);">
              описание раздела
            </p>
          </div>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Информация и помощь
          </p>
          <div style="margin-left: 45px;">
            <p style="color: rgb(0, 0, 255);">
              описание раздела
            </p>
            <p style="color: rgb(0, 0, 255);">
              Отслеживание заявок в тех.поддержку
            </p>
            <p style="color: rgb(0, 0, 255);">
              Смена пароля на доступ в «Личный Кабинет»
            </p>
            <p style="color: rgb(0, 0, 255);">
              Помощь по личному кабинету
            </p>
            <p style="color: rgb(0, 0, 255);">
              Настройки
            </p>
          </div>
        </div>
        <div v-else-if="currentArticle === 2">
          <p style="font-weight: bolder;">
            Содержание:
          </p>
          <div style="margin-left: 45px;">
            <p style="color: rgb(0, 0, 255);">
              Новые возможности
            </p>
            <p style="color: rgb(0, 0, 255);">
              Изменения в ранее существовавшем функционале
            </p>
            <p style="color: rgb(0, 0, 255);">
              Технические отличия
            </p>
          </div>
        </div>
        <div v-else-if="currentArticle === 3">
          <p style="font-weight: bolder;">
            Возможные технические проблемы
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            При попытке входа в «Личный Кабинет» выдает ошибку доступности базы данных
          </p>
          <p>
            Такая ситуация возникает в случае, если проводятся технические работы, или же возникла непредвиденная авария. Повторную попытку входа в «Личный Кабинет» не имеет смысла делать ранее чем через час после возникновения аварийной ситуации,
          </p>
          <p>
            Во время навигации по «Личному Кабинету» возникают ошибки отображения тех или иных данных
          </p>
          <p>
            Такая ситуация возникает в случае, если проводятся технические работы, или же возник непредвиденный сбой. Рекомендуется продолжить работу с «Личным Кабинетом» минут через 10-15.
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Во время использования интерактивного функционала (например управление услугами) ничего не происходит
          </p>
          <p>
            Для комфортной работы рекомендуется использовать свежие версии браузеров (Internet Explorer версии не ниже 9, Opera версии 11, FireFox версии 4 и т.д.). Обязательным условием возможности нормальной работы является поддержка JavaScript. Обязательно проверьте, чтобы у вас была включена поддержка JavaScript.
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Во время использования интерактивного функционала (например управление услугами) возникают различные ошибки
          </p>
          <p>
            Данная проблема может возникать по ряду причин: некорректная работа JavaScript в браузере, или же технические работы на сервере. Не исключены и непредвиденные ошибки. Первым делом проверьте на наличие обновлений для вашего браузера, и соответственности обновите его при необходимости. Если обновление браузера не решает проблем, попробуйте выйти (через пункт "Выход" в меню) и сново войти в «Личный Кабинет» (в этом случае будет произведен сброс cookies для сайта). В случае, если вышеперечисленные меры не решили возникшей проблемы, подробно опишите ее в письме на адрес web@flex.ru, по возможности приложите скриншот возникшей ошибки.
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            P.S.
          </p>
          <p>
            В случае возникновения любых других проблем при работе с «Личным Кабинетом», подробно опишите ситуацию в письме на адрес web@flex.ru. Проблема будет решена в индивидуальном порядке, а ее решение в последующем будет опубликовано в данной справочной системе.
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

import * as jwt from 'jsonwebtoken'
import Aside from '../../components/Aside.vue'

export default {
  name: 'PersonalAreaHelp',
  data(){
    return {
      _id: '',
      clientId: '411269',
      clientName: 'all-4973',
      clientRate: 'Супер u100M/399р',
      personalAccountBonus: 221.5,
      balance: 0,
      token: window.localStorage.getItem("isptoken"),
      currentArticle: 0
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

</style>