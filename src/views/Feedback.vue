<template>
  <div>
    <Header :auth="false" :area="false"/>
    <div class="aside">
      
    </div>
    <div class="main">
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
          <div style="background-color: rgb(205, 215, 0);" class="rate">
            <p class="rateHeader">тв100М/ТВ+/499р</p>
            <div class="rateFeature">
              <p class="rateSubheader">Скорость</p>
              <p class="rateHeader">100</p>
              <p class="rateSubheader">Мбит/сек</p>
            </div>
            <div class="rateFeature">
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
          <div style="background-color: rgb(75, 75, 75);" class="rate">
            <p class="rateHeader">Супер u100M/399р</p>
            <div class="rateFeature">
              <p class="rateSubheader">Скорость</p>
              <p class="rateHeader">100</p>
              <p class="rateSubheader">Мбит/сек</p>
            </div>
            <div class="rateFeature">
              <p class="rateSubheader">Телевидение в пакете</p>
              <p class="rateHeader">Без ТВ</p>
              <p class="rateSubheader">Подключается дополнительно</p>
            </div>
            <div class="rateFeature">
              <p class="rateSubheader">Стоимость</p>
              <p class="rateHeader">399</p>
              <p class="rateSubheader">рублей в месяц</p>
            </div>
            <button class="btn btn-lg btn-primary btn-block plugInBtn" @click="plugIn()">ПОДКЛЮЧИТЬ</button>
          </div>
          <div style="background-color: rgb(200, 50, 0);" class="rate">
            <p class="rateHeader">тв50M/ТВ/390р</p>
            <div class="rateFeature">
              <p class="rateSubheader">Скорость</p>
              <p class="rateHeader">50</p>
              <p class="rateSubheader">Мбит/сек</p>
            </div>
            <div class="rateFeature">
              <p class="rateSubheader">Телевидение в пакете</p>
              <p class="rateHeader">
                <span class="material-icons">
                  tv
                </span>
              от 120 каналов</p>
              <p class="rateSubheader">Список каналов</p>
            </div>
            <div class="rateFeature">
              <p class="rateSubheader">Стоимость</p>
              <p class="rateHeader">390</p>
              <p class="rateSubheader">рублей в месяц</p>
            </div>
            <button class="btn btn-lg btn-primary btn-block plugInBtn" @click="plugIn()">ПОДКЛЮЧИТЬ</button>
          </div>
          <div style="background-color: rgb(35, 35, 35);" class="rate">
            <p class="rateHeader">Комфорт u50M/300р</p>
            <div class="rateFeature">
              <p class="rateSubheader">Скорость</p>
              <p class="rateHeader">50</p>
              <p class="rateSubheader">Мбит/сек</p>
            </div>
            <div class="rateFeature">
              <p class="rateSubheader">Телевидение в пакете</p>
              <p class="rateHeader">Без ТВ</p>
              <p class="rateSubheader">Подключается дополнительно</p>
            </div>
            <div class="rateFeature">
              <p class="rateSubheader">Стоимость</p>
              <p class="rateHeader">300</p>
              <p class="rateSubheader">рублей в месяц</p>
            </div>
            <button class="btn btn-lg btn-primary btn-block plugInBtn" @click="plugIn()">ПОДКЛЮЧИТЬ</button>
          </div>
        </div>
        <button class="btn btn-lg btn-danger btn-block otherRatesBtn">Прочие тарифы(дешевле или дороже)</button>
        <div class="news">
          <p class="newsHeader">
            <span class="material-icons">
              description
            </span>
            Новости
          </p>
          <p><span class="newsItemHeader">08-08-2021:</span> Электросталь. Обрыв магистральной оптики. Разбираемся....</p>

          <p><span class="newsItemHeader">13-07-2021</span>: Сегодня, 13.07.2021 г., на центральном узле связи в течение дня будут проводится внеплановые сервисные работы на оборудовании. Возможны крат...</p>

          <p><span class="newsItemHeader">09-06-2021:</span> График работы абонентского отдела в праздники:</p>
          <p><span class="newsItemHeader">11 июня 2021г.</span> - с 9:00 до 18:00</p>
          <p><span class="newsItemHeader">12 июня 2021г.</span> - ВЫХОДНОЙ</p>
          <p>...</p>

          <p><span class="newsItemHeader">28-04-2021</span>: Уважаемые абоненты!</p>
          <p class="newsItemHeader">График работы абонентского отдела в праздничные дни:</p>
          <p><span class="newsItemHeader">30 апреля 2021</span> - с 9:00 до 18:00</p>

          <p>
            <span style="" class="material-icons-outlined">
              arrow_circle_right
            </span>
            Далее на новости
          </p>
        </div>
        <div class="billboards">
          <img class="billboard" src="https://flex.ru/media/pic/customer/home/pro/statban/smotr.jpg" alt="">
          <img class="billboard" src="https://flex.ru/media/pic/customer/home/pro/statban/olfr.jpg" alt="">
        </div>
        <div class="socialMedia">
          <a class="btn btn-primary socialMediaItem" style="background-color: #3b5998;" href="#!" role="button">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a class="btn btn-primary socialMediaItem" style="background-color: #3b5998;" href="#!" role="button">
            <i class="fab fa-vk"></i>
          </a>
          <a class="btn btn-primary socialMediaItem" style="background-color: #3b5998;" href="#!" role="button">
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
  methods: {
    plugIn(){

    }
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