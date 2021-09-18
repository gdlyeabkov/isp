<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="width: 100%; background-color: rgb(35, 35, 35); display: flex; justify-content: flex-start;">
        <div style="width: 65%; background-color: rgb(35, 35, 35); display: flex; justify-content: space-around; margin-left: 75px;">
          <p @mouseenter="drawSubMenu(1)" @mouseout="drawSubMenu(1)" class="subHeaderItem" style="color: rgb(255, 255, 255); font-size: 18px; cursor: pointer;">
            Интернет
          </p>
          <p  @mouseenter="drawSubMenu(2)" @mouseout="drawSubMenu(2)" style="color: rgb(255, 255, 255); font-size: 18px; cursor: pointer;">
            Телевидение
          </p>
          <p  @mouseenter="drawSubMenu(3)" @mouseout="drawSubMenu(3)" style="color: rgb(255, 255, 255); font-size: 18px; cursor: pointer;">
            Телефония
          </p>
          <p  @mouseenter="drawSubMenu(4)" @mouseout="drawSubMenu(4)" style="color: rgb(255, 255, 255); font-size: 18px; cursor: pointer;">
            Домофоны
          </p>
        </div>
        
        <div v-if="subMenuOne" style="width: 285px; min-height: 250px; border: 1px solid red; background-color: rgb(200, 200, 200); position: absolute; top: 115px; left: 200px; z-index: 10;">
          <p>Подключённые дома</p>
          <p>Тарифы для квартиры и дома</p>
          <p>Тарифы индивидуальный радиоканал</p>
          <p>Заявка на подключение</p>
          <p>Способы оплаты</p>
          <p>Настройки компьютера или роутера</p>
          <p>Турбокнопка</p>
          <p>Временная блокировка</p>
          <p>Наши партнёры</p>
          <p>Регламент технической поддержки</p>
          <p>Гостевая книга</p>
          <p>Публичная оферта</p>
          <p>Роутер в рассрочку</p>
        </div>
        <div v-if="subMenuTwo" style="width: 255px; height: 250px; border: 1px solid red; background-color: rgb(200, 200, 200); position: absolute; top: 115px; left: 455px; z-index: 11;">
          <p>Интерактивное телевидение "Смотрёшка"</p>
          <p>Системы коллективного приёма</p>
          <p>Медиаплеер для "Смотрёшки"</p>
        </div>
        <div v-if="subMenuThree" style="width: 225px; height: 250px; border: 1px solid red; background-color: rgb(200, 200, 200); position: absolute; top: 115px; left: 655px; z-index: 12;">
          <p>Тарифы на телефонную связь</p>
          <p>Заявка на подключение</p>
          <p>Способы оплаты</p>
        </div>
        <div v-if="subMenuFour" style="width: 285px; height: 250px; border: 1px solid red; background-color: rgb(200, 200, 200); position: absolute; top: 115px; left: 845px; z-index: 13;">
          <p>"УМНЫЙ ДОМОФОН"</p>
          <p>ДОМОФОННЫЕ СИСТЕМЫ</p>
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
    drawSubMenu(idx){
      console.log(`idx: ${idx}`);
      if(idx === 1){
        this.subMenuOne = !this.subMenuOne
      } else if(idx === 2){
        this.subMenuTwo = !this.subMenuTwo
      } else if(idx === 3){
        this.subMenuThree = !this.subMenuThree
      } else if(idx === 4){
        this.subMenuFour = !this.subMenuFour
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

</style>