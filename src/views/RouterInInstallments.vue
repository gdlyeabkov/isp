<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a> > Магазин > Домашний роутер SNR-CPE-MD1.1</p>
          
          <div v-show="zoomToggler">
            <p ref="zoom" style="position: absolute; top: 185px; left: 405px;">
              <span id="zoomscope" ref="zoomscope" style="border-radius: 50%; opacity: 0.8; background-image: url('https://flex.ru/media/shop/thumbs/thumb.b317_1.jpg'); background-position: 0px 0px; background-size: contain; width: 250px; height: 250px;" class="material-icons">
                &nbsp;
              </span>   
            </p>
          </div>

          <p class="newsHeader">
            Домашний роутер SNR-CPE-MD1.1
          </p>
          <div>
            <div style="display: flex; height: 750px;">
              <div>
                <img @click="changeMask(1)" class="preview" style="display: block; margin: 5px 5px;" width="100px" src="https://flex.ru/media/shop/thumbs/thumb.snr-cpe-md1_1_1.jpg" alt="">
                <img @click="changeMask(2)" class="preview" style="display: block; margin: 5px 5px;" width="100px" src="https://flex.ru/media/shop/thumbs/thumb.snr-cpe-md1_1_2.jpg" alt="">
                <button style="margin-top: 75px;" class="w-75 btn btn-success">V</button>
              </div>
              
              <div ref="mainImg" @mouseenter="zoomHandler(true, $event)" @mouseleave="zoomHandler(false, $event)" @mousemove="zoomDrag($event)" style="background-size: 100% 100%; background-image:url('https://flex.ru/media/shop/thumbs/thumb.snr-cpe-md1_1_1.jpg'); margin: 0px 5px; width:65%; height:65%;">

              </div>
              
              <div>
                <div style="display: flex; justify-content: space-around;">
                  <div style="color: rgb(0, 175, 0);">
                    <p style="font-weight: bolder;">
                      Рассрочка*
                    </p>
                    <p style="font-weight: bolder; font-size: 26px;">
                      90Ք
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
                      2000Ք
                    </p>
                    <p style="font-weight: bolder;">
                      (единоразово)
                    </p>
                  </div>
                </div>
                <p>
                  Важно! Роутер SNR-CPE-MD1.1 возможно получить в рассрочку.
                </p>
                <p>
                  Рассрочка роутера осуществляется при подключении любого тарифного плана. Предлагаем три варианта рассрочки роутера:
                </p>
                <p>
                  «На связи +»
                </p>
                <p>
                  При оплате первого взноса 920 рублей, ежемесячно (в течении 12 месяцев), с лицевого счёта абонента будет списываться 90 рублей в счёт погашения рассрочки.
                </p>
                <p>
                  «На связи»
                  При оплате первого взноса 690 рублей, ежемесячно (в течении 12 месяцев), с лицевого счёта абонента будет списываться 109 рублей в счёт погашения рассрочки.
                </p>
                <p>
                  «На связи 2»
                </p>
                <p>
                  При оплате первого взноса 1500 рублей, в течении 2 месяцев, с лицевого счёта абонента будет списываться 250 рублей в месяц в счёт погашения рассрочки.
                </p>
                <p style="font-size: 12px;">
                  В случае досрочного расторжения договора абонент обязан вернуть роутер, либо возместить его полную стоимость с учётом выплаченной суммы.
                </p>
                <p style="font-size: 12px;">
                  при утрате или повреждении оборудования абонент обязан возместить его полную стоимость с учётом выплаченной суммы.
                </p>
                <p>
                  Звоните 8(495)600-42-13 и заказывайте роутер в рассрочку
                </p>
              </div>
            </div>
            <p class="newsHeader">
              Характеристики:
            </p>
            <p>
              Частотный диапазон Wi-Fi, ГГц	
            </p>
            <p>
              2.4
              5
            </p>
            <p>
              Поддержка MIMO, в диапазоне 2.4ГГц	
            </p>
            <p>
              2x2
            </p>
            <p>
              Поддержка MIMO, в диапазоне 5ГГц	
            </p>
            <p>
              Нет
            </p>
            <p>
              Портов LAN	
            </p>
            <p>
              4
            </p>
            <p>
              Портов WAN	
            </p>
            <p>
              1
              802.11b
              802.11g
            </p>
            <p>
              Стандарты Wi-Fi IEEE 802.11	
            </p>
            <p>
              802.11a
              802.11n (Wi-Fi 4)
              802.11ac (Wi-Fi 5
            </p>
            <p>
              Скорость портов LAN	
            </p>
            <p>
              100 Мбит/с
            </p>
            <p>
              Скорость портов WAN	
            </p>
            <p>
              100 Мбит/с
            </p>
            <p>
              Функция репитера
            </p>
            <p>
              Да
            </p>
            <p>
              Wireless WAN
            </p>
            <p>
              Да
              Web
            </p>
            <p>
              Управление
            </p>
            <p>
              SSH
              TR-069
            </p>
            <p>
              Порт USB
            </p>
            <p>
              Нет
            </p>
            <p>
              Вес, кг	
            </p>
            <p>
              0,232
            </p>
            <p>
              Габаритные размеры, мм	
            </p>
            <p>
              187x143x33мм
            </p>
            <p>
              Источник питания	
            </p>
            <p>
              12В DC, 1A
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
      zoomToggler: false,
      mask: 'https://flex.ru/media/shop/thumbs/thumb.snr-cpe-md1_1_1.jpg'
    }
  },
  methods: {
    changeMask(source){
      if(source === 1) {
        this.mask = "https://flex.ru/media/shop/thumbs/thumb.snr-cpe-md1_1_1.jpg"
        this.$refs.mainImg.style.backgroundImage = "url('https://flex.ru/media/shop/thumbs/thumb.snr-cpe-md1_1_1.jpg')"
      } else if(source === 2) {
        this.mask = "https://flex.ru/media/shop/thumbs/thumb.snr-cpe-md1_1_2.jpg"
        this.$refs.mainImg.style.backgroundImage = "url('https://flex.ru/media/shop/thumbs/thumb.snr-cpe-md1_1_2.jpg')"
      }
    },
    zoomHandler(zoomValue, event){
      this.zoomToggler = zoomValue
      if(!this.zoomToggler){
        event.target.style.cursor = "default"
      } else if(this.zoomToggler){
        // event.target.style.cursor = "crosshair"
        event.target.style.cursor = "none"
        // setTimeout(() => {
          // this.$refs.zoomscope.style.backgroundImage = `url('${this.mask}');`
          this.$refs.zoomscope.style = `
            border-radius: 50%;
            opacity: 0.8;
            background-image: url('${this.mask}');
            background-position: 15px 0px;
            background-size: 250% 250%;
            width: 250px;
            height: 250px;
          `
        // }, 3000)
        console.log(`this.mask: url('${this.mask}');`)
      }
    },
    zoomDrag(event){
      this.$refs.zoom.style = `
        position: absolute;
        top: ${event.clientY}px;
        left: ${event.clientX}px;
      `
      this.$refs.zoomscope.style.backgroundPosition = `
        ${event.clientX}px ${event.clientY}px
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
    height: 3000px;
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
    height: 3000px;
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