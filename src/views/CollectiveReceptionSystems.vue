<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a> > Телевидение > Системы коллективного приема</p>
          <p class="newsHeader">
            Системы коллективного приема
          </p>
          <div>
            <p>
              Услуга технического обслуживания системы коллективного приема телевидения оказывается физическим лицам. Адреса, где возможно воспользоваться данной услугой, уточняйте у операторов по телефону.
              <p class="newsHeader">
                Тарифы
              </p>
              Разовые платежи при подключении к системе коллективного приема телевидения:

              Единовременный платеж за первичное подключение квартиры к уже существующей абонентской распределительной сети кабельного телевидения

              1 точка

              350 руб.

              Единовременный платеж за за первичное подключение квартиры с прокладкой кабеля от слаботочного шкафа до квартиры, включая кабель до 20м, после 20м = 25 рублей за м.

              1 точка

              1150 руб.

              Периодические платежи:


              Ежемесячная абонентская плата	
              от 50 руб./мес.*

              *- сумма ежемесячного платежа зависит от адреса подключения, точную стоимость  уточняйте в абонентском отделе

              Стоимость дополнительных услуг:


              № п/п	
              Наименование работ

              Прим.

              Стоимость, руб.

              1

              Прокладка кабеля от слаботочного шкафа до квартиры, включая кабель до 20м, после 20м = 25 рублей за м.

              1 точка

              800

              2

              Настройка одного телевизионного приемника в автоматическом режиме

              при первичном подключении

              0

              3

              Выезд к абоненту для диагностики внутриквартирной разводки (измерение сигналов на абонентском отводе в слаботочном шкафу и на входе на ТВ приёмнике) с прокладкой проверочного кабеля и демонстрацией качества изображения на ТВ приёмнике.

              

              500

              4

              Подключение ответвителя (ТВ делителя) на 2,3 устройства (без стоимости оборудования)

              без крепления к стене

              150

              5

              Установка или замена штекера на абонентском кабеле без стоимости штекера

              1 шт.

              30

              6

              Проверка 1-й ТВ-розетки

              1 шт.

              150

              7

              Монтаж F-разъема, разъема типа "бочка"

              1 шт.

              30

              8

              Сверление отверстий в стене толщиной до 300 мм, d=8-10 мм для ввода кабеля в квартиру

              1 шт.

              250

              9

              Сверление отверстий в стене толщиной от 300 мм, d=10-12 мм для ввода кабеля в квартиру

              1 шт.

              400

              10

              Настройка ТВ ресивера ( Бесплатно при первичной установке )

              1 шт.

              250

              Стоимость расходных материалов при монтаже (подключении) к системе коллективного приема телевидения:


              № п/п	
              Вид материалов или оборудования

              Прим.

              Стоимость, руб.

              1

              Телевизионный кабель типа RG-6

              за 1м

              25

              2

              F-разъем для телевизионного кабеля RG-6 (наконечник на конец кабеля)

              за шт.

              30

              3

              Разъем-переходник F818 типа "бочка" (для соединения кусков кабеля)

              за шт.

              30

              4

              Штекер для F-разъема "папа" или "мама" (для подключения кабеля в розетку или разъем на телевизоре)

              за шт.

              30

              5

              Сплиттер (делитель) на 2 телевизора

              за шт.

              200

              6

              Сплиттер (делитель) на 3 телевизора

              за шт.

              250

              7

              ТВ ресивер

              за шт.

              1150


              Стоимость ежемесячного обслуживания домофонных систем и систем коллективного приема телевидения (СКПТ) по следующим адресам:
              Адрес оказания услуг

              Услуга ДМФ/СКПТ

              Стоимость с 01.07.21

              1

              Комсомольская 22А

              ДМФ   

              50

              СКПТ  

              50

              2

              Комсомольская 20Б

              ДМФ    

              50

              СКПТ   

              130

              3

              Комсомольская, д.10

              ДМФ     

              65

              4

              Академика Фортова, д.1

              ДМФ     

              55

              СКПТ    

              55

              5

              1-я Ревсобраний, дома. 6А, 6Б

              ДМФ      

              50

              СКПТ    

              60

              6

              Юбилейная, д.16А

              ДМФ      

              55

              СКПТ     

              55

              7

              Социалистическая, д. 3

              ДМФ+Видео    

              95

              8

              Московская ул. 1 кв.1-20

              ДМФ       

              50

              9

              28 июня, 9А

              ДМФ+Видео

              95

              10

              Самодеятельная д.2В, корп.3, 4

              СКПТ  

              130

              ДМФ       

              55

              11

              г.п. Обухово, ул.Энтузиастов, д.5

              ДМФ       

              50

              СКПТ

              50

              12

              Щемилово Орлова ул. 2,4, 6, 8, 10, 26,                                                      мкр-рн Новое бисерово-2 - 1-17

              СКПТ

              60

              13

              Шевченко, 1, 5 подъезд, квартиры 257-320

              ДМФ

              50

              15

              Кирова, 21- 3,4 подъезды, квартиры 193-272

              ДМФ

              50

              16

              Чехова, д.4

              СКПТ

              60

              17

              Чехова, д.9

              ДМФ

              50

              СКПТ

              50

              18

              ул.Новая, д.6

              ДМФ

              55

              видеоДМФ

              60

              19

              60 Лет Победы, д.10

              ДМФ  

              50

              СКПТ 

              50

              20

              60 Лет Победы, д.12; Ялагина 13, 13А, 13Б

              СКПТ

              50

              21

              Спортивная, д.26, 26А

              ДМФ 

              50

              22

              Лесная, д.27

              ДМФ 

              50

              23

              ул.Ленина, д.08

              ДМФ

              55

              СКПТ 

              55

              24

              ул.Ленина, д.08А

              ДМФ

              50

              25

              ул. Ногинское ш. 36к4

              ДМФ

              60

              СКПТ

              55

              26

              ул. Захарченко, д. 8, 10

              СКПТ

              70

              27

              Федурново,«МАРЗ», дома 8, 9, 10

              ДМФ

              50

              28

              Черное, ул. Агрогородок, дома: 7, 18, 19, 20, 32

              СКПТ

              50

              29

              Черное, ул. Агрогородок, д. 7

              ДМФ 

              50


              Услуга технического обслуживания системы коллективного приема телевидения оказывается ООО «ФлексКомм» (ГК «ФЛЕКС»)
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