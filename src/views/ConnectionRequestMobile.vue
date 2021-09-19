<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a>> Домашний городской телефон > Электронная заявка</p>
          <p class="newsHeader">
            Добро пожаловать!
          </p>
          <div>
            <p class="newsHeader">
              Скажите нам как к Вам обратиться, в каком населённом пункте Вы хотели бы подключиться и на какой номер перезвонить. Наши заботливые менеджеры обязательно свяжутся с Вами. Они у нас такие...
            </p>
            <p class="newsHeader">
              Введите номер телефона:
            </p>
            <input  value="+7(___) ___-____" class="form-control w-25" type="phone" />
            <p class="newsHeader">
              Введите ваше ФИО:
            </p>
            <input  value="ФИО" class="form-control w-25" type="text" />
            <p class="newsHeader">
              В каком месте Вам требуется подключение:
            </p>
            <input type="radio" /><span style="margin-left: 15px;">Квартира в многоквартирном доме</span>
            <br/>
            <input type="radio" /><span style="margin-left: 15px;">Частное домовладение</span>
            <br/>
            <select class="form-control w-25" placeholder="наменование населённого пункта" name="" id="">
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
              <option value="Аборино, деревня">Аборино, деревня</option>
            </select>
            <span style="color: rgb(0, 0, 255);">Не нашли свой населённый пункт?</span>
            <p class="newsHeader">
              Введите код с картинки:
            </p>
            <input  value="Код" class="form-control w-25" type="text" />
            <input type="checkbox" /><span style="margin-left: 15px;">Я согласен на обработку моих персональных данных ( подробнее)</span>
            <p style="color: rgb(255, 0, 0); font-size: 24px;">Отправить</p>
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