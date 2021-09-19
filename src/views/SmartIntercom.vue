<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a>> Домофоны > «УМНЫЙ ДОМОФОН»</p>
          <div>
            
            <div style="width: 100%; height: 175px; background-color: rgb(40, 40, 200); display: flex; flex-direction: row; justify-content: center; align-items: center;">
                <div style="color: rgb(0, 0, 0); background-color: rgb(215, 215, 200); box-sizing: border-box; padding: 15px; width: 85%; height: 100px; text-align: center;">
                  <p style="font-size: 24px;">
                    Интеллектуальная система для повышенного комфорта и безопасности «УМНЫЙ ДОМОФОН».
                  </p>
              </div>
            </div>
              

              <div style="width: 100%; height: 325px; background-color: rgb(180, 180, 255); display: flex; flex-direction: row; justify-content: center; align-items: center; margin-top: 15px;">
                <div style="color: rgb(255, 255, 255); background-color: rgb(75, 75, 75); box-sizing: border-box; padding: 35px; width: 85%; height: 250px;">
                  <p style="font-size: 24px;">
                    Кроме привычных функций вызова и открытия двери такой домофон имеет дополнительные. Вы сможете:
                  </p>
                  <ul>
                    <li>
                      Принимать видео звонки на Ваш смартфон.
                    </li>
                    <li>
                      Открывать дверь из приложения находясь в любой точке мира.
                    </li>
                    <li>
                      Просматривать подъездную камеру в любой момент.
                    </li>
                    <li>
                      Управлять услугой из личного кабинета.
                    </li>
                  </ul>
              </div>
            </div>

              <p style="font-size: 24px;">
                Список подключенных домов
              </p>
              
              <div style="width: 100%; height: 200px; background-color: rgb(0, 100, 255); margin: 5px 0px;">
                <p style="font-size: 20px; color: rgb(255, 255, 255); text-align: center;">Ногинск, Академика Фортова, 1</p>
                <div style="width: 100%; height: 50%; display: flex;">
                  <div style="width: 50%; height: 100%; display: flex;">
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">подъезд 1</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">подъезд 2</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center; ">подъезд 3</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                  </div>
                  <div style="display: flex; height: 100%;">
                    <button class="btn btn-danger" style="align-self: center;">
                      Подать заявку
                    </button>
                  </div>
                </div>
              </div>

              <div style="width: 100%; height: 200px; background-color: rgb(0, 100, 255); margin: 5px 0px;">
                <p style="font-size: 20px; color: rgb(255, 255, 255); text-align: center;">Ногинск, Комсомольская, 20Б</p>
                <div style="width: 100%; height: 50%; display: flex;">
                  <div style="width: 65%; height: 100%; display: flex;">
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">подъезд 1</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">подъезд 2</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center; ">подъезд 3</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center; ">подъезд 4</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                  </div>
                  <div style="display: flex; height: 100%;">
                    <button class="btn btn-danger" style="align-self: center;">
                      Подать заявку
                    </button>
                  </div>
                </div>
              </div>

              <div style="width: 100%; height: 200px; background-color: rgb(0, 100, 255); margin: 5px 0px;">
                <p style="font-size: 20px; color: rgb(255, 255, 255); text-align: center;">Ногинск, Комсомольская, 22А</p>
                <div style="width: 100%; height: 50%; display: flex;">
                  <div style="width: 65%; height: 100%; display: flex;">
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">подъезд 1</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">подъезд 2</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center; ">подъезд 3</p>
                      
                    </div>
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center; ">подъезд 4</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                  </div>
                  <div style="display: flex; height: 100%;">
                    <button class="btn btn-danger" style="align-self: center;">
                      Подать заявку
                    </button>
                  </div>
                </div>
              </div>

              <div style="width: 100%; height: 200px; background-color: rgb(0, 100, 255); margin: 5px 0px;">
                <p style="font-size: 20px; color: rgb(255, 255, 255); text-align: center;">Ногинск, Социалистическая, 3</p>
                <div style="width: 100%; height: 50%; display: flex;">
                  <div style="width: 35%; height: 100%; display: flex;">
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">подъезд 1</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">подъезд 2</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                  </div>
                  <div style="display: flex; height: 100%;">
                    <button class="btn btn-danger" style="align-self: center;">
                      Подать заявку
                    </button>
                  </div>
                </div>
              </div>

              <div style="width: 100%; height: 200px; background-color: rgb(0, 100, 255); margin: 5px 0px;">
                <p style="font-size: 20px; color: rgb(255, 255, 255); text-align: center;">Электросталь, Ленина, 08</p>
                <div style="width: 100%; height: 50%; display: flex;">
                  <div style="width: 35%; height: 100%; display: flex;">
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">подъезд 1</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">подъезд 2</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                  </div>
                  <div style="display: flex; height: 100%;">
                    <button class="btn btn-danger" style="align-self: center;">
                      Подать заявку
                    </button>
                  </div>
                </div>
              </div>

              <div style="width: 100%; height: 200px; background-color: rgb(0, 100, 255); margin: 5px 0px;">
                <p style="font-size: 20px; color: rgb(255, 255, 255); text-align: center;">Электросталь, Лесная, 27</p>
                <div style="width: 100%; height: 50%; display: flex;">
                  <div style="width: 35%; height: 100%; display: flex;">
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">подъезд 1</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                    <div style="width: 100px; height: 100%; background-color: rgb(0, 0, 255); margin: 0px 25px;">
                      <p style="font-size: 14px; color: rgb(255, 255, 255); text-align: center;">подъезд 2</p>
                      <div style="text-align: center;">
                        <img width="50%" src="@/assets/logo.png" alt="">
                      </div>
                    </div>
                  </div>
                  <div style="display: flex; height: 100%;">
                    <button class="btn btn-danger" style="align-self: center;">
                      Подать заявку
                    </button>
                  </div>
                </div>
              </div>
              
              <div style="width: 100%; height: 750px; background-color: rgb(200, 20, 20); display: flex; flex-direction: row; justify-content: center; align-items: center;">
                <div style="color: rgb(255, 255, 255); background-color: rgb(100, 20, 20); box-sizing: border-box; padding: 35px; width: 85%; height: 85%;">
                  <p style="font-size: 24px;">
                    Принимайте видео звонки от домофона на Ваш смартфон.
                  </p>
                    <p>Когда посетитель набирает номер вашей квартиры, на очень лёгкое и функциональное приложение придёт вызов. Вы сможете посмотреть изображение с камеры на подъезде во время вызова, пообщаться голосом с посетителем и открыть дверь, если нужно.</p>
                    <p style="font-size: 24px;">
                      Пользуйтесь ДОМОФОН ПЛЮС в любой точке мира.
                    </p>
                    <p>
                      Приложение вызывается, в любой точке мира, где есть доступ к Интернет. Вы можете, находясь на работе или в отпуске контролировать доступ в Ваш подъезд.
                    </p>
                    <p style="font-size: 24px;">
                      Просматривайте подъездную камеру в любое время.
                    </p>
                    <p>
                      Просматривать подъездную камеру можно в любой момент, когда Вам это нужно, не зависимо от вызова. Посмотреть, что происходит перед подъездом, пришёл ли Ваш ребёнок и многое другое.
                    </p>
                    <p style="font-size: 24px;">
                      Самостоятельно управляйте услугой.
                    </p>
                    <p>
                      Обращаться во ФЛЕКС придётся всего один раз, чтобы заключить договор. Всё остальное Вы можете делать самостоятельно в Личном кабинете. Добавить или удалить телефон, подключить или отключить опцию и многое другое в Вашем Личном кабинете
                    </p>
                  </div>
                </div>

              <div style="width: 100%; height: 750px; background-color: rgb(100, 100, 255); display: flex; flex-direction: row; justify-content: center; align-items: center; margin-top: 15px;">
                <div style="color: rgb(255, 255, 255); background-color: rgb(0, 0, 75); box-sizing: border-box; padding: 35px; width: 85%; height: 85%;">
                  <p style="font-size: 24px;">
                    Инструкция
                  </p>
                  <p>Для того, чтобы воспользоваться услугой «Умный домофон» вам необходимо завести в Личном кабинете номер или несколько номеров мобильного телефона, на который будет приходить видео или телефонный вызов от домофонной панели установленной на вашем подъезде. Введите номер и затем подтвердите его кодом, который придёт по СМС от ФЛЕКС.
                  Когда телефон будет добавлен, вы сможете подключить к нему две опции:</p>
                  <ol>
                    <li>
                      Вызов телефонного номера при наборе номера квартиры на панели. При такой включенной опции после набора номера происходит вызов на номер или несколько номеров по телефонной сети от панели. Взяв трубку, вы сможете поговорить с вызывающим и открыть дверь нажатием цифры 1. Данная опция доступна не на всех панелях. Если на вашем подъезде установлена панель старого образца, без встроенной камеры, данная опция не доступна.
                    </li>
                    <li>
                      Вызов на приложение РосДомофон. В приложении Вы сможете увидеть поситителя, поговорить с ним и открыть дверь. Так же доступен небольшой видеоархив камеры подъезда.    
                    </li>
                  </ol>
                  <p>Для подключения опции 1, вам достаточно включить эту опцию и с момента включения услуга будет оказываться. При включении опции 2, на ваш телефон придёт СМС со ссылкой на приложение РосДомофон. Установив его на ваш смартфон, вы в приложении ещё раз введёте номер вашего телефона, который указали ранее в личном кабинете. Подтвердите этот номер по СМС в приложении (придёт после ввода номера). В результате к вашему приложению «привяжется» камера и домофон вашего подъезда.</p>
              </div>
            </div>

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
    height: 3500px;
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
    height: 3500px;
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