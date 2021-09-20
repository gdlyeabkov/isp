<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a>> Смотрёшка SB-317</p>
          <div v-if="zoomToggler">
            <p ref="zoom" style="position: absolute; top: 185px; left: 405px;">
              <span style="font-size: 165px;" class="material-icons">
                search
              </span>
            </p>
          </div>
          <p class="newsHeader">
            Медиаплеер Смотрёшка SB-317
          </p>
          <div>
            <div style="display: flex; height: 1500px;">
              <div>
                <img class="preview" style="display: block; margin: 5px 5px;" width="100px" src="https://flex.ru/media/shop/thumbs/thumb.b317_1.jpg" alt="">
                <img class="preview" style="display: block; margin: 5px 5px;" width="100px" src="https://flex.ru/media/shop/thumbs/thumb.b317_2.jpg" alt="">
                <img class="preview" style="display: block; margin: 5px 5px;" width="100px" src="https://flex.ru/media/shop/thumbs/thumb.b317_3.jpg" alt="">
                
                <button style="margin-top: 75px;" class="w-75 btn btn-success">V</button>
              </div>
              
              <img @mouseenter="zoomHandler($event, true)" @mouseleave="zoomHandler($event, false)" @mousemove="zoomDrag($event)" style="margin: 0px 5px;" width="35%" height="35%" src="https://flex.ru/media/shop/thumbs/thumb.b317_1.jpg" alt="">
              <div>
                <div style="display: flex; justify-content: space-around;">
                  <div style="color: rgb(0, 175, 0);">
                    <p style="font-weight: bolder;">
                      Рассрочка*
                    </p>
                    <p style="font-weight: bolder; font-size: 26px;">
                      150Ք
                    </p>
                    <p style="font-weight: bolder;">
                      (в месяц)
                    </p>
                  </div>
                  <div>
                    <p style="font-weight: bolder;">
                      Выкуп
                    </p>
                    <p style="font-weight: bolder; font-size: 26px;">
                      3700Ք
                    </p>
                    <p style="font-weight: bolder;">
                      (единоразово)
                    </p>
                  </div>
                </div>
                <p>
                  В полную стоимость приставки входят: Смотрёшка SB-317, доставка, подключение и настройка медиаплеера у покупателя.
                </p>
                <p>
                  Важно! медиаплеер Смотрёшка SB-317 возможно получить в рассрочку.
                </p>
                <p>
                  Рассрочка роутера осуществляется при подключении любого тарифного плана. Предлагаем три варианта рассрочки медиаплеера:
                </p>
                <p>
                  «В курсе супер+»
                </p>
                <p>
                  При оплате первого взноса 1900 рублей, ежемесячно (в течении 12 месяцев), с лицевого счёта абонента будет списываться 150 рублей в счёт погашения рассрочки.
                </p>
                <p>
                  «В курсе супер»
                </p>
                <p>
                  При оплате первого взноса 1300 рублей, ежемесячно (в течении 12 месяцев), с лицевого счёта абонента будет списываться 200 рублей в счёт погашения рассрочки.
                </p>
                <p>
                  «В курсе супер 2»
                </p>
                <p>
                  При оплате первого взноса 2200 рублей, в течении 2 месяцев, с лицевого счёта абонента будет списываться по 750 рублей в счёт погашения рассрочки.
                </p>
                <p style="font-size: 12px;">
                  В случае досрочного расторжения договора абонент обязан вернуть медиаплеер, либо возместить его полную стоимость с учётом выплаченной суммы.
                  при утрате или повреждении оборудования абонент обязан возместить его полную стоимость с учётом выплаченной суммы.
                </p>
                <p>
                  Звоните 8(495)600-42-13 и заказывайте медиаплеер в рассрочку!
                </p>
              </div>
            </div>
            <p class="newsHeader">
              Характеристики:
            </p>
            <p>
              Комплект: устройство, блок питания, пульт ДУ, 2 батарейки для пульта, шнур HDMI, кабель для подключения к роутеру (RJ-45)
            </p>
            <p>
              Функции
            </p>
            <p>
              Взаимодействие с носителями
            </p>
            <p>
              Воспроизведение
            </p>
            <p>
              Поддерживаемые форматы: 
            </p>
            <p>
              AVI, FLAC, AAC/eAAC, MKV, WAV, WMA, MPEG-1, MPEG-2, MPEG4, MP3, Real Audio, AC3, MPEG-4 H.264, MOV, MP4, MPG, FLV, TS, TP, 3GP, WMV, JPEG, PNG, BMP, OGG
            </p>
            <p>
              Особенности: 
            </p>
            <p>
              Catch Up (вслед за эфиром), Обновление ПО, Функция TimeShift, Электронная программа передач (EPG), Таймер отключения, Поддержка IPTV, Поддержка субтитров
            </p>
            <p>
              Заводские данные
            </p>
            <p>
              Декодеры
            </p>
            <p>
              Dolby Digital Plus
            </p>
            <p>
              Интерфейсы и разъемы
            </p>
            <p>
              Беспроводные интерфейсы
            </p>
            <p>
              Bluetooth, Wi-Fi
            </p>
            <p>
              Интерфейсы
            </p>
            <p>
              HDMI, USB 2.0, RJ-45 Ethernet
            </p>
            <p>
              Поддерживаемые карты памяти
            </p>
            <p>
              SD
            </p>
            <p>
              Количество разъемов USB
            </p>
            <p>
              2
            </p>
            <p>
              Количество разъемов HDMI
            </p>
            <p>
              1
            </p>
            <p>
              Скорость Ethernet
            </p>
            <p>
              10/100/1000 Gigabit Ethernet
            </p>
            <p>
              Основные
            </p>
            <p>
              Операционная система
            </p>
            <p>
              Android
            </p>
            <p>
              Макс. поддерживаемое разрешение
            </p>
            <p>
              3840x2160 4K UHD
            </p>
            <p>
              Количество встроенной памяти, ГБ
            </p>
            <p>
              8
            </p>
            <p>
              Оперативная память, МБ
            </p>
            <p>
              2048
            </p>
            <p>
              Потребляемая мощность, Вт
            </p>
            <p>
              5
            </p>
            <p>
              Пульт ДУ в комплекте
            </p>
            <p>
              Да
            </p>
            <p>
              Версия Android
            </p>
            <p>
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
      zoomToggler: false
    }
  },
  methods: {
    zoomHandler(event, zoomValue){
      this.zoomToggler = zoomValue
      if(this.zoomToggler){
        event.target.style.cursor = "default"
      } else if(!this.zoomToggler){
        event.target.style.cursor = "crosshair"
      }
    },
    zoomDrag(event){
      // event.style.cursor = "crosshair"
      // let newTop = Number(this.$refs.zoom.style.top.split("px")[0]) + event.y 
      let newTop = this.$refs.zoom.style.top

      console.log(`перемещаю zoom: ${newTop}, ${event.y}`)
      this.$refs.zoom.style = `
        position: absolute;
        top: ${event.y}px;
        left: ${event.x}px;
      `
    }
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
    height: 2700px;
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
    height: 2700px;
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

  .preview:hover {
    border: 2px solid rgb(0, 105, 0);
  }

</style>