<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a>> Смотрёшка SB-317</p>
          <p class="newsHeader">
            Медиаплеер Смотрёшка SB-317
          </p>
          <div>
            <p>
              Рассрочка*
              150₽
              (в месяц)
              Выкуп
              3700₽
              (единоразово)
              В полную стоимость приставки входят: Смотрёшка SB-317, доставка, подключение и настройка медиаплеера у покупателя.

              Важно! медиаплеер Смотрёшка SB-317 возможно получить в рассрочку.

              Рассрочка роутера осуществляется при подключении любого тарифного плана. Предлагаем три варианта рассрочки медиаплеера:

              «В курсе супер+»
              При оплате первого взноса 1900 рублей, ежемесячно (в течении 12 месяцев), с лицевого счёта абонента будет списываться 150 рублей в счёт погашения рассрочки.

              «В курсе супер»
              При оплате первого взноса 1300 рублей, ежемесячно (в течении 12 месяцев), с лицевого счёта абонента будет списываться 200 рублей в счёт погашения рассрочки.

              «В курсе супер 2»
              При оплате первого взноса 2200 рублей, в течении 2 месяцев, с лицевого счёта абонента будет списываться по 750 рублей в счёт погашения рассрочки.

              В случае досрочного расторжения договора абонент обязан вернуть медиаплеер, либо возместить его полную стоимость с учётом выплаченной суммы.
              при утрате или повреждении оборудования абонент обязан возместить его полную стоимость с учётом выплаченной суммы.

              Звоните 8(495)600-42-13 и заказывайте медиаплеер в рассрочку!

              Характеристики:
              Комплект: устройство, блок питания, пульт ДУ, 2 батарейки для пульта, шнур HDMI, кабель для подключения к роутеру (RJ-45)

              Функции
              Взаимодействие с носителями
              Воспроизведение
              Поддерживаемые форматы: 
              AVI, FLAC, AAC/eAAC, MKV, WAV, WMA, MPEG-1, MPEG-2, MPEG4, MP3, Real Audio, AC3, MPEG-4 H.264, MOV, MP4, MPG, FLV, TS, TP, 3GP, WMV, JPEG, PNG, BMP, OGG
              Особенности: 
              Catch Up (вслед за эфиром), Обновление ПО, Функция TimeShift, Электронная программа передач (EPG), Таймер отключения, Поддержка IPTV, Поддержка субтитров
              Заводские данные
              Декодеры
              Dolby Digital Plus
              Интерфейсы и разъемы
              Беспроводные интерфейсы
              Bluetooth, Wi-Fi
              Интерфейсы
              HDMI, USB 2.0, RJ-45 Ethernet
              Поддерживаемые карты памяти
              SD
              Количество разъемов USB
              2
              Количество разъемов HDMI
              1
              Скорость Ethernet
              10/100/1000 Gigabit Ethernet
              Основные
              Операционная система
              Android
              Макс. поддерживаемое разрешение
              3840x2160 4K UHD
              Количество встроенной памяти, ГБ
              8
              Оперативная память, МБ
              2048
              Потребляемая мощность, Вт
              5
              Пульт ДУ в комплекте
              Да
              Версия Android
              Android 7.x
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