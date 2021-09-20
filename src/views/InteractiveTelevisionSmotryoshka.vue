<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a> > Телевидение > Смотрёшка</p>
          <div style="text-align:center; margin: 0px auto;">
            <img style="text-align:center; margin: 0px auto;" width="350px" src="https://flex.ru/media/pic/customer/tv/smotreshka.png" alt="">
          </div>
          <p class="newsHeader">
            В пакетах «Стандарт», «Оптима», «50М/ТВ/390», «100М/ТВ+/499» произошли изменения с 1 февраля. Некоторые каналы были убраны из пакета т.к. являлись акционными.
          </p>
          <p class="newsHeader">
            7 преимуществ "СМОТРЁШКИ*" перед другими видами телевидения
          </p>
          <div>
            <p>
              "СМОТРЁШКА" это телевидение по новому, оно значительно лучше эфирного, спутникового вещания и многих других способов получить любимые каналы на своём телевизоре и вот почему:
            </p>
            <p>
              Первое - возможность просмотра каналов на большом количестве устройств. На SmartTV, на смартфоне или планшете, с помощью специального мультимедийного центра "Смотрёшка BOX"
            </p>
            <p>
              Второе - это возможность смотреть любимые телепередачи в любом месте. Вы можете запустив приложение "СМОТРЁШКА" на смартфоне или планшете смотреть каналы в зоне доступа 3G/4G связи.
            </p>
            <p>
              Третье - возможность просмотра архивных передач. Весь эфир всех каналов хранится на серверах "СМОТРЁШКИ" в течении 5 суток. Вы можете перематывать эфир и  ставить его на паузу.  Со "СМОТРЁШКОЙ" Вы не пропустите интересный фильм или спортивный матч.
            </p>
            <p>
              Четвёртое - оплата "СМОТРЁШКИ"  происходит списанием средств с Вашего лицевого счёта ФЛЕКС, не требуется отдельно оплачивать Интернет и телевидение.
            </p>
            <p>
              Пятое - все пакеты каналов в "СМОТРЁШКЕ" Вы можете подключить или отключить в Вашем Личном кабинете ФЛЕКС.
            </p>
            <p>
              Шестое - подключить пакет каналов Вы можете даже на одни сутки.
            </p>
            <p>
              Седьмое - доступ к популярным онлайн кинотеатрам (Amediateka, IVI, Megogo, START) абсолютно без рекламы.
            </p>
            <p class="newsHeader">
              Стоимость пакетов:
            </p>
            <p class="newsHeader">
              Основные тарифы
            </p>  
              
              <div style="margin: 5px; float: left; width: 305px; height: 325px; background-color: rgb(250, 250, 250); text-align: center;">
                <p class="newsHeader" style="background-color: rgb(235, 235, 235);">
                  Стандарт
                </p>
                <p style="font-weight: bolder; font-size: 55px;">
                  199
                </p>
                  рублей в месяц
                <p>
                Каналов в пакете: 246
                </p>
                <p style="color: rgb(0, 0, 255);">
                  список каналов
                </p>
                <button class="btn btn-danger">подключить</button>                
              </div>

              <div style="margin: 5px; float: left; width: 305px; height: 325px; background-color: rgb(250, 250, 250); text-align: center;">
                <p class="newsHeader" style="background-color: rgb(235, 235, 235);">
                  Оптима
                </p>
                <p style="font-weight: bolder; font-size: 55px;">
                  449
                </p>
                  рублей в месяц
                <p>
                Каналов в пакете: 305
                </p>
                <p style="color: rgb(0, 0, 255);">
                  список каналов
                </p>
                <button class="btn btn-danger">подключить</button>                
              </div>

              <div style="margin: 5px; float: left; width: 305px; height: 325px; background-color: rgb(250, 250, 250); text-align: center;">
                <p class="newsHeader" style="background-color: rgb(235, 235, 235);">
                  Эксклюзив
                </p>
                <p style="font-weight: bolder; font-size: 55px;">
                  749
                </p>
                  рублей в месяц
                <p>
                Каналов в пакете: 333
                </p>
                <p style="color: rgb(0, 0, 255);">
                  список каналов
                </p>
                <button class="btn btn-danger">подключить</button>                
              </div>

              <div style="margin: 5px; float: left; width: 305px; height: 325px; background-color: rgb(250, 250, 250); text-align: center;">
                <p class="newsHeader" style="background-color: rgb(235, 235, 235);">
                  Эксклюзив + Кино
                </p>
                <p style="font-weight: bolder; font-size: 55px;">
                  999
                </p>
                  рублей в месяц
                <p>
                Каналов в пакете: 333
                </p>
                <p style="color: rgb(0, 0, 255);">
                  список каналов
                </p>
                <button class="btn btn-danger">подключить</button>                
              </div>
              <br style="clear: both;" />
              
              <p class="newsHeader">
                Пакеты входящие в состав услуги Интернет+ТВ
              </p>
              <div style="margin: 5px; float: left; width: 305px; height: 405px; background-color: rgb(250, 250, 250); text-align: center;">
                <p class="newsHeader" style="background-color: rgb(235, 235, 235);">
                  50М/ТВ/390
                </p>
                <p style="font-weight: bolder; font-size: 55px;">
                  от 390
                </p>
                <p>
                  рублей в месяц
                </p>
                <p>
                  Пакет каналов: "Второй Бандл"
                </p>
                <p>
                Каналов в пакете: 151
                </p>
                <p>
                Кинотеатр в подписке нет
                </p>
                <p style="color: rgb(0, 0, 255);">
                  список каналов
                </p>
                <button class="btn btn-danger">подключить</button>                
              </div>

              <div style="margin: 5px; float: left; width: 305px; height: 405px; background-color: rgb(250, 250, 250); text-align: center;">
                <p class="newsHeader" style="background-color: rgb(235, 235, 235);">
                  100М/ТВ+/499
                </p>
                <p style="font-weight: bolder; font-size: 55px;">
                  от 499
                </p>
                <p>
                  рублей в месяц
                </p>
                <p>
                  Пакет каналов: "Комбо Микс + ivi"
                </p>
                <p>
                Каналов в пакете: 239
                </p>
                <p>
                Кинотеатр в подписке нет
                </p>
                <p style="color: rgb(0, 0, 255);">
                  список каналов
                </p>
                <button class="btn btn-danger">подключить</button>                
              </div>

              <br style="clear: both;" />
              <p style="font-weight: bolder;">
                Дополнительные пакеты (СПОРТ, КИНО, НОВОСТИ, ФУНКЦИИ)
              </p>
              <p style="text-decoration: underline;">
                Развернуть
              </p>
              <div style="display: flex; justify-content: space-between;">
                <div style="align-self: center;">
                  <p class="newsHeader">
                    ТВ приставки для СМОТРЁШКИ
                  </p>
                  <p style="color: rgb(0, 0, 255);">
                    медиаплееры ВЫКУП или РАССРОЧКА
                  </p>
                </div>
                <div style="align-self: center;">
                  <img style="text-align:center; margin: 0px auto;" width="150px" src="https://img.mvideo.ru/Pdb/50125742b.jpg" alt="">
                </div>
              </div>
              <p class="newsHeader">
                Краткий FAQ:
              </p>
              <p style="font-weight: bolder;">
                Как подключить "СМОТРЁШКУ"?
              </p>
              <p>
                Регистрация в сервисе осуществляется в Вашем личном кабинете в разделе "СМОТРЁШКА". После регистрации в данном разделе будет отображаться логин и пароль от вашей "СМОТРЁШКИ"
              </p>
              <p style="font-weight: bolder;">
                Сколько стоит регистрация в сервисе "СМОТРЁШКА"?
              </p>
              <p>
                Регистрация в сервисе бесплатна. Средства с лицевого счёта списываются только после подключения пакета каналов  или функции.
              </p>
              <p style="font-weight: bolder;">
                Как отключить "СМОТРЁШКУ"?
              </p>
              <p>
                В личном кабинете можно отключить подключенный ранее пакет каналов. После этого со счёта больше не будут списываться средства.  Важно.  За регистрацию в системе средства не взимаются, только за подключенный пакет каналов.
              </p>
              <p style="font-weight: bolder;">
                На чём смотреть?
              </p>
              <p>
                "СМОТРЁШКА" - это приложение, которое устанавливается на устройства, такие как SmartTV, приставки, смартфоны и планшеты. На персональном компьютере "СМОТРЁШКОЙ"  можно пользоваться через браузер.
              </p>
              <p style="color: rgb(0, 0, 255);">
                Подробнее ознакомиться как и на чём смотреть  на сайте "СМОТРЁШКИ"
              </p>
              <p style="font-weight: bolder;">
                Как оплачивать?
              </p>
              Оплата за подключенный пакет осуществляется ежесуточным списанием с лицевого счёта абонента. Сумма ежесуточного списания рассчитывается как стоимость пакета, разделённая на количество дней текущего месяца.  Оплата производится пополнением лицевого счёта, способы пополнения указаны здесь.

              <p style="font-weight: bolder;">
                В каком качестве доступны  каналы в "СМОТРЁШКЕ"?
              </p>
              В зависимости от пакета большое количество каналов доступны в HD качестве. В случае снижения пропускной способности (скорости) канала абонента, например из-за полной загрузки канала при скачивании больших объёмов данных, качество изображения автоматически может переключиться в худшую сторону.  Однако, такие ситуации возникают редко и находятся в сфере ответственности абонента.
              <p style="color: rgb(0, 0, 255);">
                Ещё немного вопросов и ответов на сайте "СМОТРЁШКИ"
              </p>
              <p>
                *Услуга предоставляется ООО «ЛайфСтрим». Cписок каналов в пакетах могут быть изменены без дополнительного уведомления.
              </p>
              <p>
                Просим самостоятельно уточнять наличие или отсутвие конкретных каналов в пакете.
              </p>
              <p>
                Найдите и скачайте «Смотрёшку» из LG App. Для поиска приложения нажмите Search на пульте, ищите по названию «смотрёшка»
              </p>
              <p>
                Найдите и скачайте «Смотрёшку» из Samsung App. Для поиска приложения нажмите Search на пульте, ищите по названию «смотрёшка»
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
    height: 3200px;
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
    height: 3200px;
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