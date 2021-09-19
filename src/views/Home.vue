<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="width: 100%; background-color: rgb(35, 35, 35); display: flex; justify-content: flex-start;">
        <div style="width: 65%; background-color: rgb(35, 35, 35); display: flex; justify-content: space-around; margin-left: 75px;">
          <p ref="subMenuOneWindow" @mouseenter="drawSubMenu(1, true)" style="color: rgb(255, 255, 255); font-size: 18px; cursor: pointer; height: 100%;">
            &nbsp;&nbsp;&nbsp;&nbsp;Интернет&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p ref="subMenuTwoWindow" @mouseenter="drawSubMenu(2, true)" style="color: rgb(255, 255, 255); font-size: 18px; cursor: pointer; height: 100%;">
            &nbsp;&nbsp;&nbsp;&nbsp;Телевидение&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p ref="subMenuThreeWindow" @mouseenter="drawSubMenu(3, true)" style="color: rgb(255, 255, 255); font-size: 18px; cursor: pointer; height: 100%;">
            &nbsp;&nbsp;&nbsp;&nbsp;Телефония&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p ref="subMenuFourWindow" @mouseenter="drawSubMenu(4, true)" style="color: rgb(255, 255, 255); font-size: 18px; cursor: pointer; height: 100%;">
            &nbsp;&nbsp;&nbsp;&nbsp;Домофоны&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </div>
        
        <div @mouseleave="drawSubMenu(1, false)" v-if="subMenuOne" style="width: 285px; min-height: 250px; border: 1px solid rgb(0, 0, 0); background-color: rgb(255, 255, 255); position: absolute; top: 115px; left: 304px; z-index: 10; border-top-style: none; border-radius: 0px 0px 10px 10px;">
          <p @click="toPage('ConnectedHouses')" class="subMenuItem">Подключённые дома</p>
          <p @click="toPage('TariffsForApartmentsAndHouses')" class="subMenuItem">Тарифы для квартиры и дома</p>
          <p @click="toPage('IndividualRadioChannelTariffs')" class="subMenuItem">Тарифы индивидуальный радиоканал</p>
          <p @click="toPage('ConnectionRequest')" class="subMenuItem">Заявка на подключение</p>
          <p @click="toPage('PaymentMethods')" class="subMenuItem">Способы оплаты</p>
          <p @click="toPage('ComputerOrRouterSettings')" class="subMenuItem">Настройки компьютера или роутера</p>
          <p @click="toPage('TurboButton')" class="subMenuItem">Турбокнопка</p>
          <p @click="toPage('TemporaryBlocking')" class="subMenuItem">Временная блокировка</p>
          <p @click="toPage('OurPartners')" class="subMenuItem">Наши партнёры</p>
          <p @click="toPage('TechnicalSupportRegulations')" class="subMenuItem">Регламент технической поддержки</p>
          <p @click="toPage('GuestBook')" class="subMenuItem">Гостевая книга</p>
          <p @click="toPage('PublicOffer')" class="subMenuItem">Публичная оферта</p>
          <p @click="toPage('RouterInInstallments')" class="subMenuItem">Роутер в рассрочку</p>
        </div>
        <div @mouseleave="drawSubMenu(2, false)" v-if="subMenuTwo" style="width: 255px; height: 250px; border: 1px solid rgb(0, 0, 0); background-color: rgb(255, 255, 255); position: absolute; top: 115px; left: 476px; z-index: 11; border-top-style: none; border-radius: 0px 0px 10px 10px;">
          <p @click="toPage('InteractiveTelevisionSmotryoshka')" class="subMenuItem">Интерактивное телевидение "Смотрёшка"</p>
          <p @click="toPage('CollectiveReceptionSystems')" class="subMenuItem">Системы коллективного приёма</p>
          <p @click="toPage('MediaPlayerForSmotryoshka')" class="subMenuItem">Медиаплеер для "Смотрёшки"</p>
        </div>
        <div @mouseleave="drawSubMenu(3, false)" v-if="subMenuThree" style="width: 225px; height: 250px; border: 1px solid rgb(0, 0, 0); background-color: rgb(255, 255, 255); position: absolute; top: 115px; left: 677px; z-index: 12; border-top-style: none; border-radius: 0px 0px 10px 10px;">
          <p @click="toPage('TelephoneTariffs')" class="subMenuItem">Тарифы на телефонную связь</p>
          <p @click="toPage('ConnectionRequestMobile')" class="subMenuItem">Заявка на подключение</p>
          <p @click="toPage('PaymentMethod')" class="subMenuItem">Способы оплаты</p>
        </div>
        <div @mouseleave="drawSubMenu(4, false)" v-if="subMenuFour" style="width: 285px; height: 250px; border: 1px solid rgb(0, 0, 0); background-color: rgb(255, 255, 255); position: absolute; top: 118px; left: 860px; z-index: 13; border-top-style: none; border-radius: 0px 0px 10px 10px;">
          <p @click="toPage('SmartIntercom')" class="subMenuItem">"УМНЫЙ ДОМОФОН"</p>
          <p @click="toPage('IntercomSystems')" class="subMenuItem">ДОМОФОННЫЕ СИСТЕМЫ</p>
        </div>

      </div>
      <div class="ads">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" style="background-image: url('https://www.malls.ru/upload/medialibrary/e92/tpu-shchelkovskiy.jpg'); background-size: cover; height: 250px;">
              <div class="carousel-caption d-none d-md-block">
                <h5>Открытие нового центра обслуживания абонентов.</h5>
                <p>Друзья открылся новый центр обслуживания абонентов.</p>
              </div>
            </div>
            <div class="carousel-item" style="background-image: url('https://cdn5.vedomosti.ru/crop/image/2016/61/1eq7nx/original-1tqr.jpg?height=609&width=1082'); background-size: cover; height: 250px;">
              <div class="carousel-caption d-none d-md-block">
                <h5>Множество онлайн кинотеатров в мобильном приложении.</h5>
                <p>Доступно бесплатно в Google Play и App Store.</p>
              </div>
            </div>
            <div class="carousel-item" style="background-image: url('https://moscow.shop.megafon.ru/images/goods/1058/105860_p_8_3.jpg'); background-size: cover; height: 250px;">
              <div class="carousel-caption d-none d-md-block">
                <h5>Роутер в рассрочку</h5>
                <p>50 руб. в месяц.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>      
      <div style="margin-top: 25px; width:100%;">
        <h1>Предлагаемые тарифы</h1>
        <div class="rates">
          
          <div v-for="(rate, rateIdx) in rates" :key="rate.name">
            <div :style="`background-color: ${colorsOfRates[rateIdx]}`" class="rate">
              <p class="rateHeader">{{ rate.name }}</p>
              <div class="rateFeature">
                <p class="rateSubheader">Скорость</p>
                <p class="rateHeader">{{ rate.speed }}</p>
                <p class="rateSubheader">Мбит/сек</p>
              </div>
              <div class="rateFeature" v-if="rate.tv">
                <p class="rateSubheader">Телевидение в пакете</p>
                <p class="rateHeader">
                  <span class="material-icons">
                    tv
                  </span>
                {{ rate.tvDesc }}</p>
                <p class="rateSubheader">Список каналов</p>
              </div>
              <div class="rateFeature">
                <p class="rateSubheader">Стоимость</p>
                <p class="rateHeader">{{ rate.cost }}</p>
                <p class="rateSubheader">рублей в месяц</p>
              </div>
              <button class="btn btn-lg btn-primary btn-block plugInBtn" @click="plugIn()">ПОДКЛЮЧИТЬ</button>
            </div>
          </div>

          <!-- здесь тарифы -->
          
        </div>
        <button class="btn btn-lg btn-danger btn-block otherRatesBtn">Прочие тарифы(дешевле или дороже)</button>
        <div class="news">
          <p class="newsHeader">
            <span class="material-icons">
              description
            </span>
            Новости
          </p>
          <!-- здесь новости -->
          <div v-for="newion in news.filter((newion, newsIdx) => newion.section.includes('news') && newsIdx <= 6)" :key="newion._id">
            <p><span class="newsItemHeader">{{ `${newion.date.toString().split('T')[0].split('-')[2]}-${newion.date.toString().split('T')[0].split('-')[1]}-${newion.date.toString().split('T')[0].split('-')[0]}` }}</span>{{ newion.name }}</p>
          </div>
          <p><span class="newsItemHeader">График работы абонентского отдела в праздники:</span></p>
          <div v-for="newion in news.filter((newion, newsIdx) => newion.section.includes('shedule') && newsIdx <= 6)" :key="newion._id" >
            <p><span class="newsItemHeader">{{ `${newion.date.toString().split('T')[0].split('-')[2]}-${newion.date.toString().split('T')[0].split('-')[1]}-${newion.date.toString().split('T')[0].split('-')[0]}` }}</span>{{ newion.name }}</p>
          </div>

          <p @click="$router.push({ name: 'News' })" style="display: flex;">
            <span style="cursor: pointer;" class="material-icons-outlined">
              arrow_circle_right
            </span>
            &nbsp;Далее на новости
          </p>
        </div>
        <div class="billboards">
          <div v-for="ad in ads" :key="ad._id">
            <img class="billboard" :src="ad.url" alt="">
          </div>
        </div>
        <div class="socialMedia">
          <a class="btn btn-primary socialMediaItem" style="background-color: #3b5998;" href="https://www.facebook.com/" role="button">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a class="btn btn-primary socialMediaItem" style="background-color: #3b5998;" href="https://vk.com" role="button">
            <i class="fab fa-vk"></i>
          </a>
          <a class="btn btn-primary socialMediaItem" style="background-color: #3b5998;" href="https://twitter.com/" role="button">
            <i class="fab fa-twitter"></i>
          </a>
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
  name: 'Home',
  data(){
    return {
      news: [],
      rates: [],
      ads: [],
      colorsOfRates: [
        "rgb(205, 215, 0);",
        "rgb(75, 75, 75);",
        "rgb(200, 50, 0);",
        "rgb(35, 35, 35);",
      ],
      subMenuOne: false,
      subMenuTwo: false,
      subMenuThree: false,
      subMenuFour: false
    }
  },
  methods: {
    toPage(pageName){
      this.$router.push({ name: pageName })
    },
    drawSubMenu(idx, subMenuToggler){
      if(idx === 1){
        this.subMenuOne = subMenuToggler
        if(this.subMenuOne) {
          this.$refs.subMenuOneWindow.style = `
            color: rgb(0, 0, 0);
            background-color: rgb(255, 255, 255);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `

          this.$refs.subMenuTwoWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
          this.$refs.subMenuThreeWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
          this.$refs.subMenuFourWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
          this.subMenuTwo = false;
          this.subMenuThree = false;
          this.subMenuFour = false;
        } else if(!this.subMenuOne) {
          this.$refs.subMenuOneWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
        }
      } else if(idx === 2){
        this.subMenuTwo = subMenuToggler
        if(this.subMenuTwo) {
          this.$refs.subMenuTwoWindow.style = `
            color: rgb(0, 0, 0);
            background-color: rgb(255, 255, 255);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `

          this.$refs.subMenuOneWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
          this.$refs.subMenuThreeWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
          this.$refs.subMenuFourWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
          this.subMenuOne = false;
          this.subMenuThree = false;
          this.subMenuFour = false;
        } else if(!this.subMenuTwo) {
          this.$refs.subMenuTwoWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
        }
      } else if(idx === 3){
        this.subMenuThree = subMenuToggler
        if(this.subMenuThree) {
          this.$refs.subMenuThreeWindow.style = `
            color: rgb(0, 0, 0);
            background-color: rgb(255, 255, 255);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `

          this.$refs.subMenuFourWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
          this.$refs.subMenuTwoWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
          this.$refs.subMenuOneWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
          this.subMenuOne = false;
          this.subMenuTwo = false;
          this.subMenuFour = false;
        } else if(!this.subMenuThree) {
          this.$refs.subMenuThreeWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
        }
      } else if(idx === 4){
        this.subMenuFour = subMenuToggler
        if(this.subMenuFour) {
          this.$refs.subMenuFourWindow.style = `
            color: rgb(0, 0, 0);
            background-color: rgb(255, 255, 255);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `

          this.$refs.subMenuOneWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
          this.$refs.subMenuTwoWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
          this.$refs.subMenuThreeWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
          this.subMenuOne = false;
          this.subMenuTwo = false;
          this.subMenuThree = false;

        } else if(!this.subMenuFour) {
          this.$refs.subMenuFourWindow.style = `
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 18px;
            cursor: pointer;
            height: 100%;
          `
        }
      }
    },
    plugIn(){

    },
    toNews(){
      this.$router.push({ name: 'News' })
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
      this.rates = JSON.parse(result).rates
      this.news = JSON.parse(result).news
      this.ads = JSON.parse(result).ads
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
    overflow-y: auto;
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
    margin-top: 15px;
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

  .subHeaderItem:hover {
    color: green;
  }

  .subMenuItem {
    cursor: pointer;
    padding: 2px 0px;
  }

  .subMenuItem:hover {
    background-color: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(0, 0, 0);
  }

</style>