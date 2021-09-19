<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a> > Магазин > Домашний роутер SNR-CPE-MD1.1</p>
          <p class="newsHeader">
            Домашний роутер SNR-CPE-MD1.1
          </p>
          <div>
            <p>
              Рассрочка*
              90₽
              (в месяц)
              Выкуп
              2000₽
              (единоразово)
              Важно! Роутер SNR-CPE-MD1.1 возможно получить в рассрочку.

              Рассрочка роутера осуществляется при подключении любого тарифного плана. Предлагаем три варианта рассрочки роутера:

              «На связи +»
              При оплате первого взноса 920 рублей, ежемесячно (в течении 12 месяцев), с лицевого счёта абонента будет списываться 90 рублей в счёт погашения рассрочки.

              «На связи»
              При оплате первого взноса 690 рублей, ежемесячно (в течении 12 месяцев), с лицевого счёта абонента будет списываться 109 рублей в счёт погашения рассрочки.

              «На связи 2»
              При оплате первого взноса 1500 рублей, в течении 2 месяцев, с лицевого счёта абонента будет списываться 250 рублей в месяц в счёт погашения рассрочки.

              В случае досрочного расторжения договора абонент обязан вернуть роутер, либо возместить его полную стоимость с учётом выплаченной суммы.
              при утрате или повреждении оборудования абонент обязан возместить его полную стоимость с учётом выплаченной суммы.

              Звоните 8(495)600-42-13 и заказывайте роутер в рассрочку!

              Характеристики:
              Частотный диапазон Wi-Fi, ГГц	2.4
              5
              Поддержка MIMO, в диапазоне 2.4ГГц	2x2
              Поддержка MIMO, в диапазоне 5ГГц	Нет
              Портов LAN	4
              Портов WAN	1
              Стандарты Wi-Fi IEEE 802.11	802.11b
              802.11g
              802.11a
              802.11n (Wi-Fi 4)
              802.11ac (Wi-Fi 5
              Скорость портов LAN	100 Мбит/с
              Скорость портов WAN	100 Мбит/с
              Функция репитера	Да
              Wireless WAN	Да
              Управление	Web
              SSH
              TR-069
              Порт USB	Нет
              Вес, кг	0,232
              Габаритные размеры, мм	187x143x33мм
              Источник питания	12В DC, 1A
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