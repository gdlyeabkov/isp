<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a>> Домофоны > Техническое обслуживание домофонной системы</p>
          <p class="newsHeader">
            Техническое обслуживание домофонной системы
          </p>
          <div>
            <p>
              Услуга технического обслуживания домофонной системы оказывается физическим лицам. Адреса, где возможно воспользоваться данной услугой, уточняйте у операторов по телефону.

              Тарифы:
              Стоимость подключения домофонных систем для любого адреса:

              Тип услуги	
              Стоимость, руб.

              Подключение домофона (Трубка исполнителя, при наличии кабеля от слаботочного ящика до места установки аудио/видео устройства)

              1850

              Подключение домофона (трубка абонента, при наличии кабеля от слаботочного ящика до места установки аудио/видео устройства)

              1200

              Подключение видеодомофона (Видеопанель абонента. Обратите внимание : для питания монитора требуется 220V)

              2450

              Стоимость дополнительных работ по подключению к системе «домофон»:
              Тип услуги	
              Стоимость, руб.

              Стоимость мск*, мсц* ( При первичном подключении)

              1700

              Стоимость мск*, мсц* ( При замене неисправного )

              1250

              Протяжка кабеля от слаботочного шкафа до квартиры, Сверление отверстий в стене толщиной до 300 мм, d=8-10 мм для ввода кабеля в квартиру, установка устройства на стену.

              800

              Замена аудиотрубки после гарантийного срока или механических повреждений.

              1400

              Платный выезд для диагностики оборудования или доставка ключей

              500

              Установка вызывной панели (БЕЗ ПРОТЯЖКИ КАБЕЛЯ)

              1200

              Пусконаладочные работы вызывной панели ( НЕ первичная установка)

              500

              Стоимость одного ключа ( Без доставки)

              200

              Установка кабель-канала ( ЦЕНА ЗА М. включая кабель-канал)

              120

              Переоформление договора, повторное подключение

              350



              Стоимость ежемесячного обслуживания домофонных систем и систем коллективного приема телевидения (СКПТ) по следующим адресам:
              Адрес оказания услуг

              Услуга Домофон/СКПТ

              Стоимость с 01.07.21

              1

              Комсомольская 22А

              Домофон

              50

              СКПТ

              50

              2

              Комсомольская 20Б

              Домофон    

              50

              СКПТ   

              130

              3

              Комсомольская, д.10

              Домофон     

              65

              4

              Академика Фортова, д.1

              Домофон     

              55

              СКПТ    

              55

              5

              1-я Ревсобраний, дома. 6А, 6Б

              Домофон      

              50

              СКПТ    

              60

              6

              Юбилейная, д.16А

              Домофон      

              55

              СКПТ     

              55

              7

              Социалистическая, д. 3

              Домофон

              50

              Видеонаблюдение

              45

              8

              Московская ул. 1 кв.1-20

              Домофон       

              50

              9

              28 июня, 9А

              Домофон

              50

              Видеонаблюдение

              50

              10

              Самодеятельная д.2В, корп.3, 4

              СКПТ  

              130

              Домофон

              55

              11

              г.п. Обухово, ул.Энтузиастов, д.5

              Домофон       

              50

              СКПТ

              50

              12

              Щемилово Орлова ул. 2,4, 6, 8, 10, 26,                                                      мкр-рн Новое бисерово-2 - 1-17

              СКПТ

              60

              13

              Шевченко, 1, 5 подъезд, квартиры 257-320

              Домофон

              50

              15

              Кирова, 21- 3,4 подъезды, квартиры 193-272

              Домофон

              50

              16

              Чехова, д.4

              СКПТ

              60

              17

              Чехова, д.9

              Домофон

              50

              СКПТ

              50

              18

              ул.Новая, д.6

              Домофон

              55

              видеопанель

              60

              19

              60 Лет Победы, д.10

              Домофон  

              50

              СКПТ 

              50

              20

              60 Лет Победы, д.12; Ялагина 13, 13А, 13Б

              СКПТ

              50

              21

              Спортивная, д.26, 26А

              Домофон 

              50

              22

              Лесная, д.27

              Домофон 

              50

              23

              ул.Ленина, д.08

              Домофон

              55

              СКПТ 

              55

              24

              ул.Ленина, д.08А

              Домофон

              50

              25

              ул. Ногинское ш. 36к4

              Домофон

              60

              СКПТ

              55

              26

              ул. Захарченко, д. 8, 10

              СКПТ

              70

              27

              Федурново,«МАРЗ», дома 8, 9, 10

              Домофон

              50

              28

              Черное, ул. Агрогородок, дома: 7, 18, 19, 20, 32

              СКПТ

              50

              29

              Черное, ул. Агрогородок, д. 7

              Домофон 

              50

              Услуга технического обслуживания домофонных систем оказывается ООО «ФлексКомм» (ГК «ФЛЕКС»)
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