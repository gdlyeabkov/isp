<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a> > Интернет для дома > Тарифы > (для квартир)</p>
          <p class="newsHeader">
            <span style="display: block;">Тарифные планы</span>
            <b>(для квартир)</b>
          </p>
          <div>
            <p>
              Основные тарифные планы, с возможностью смены в личном кабинете
            <p>
            <div class="rates">
              <div :style="`background-color: rgb(255, 0, 0); box-sizing: border-box; padding: 15px 25px;`" class="rate">
                <p class="rateHeader">тв100М/ТВ+/499р</p>
                <div class="rateFeature">
                  <p class="rateSubheader">Скорость</p>
                  <p class="rateHeader">100</p>
                  <p class="rateSubheader">Мбит/сек</p>
                </div>
                <div class="rateFeature" v-if="true">
                  <p class="rateSubheader">Телевидение в пакете</p>
                  <p class="rateHeader">
                    <span class="material-icons">
                      tv
                    </span>
                  от 193 каналов + IVI</p>
                  <p class="rateSubheader">Список каналов</p>
                </div>
                <div class="rateFeature">
                  <p class="rateSubheader">Стоимость</p>
                  <p class="rateHeader">499</p>
                  <p class="rateSubheader">рублей в месяц</p>
                </div>
                <button class="btn btn-lg btn-primary btn-block plugInBtn" @click="plugIn()">ПОДКЛЮЧИТЬ</button>
              </div>
              <div :style="`background-color: rgb(255, 0, 0); box-sizing: border-box; padding: 15px 25px;`" class="rate">
                <p class="rateHeader">Супер u100M/399р</p>
                <div class="rateFeature">
                  <p class="rateSubheader">Скорость</p>
                  <p class="rateHeader">100</p>
                  <p class="rateSubheader">Мбит/сек</p>
                </div>
                <p class="rateSubheader">Телевидение в пакете</p>
                <p class="rateHeader">
                  Без ТВ
                <p class="rateSubheader">Список каналов</p>
                <div class="rateFeature">
                  <p class="rateSubheader">Стоимость</p>
                  <p class="rateHeader">399</p>
                  <p class="rateSubheader">рублей в месяц</p>
                </div>
                <button class="btn btn-lg btn-primary btn-block plugInBtn" @click="plugIn()">ПОДКЛЮЧИТЬ</button>
              </div>
              <div :style="`background-color: rgb(255, 0, 0); box-sizing: border-box; padding: 15px 25px;`" class="rate">
                <p class="rateHeader">тв50M/ТВ/390р</p>
                <div class="rateFeature">
                  <p class="rateSubheader">Скорость</p>
                  <p class="rateHeader">50</p>
                  <p class="rateSubheader">Мбит/сек</p>
                </div>
                <p class="rateSubheader">Телевидение в пакете</p>
                <p class="rateHeader">
                  <span class="material-icons">
                    tv
                  </span>
                    от 120 каналов
                    Список каналов
                </p>
                <p class="rateSubheader">Список каналов</p>
                <div class="rateFeature">
                  <p class="rateSubheader">Стоимость</p>
                  <p class="rateHeader">399</p>
                  <p class="rateSubheader">рублей в месяц</p>
                </div>
                <button class="btn btn-lg btn-primary btn-block plugInBtn" @click="plugIn()">ПОДКЛЮЧИТЬ</button>
              </div>
              <div :style="`background-color: rgb(255, 0, 0); box-sizing: border-box; padding: 15px 25px;`" class="rate">
                <p class="rateHeader">Комфорт u50M/300р</p>
                <div class="rateFeature">
                  <p class="rateSubheader">Скорость</p>
                  <p class="rateHeader">50</p>
                  <p class="rateSubheader">Мбит/сек</p>
                </div>
                  <p class="rateSubheader">Телевидение в пакете</p>
                  <p class="rateHeader">
                    Без ТВ  
                  </p>
                  <p class="rateSubheader">Подключается дополнительно</p>
                <div class="rateFeature">
                  <p class="rateSubheader">Стоимость</p>
                  <p class="rateHeader">300</p>
                  <p class="rateSubheader">рублей в месяц</p>
                </div>
                <button class="btn btn-lg btn-primary btn-block plugInBtn" @click="plugIn()">ПОДКЛЮЧИТЬ</button>
              </div>
              </div>
              <div style="display: flex;">
                <div :style="`background-color: rgb(255, 0, 0); box-sizing: border-box; padding: 15px 25px;`" class="rate">
                  <p class="rateHeader">Стандарт u25M/250р</p>
                  <div class="rateFeature">
                    <p class="rateSubheader">Скорость</p>
                    <p class="rateHeader">25</p>
                    <p class="rateSubheader">Мбит/сек</p>
                  </div>
                  <p class="rateSubheader">Телевидение в пакете</p>
                  <p class="rateHeader">
                    Без ТВ  
                  </p>
                  <p class="rateSubheader">Подключается дополнительно</p>
                <div class="rateFeature">
                  <p class="rateSubheader">Стоимость</p>
                  <p class="rateHeader">250</p>
                  <p class="rateSubheader">рублей в месяц</p>
                </div>
                <button class="btn btn-lg btn-primary btn-block plugInBtn" @click="plugIn()">ПОДКЛЮЧИТЬ</button>
              </div>
                <div :style="`background-color: rgb(255, 0, 0); box-sizing: border-box; padding: 15px 25px;`" class="rate">
                  <p class="rateHeader">Эконом u6M/200р</p>
                  <div class="rateFeature">
                    <p class="rateSubheader">Скорость</p>
                    <p class="rateHeader">6</p>
                    <p class="rateSubheader">Мбит/сек</p>
                  </div>
                  <p class="rateSubheader">Телевидение в пакете</p>
                  <p class="rateHeader">
                    Без ТВ  
                  </p>
                  <p class="rateSubheader">Подключается дополнительно</p>
                <div class="rateFeature">
                  <p class="rateSubheader">Стоимость</p>
                  <p class="rateHeader">200</p>
                  <p class="rateSubheader">рублей в месяц</p>
                </div>
                <button class="btn btn-lg btn-primary btn-block plugInBtn" @click="plugIn()">ПОДКЛЮЧИТЬ</button>
              </div>
            </div>
            <p class="newsHeader">
              Единовременные платежи
            </p>
            <div style="box-sizing: border-box; padding: 10px; border: 1px solid rgb(135, 135, 135); border-radius: 15px; background-color: rgb(255, 255, 255);">
              <p>
                Подключение к сети Интернет на тарифы до 150 Мбит/сек. (вся сумма зачисляется на лицевой счёт абонента за исключением домов, в разделе <span style="color: rgb(0, 0, 255);">Подключенные дома</span> отмеченные звездочкой *)	
              </p>
              <table style="background-color: #B564D4; text-align: center;">
                <tr>
                  <td style="border: 5px double rgb(255, 255, 255); width: 750px;">
                    Подключение к сети Интернет на высокоскоростные тарифы от 100 Мбит/сек.
                  </td>
                  <td style="border: 5px double rgb(255, 255, 255); width: 250px;">
                    2900
                  </td>
                </tr>
              </table>
                <p>Смена тарифного плана до 100 Мбит/сек.	бесплатно</p>
              <table style="background-color: #B564D4; text-align: center;">
                <tr>
                  <td style="border: 5px double rgb(255, 255, 255); width: 750px;">
                    Смена тарифного плана от 100 Мбит/сек.
                  </td>
                  <td style="border: 5px double rgb(255, 255, 255); width: 250px;">
                    1900
                  </td>
                </tr>
              </table>
              <p>Регистрация статического IP-адреса	420</p>
            </div>
            <p class="newsHeader">
              Периодические платежи
            </p>
            <table style="background-color: #B564D4; text-align: center;">
              <tr>
                <td style="border: 5px double rgb(255, 255, 255); width: 750px;">
                  Поддержка статического IP-адреса (ежемесячно руб.)
                </td>
                <td style="border: 5px double rgb(255, 255, 255); width: 250px;">
                  140
                </td>
              </tr>
            </table>
            
              
            <p class="newsHeader">
              Стоимость услуг
            </p>
            <table style="text-align: center;">
              <tr>
                <td colspan="2" style="font-weight: bolder; width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Наименование услуг
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Единовременная плата за подключение к сети Интернет на тарифы до 150 Мбит/сек.
                </td>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  <span style="font-weight: bolder;">1000 руб.</span> Вся сумма зачисляется на лицевой счёт абонента (за исключением домов, в разделе Подключенные дома отмеченные звездочкой *)
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Единовременная плата за подключение к сети Интернет на <span style="font-weight: bolder;">высокоскоростные</span> тарифы от 150Мбит/сек.
                </td>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  <span style="font-weight: bolder;">2900 руб.</span>  1000 рублей зачисляется на лицевой счёт абонента
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Стоимость работ при изменении тарифного плана до 150 Мбит/сек., единовременно
                </td>
                <td style="font-weight: bolder; width: 750px; border: 1px solid rgb(0, 0, 0);">
                  бесплатно
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Стоимость работ при изменении тарифного плана от 150 Мбит/сек., единовременно
                </td>
                <td style="font-weight: bolder; width: 750px; border: 1px solid rgb(0, 0, 0);">
                  1900 руб.
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Регистрация первого почтового ящика электронной почты	
                </td>
                <td style="font-weight: bolder; width: 750px; border: 1px solid rgb(0, 0, 0);">
                  бесплатно
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Поддержка первого почтового ящика объемом до 5мб (в домене flexuser.ru)                </td>
                <td style="font-weight: bolder; width: 750px; border: 1px solid rgb(0, 0, 0);">
                  бесплатно
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Регистрация каждого дополнительного почтового ящика	
                </td>
                <td style="font-weight: bolder; width: 750px; border: 1px solid rgb(0, 0, 0);">
                  84 руб.
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Поддержка первого почтового ящика объемом до 5мб (в домене noginsk.ru)
                </td>
                <td style="font-weight: bolder; width: 750px; border: 1px solid rgb(0, 0, 0);">
                  84 руб./мес
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Поддержка первого почтового ящика без ограничения объема (в домене flexuser.ru)
                </td>
                <td style="font-weight: bolder; width: 750px; border: 1px solid rgb(0, 0, 0);">
                  28 руб./мес
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Поддержка каждого дополнительного почтового ящика	
                </td>
                <td style="font-weight: bolder; width: 750px; border: 1px solid rgb(0, 0, 0);">
                  84 руб./мес
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Регистрация реального статического IP-адреса	
                </td>
                <td style="font-weight: bolder; width: 750px; border: 1px solid rgb(0, 0, 0);">
                  420 руб.
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Абонентская плата за реальный статический IP-адрес
                </td>
                <td style="font-weight: bolder; width: 750px; border: 1px solid rgb(0, 0, 0);">
                  140 руб./мес
                </td>
              </tr>
            </table>  
              
            <p class="newsHeader">
              Дополнительные услуги
            </p>
            <table style="text-align: center;">
              <tr>
                <td colspan="2" style="font-weight: bolder; width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Перечень дополнительных услуг
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Выезд специалиста на объект абонента	300 руб.
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  300 руб.
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Ремонтные работы
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  150 руб./час
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Изготовление дубликата договора по запросу абонента
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  90 руб.
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Перемонтаж оборудования при смене адреса нахождения клиентского оборудования (при наличии технической возможности)	
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  50% стоимости подключения
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Подключение дополнительного компьютера (при наличии технической возможности)	
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  50% стоимости подключения
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Повторная настройка программного обеспечения для доступа в ИНТЕРНЕТ (при установленных у абонента ОС и ПП фирмы Microsoft)
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  300 руб.
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Переоформление договора на другое лицо (смена собственника)
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  350 руб.
                </td>
              </tr>
            </table>
              
            <p class="newsHeader">
              Телематические услуги
            </p>
            <table style="text-align: center;">
              <tr>
                <td colspan="2" style="font-weight: bolder; width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Перечень телематических услуг
                </td>
              </tr>
              <tr>
                <td colspan="2" style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Организация домена в зоне .ru («ваше-имя».ru)
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Организация и поддержка в течение первого года
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  900 руб.
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Поддержка в течение последующих лет
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  900 руб./год
                </td>
              </tr>
              <tr>
                <td colspan="2" style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Поддержка первичной зоны DNS (для «ваше-имя».ru)
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Организация	
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  600 руб.
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Поддержка	
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  300 руб./мес.
                </td>
              </tr>
              <tr>
                <td colspan="2" style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Поддержка вторичной зоны DNS (для «ваше-имя».ru)
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Организация
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  бесплатно
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Поддержка	
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  бесплатно
                </td>
              </tr>
              <tr>
                <td colspan="2" style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Организация домена в зоне noginsk.ru, flex.ru (для «ваше-имя».*.ru)
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Организация
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  600 руб.
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Поддержка
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  60 руб./мес.
                </td>
              </tr>
              <tr>
                <td colspan="2" style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Использование электронной почты
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Регистрация почтового ящика	
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  84 руб.
                </td>
              </tr>
              <tr>
                <td style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Поддержка почтового ящика
                </td>
                <td style="font-weight: bolder; width: 350px; border: 1px solid rgb(0, 0, 0);">
                  84 руб./мес.
                </td>
              </tr>
              <tr>
                <td colspan="2" style="width: 750px; border: 1px solid rgb(0, 0, 0);">
                  Для абонентов ООО «ФЛЕКС» регистрация и поддержка первого почтового ящика осуществляется бесплатно
                </td>
              </tr>
            </table>
            <p>
              * Скорость указанная в тарифе, является максимально возможной. Реальная скорость скачивания может отличаться от указанной в тарифе.
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

export default {
  name: 'SmartIntercom',
  data(){
    return {
      
    }
  },
  methods: {
    
  },
  mounted(){
    fetch(`http://localhost:4000/home/`, {
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
      this.news = JSON.parse(result).news
    });
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

  .personalArea {
    cursor: pointer;
  }

</style>