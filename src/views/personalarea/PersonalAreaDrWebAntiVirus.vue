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
          Информационная защита средствами ПО Dr.WEB
        </p>
        <p>
          Внимание! Отключение услуги «антивирусной защиты Dr.Web» через управление услуги приведет к отмене действующих подписок, привязанных к данной услуге. Если вы хотите изменить количество активных подписок, вы можете добавить или удалить их через управление активными подписками. Актуальная стоимость действующей доп.услуги «антивирусной защиты Dr.Web» зависит от количества действующих подписок согласно тарифной сетке.
        </p>
        <p>
          Возможна подписка до 5 устройств (независимо от выбранных тарифов).
        </p>
        <p style="font-weight: bolder; width: 100%;">
          Тарифы на подписку на антивирус Dr.Web (c 01.10.2020)
        </p>
        <table>
          <tr style="font-weight: bolder; color: rgb(255, 255, 255); background-color: rgb(155, 0, 255)">
            <td rowspan="2" style="height: 45px; width: 175px; text-align: left; border: 1px solid rgb(175, 175, 175);">
              Антивирус Dr.Web Премиум	  
            </td>
            <td colspan="5" style="height: 45px; width: 95px; text-align: left; border: 1px solid rgb(175, 175, 175);">
              цена подписки (₽/мес.)
            </td>
          </tr>
          <tr style="background-color: rgb(155, 0, 255)">
            <td style="height: 45px; width: 95px; border: 1px solid rgb(175, 175, 175);">
              на 1 устройство	
            </td>
            <td style="height: 45px; width: 95px; border: 1px solid rgb(175, 175, 175);">
              на 2 устройства	
            </td>
            <td style="height: 45px; width: 95px; border: 1px solid rgb(175, 175, 175);">
              на 3 устройства	
            </td>
            <td style="height: 45px; width: 95px; border: 1px solid rgb(175, 175, 175);">
              на 4 устройства	
            </td>
            <td style="height: 45px; width: 95px; border: 1px solid rgb(175, 175, 175);">
              на 5 устройств
            </td>
          </tr>
          <tr>
            <td style="width: 175px; text-align: left; height: 45px; width: 95px; border: 1px solid rgb(175, 175, 175);">
              Антивирус Dr.Web Премиум	  
            </td>
            <td style="height: 45px; width: 95px; border: 1px solid rgb(175, 175, 175);">
              0
            </td>
            <td style="height: 45px; width: 95px; border: 1px solid rgb(175, 175, 175);">
              99
            </td>
            <td style="height: 45px; width: 95px; border: 1px solid rgb(175, 175, 175);">
              149
            </td>
            <td style="height: 45px; width: 95px; border: 1px solid rgb(175, 175, 175);">
              199
            </td>
            <td style="height: 45px; width: 95px; border: 1px solid rgb(175, 175, 175);">
              239            
            </td>
          </tr>
          <tr>
            <td style="width: 175px; text-align: left; border: 1px solid rgb(175, 175, 175);">
              Антивирус Dr.Web Премиум	  
            </td>
            <td style="border: 1px solid rgb(175, 175, 175);">
              49
            </td>
            <td style="border: 1px solid rgb(175, 175, 175);">
              98
            </td>
            <td style="border: 1px solid rgb(175, 175, 175);">
              147
            </td>
            <td style="border: 1px solid rgb(175, 175, 175);">
              196
            </td>
            <td style="border: 1px solid rgb(175, 175, 175);">
              295
            </td>
          </tr>
        </table>
        <div style="text-align: left;">
          <button class="m-1 w-25 btn btn-primary">
            Добавить подписку на Антивирус Dr.Web Мобильный
          </button>
          <button class="w-25 btn btn-primary">
            Добавить подписку на Антивирус Dr.Web Премиум
          </button>
        </div>
        <div style="text-align: left;">
          <div style="display: flex;">
            <img width="150px" height="150px" src="https://lk.flex.ru/img/drweb.logo.jpg" alt="">
            <div>
              <p>
                Суть услуги «Информационная защита средствами ПО Dr.WEB» заключается в предоставлении абонентам фирмы "ФЛЕКС" (далее Подписчикам) ограниченного временными рамками права использовать функции ПО Dr.Web для защиты их персональных компьютеров.
              </p>
              <br style="clear: both" />
              <p>
                Для работы антивирусного пакета требуется:
              </p>
              <p>
                процессор Intel Pentium II с частотой 400 МГц или выше;
              </p>
              <p>
                объем оперативной памяти не менее 32 МБ;
              </p>
              <p>
                свободное место на жестком диске не менее 108 МБ (8 МБ для исполняемых файлов, остальное для протоколов работы);
              </p>
              <p>
                ОС Windows 2000/XP/Vista/7/8; ОС Mac OS X 10.6 и выше
              </p>
              <p>
                компьютер должен иметь соединение с Интернет для обеспечения связи с сервером.
              </p>
            </div>
          </div>
          <p>
            Для подключения к услуге Подписчику необходимо последовательно выполнить следующие действия.
          </p>
          <p>
            Оформить подписку на услугу.
          </p>
          <p>
            Скачать инсталляционный пакет по вновь появившейся ссылке.
          </p>
          <p>
            Произвести запуск инсталляционного пакета и установку ПО "Dr.Web", следуя инструкциям по установке.
          </p>
          <p>
            Перегрузить компьютер и дождаться соединения с антивирусным сервером. Процесс подключения к услуге завершен.
          </p>
          <p>
            Инсталляционный пакет устанавливается на компьютере пользователя. Объем инсталляционного пакета составляет ~2МБ. В исполняемом файле находится уникальный идентификационный номер пользователя (UID), созданный сервером и хранящийся в его базе данных. После запуска инсталляционного файла устанавливается связь сервера с компьютером пользователя по протоколу TCP/IP и происходит идентификация новой станции. В случае успешной идентификации на компьютер пользователя с сервера закачивается основной антивирусный пакет, размер ~20МБ. Обновление и управление антивирусным пакетом производятся в соответствии с инструкциями, получаемыми с антивирусного сервера.
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