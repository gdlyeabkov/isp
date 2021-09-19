<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a> > Интернет для дома > Список партнёров</p>
          <p class="newsHeader">
            Партнёры ФЛЕКС в городах Подмосковья:
          </p>
          <div>
            <p>
              Название	Города
              "Авиэл" ЗАО
              г. Раменское
              Раменский район
              "Азимут Р" ООО
              г. Пушкино
              Пушкинский район:
                  г.п. Софрино
                  п-к Софрино-1
                  г.п. Правдинский
                  п-к Братовщина
                  п-к Заречье-1
                  п-к Чистые пруды
                  п-к Костино
                  мкр. Заветы Ильича
                  пгт. Лесной
              "БГС" ООО
              г. Бронницы
              "ВегаНэт" ООО
              г. Клин
              Клинский район
              "Виртуальный Мир" ООО
              г. Орехово-Зуево
              Орехово-Зуевский район:
                  г. Ликино-Дулево
                  Куровское
                  д.Давыдово
                  д.Кабаново
              Владимирская область:
                  пгт.Городищи
              "ВЭЛЛКОМ-Л" ООО
              г. Лыткарино
              "Институт инженерной физики" МОУ
              г. Серпухов
              Серпуховский район:
                  пос.Большевик
                  дер.Калиново
                  с.Липицы
                  ст.Шарапова охота
                  дер.Скрылья
                  дер.Палихово
                  дер.Дракино
                  дер.Ивановское
                  дер.Нефедово
                  дер.Бутурлино
                  дер.Пущино-на-Наре
                  снт "Ленком"
              "Интерсеть" ООО
              г. Руза
              Рузский район:
              п.Тучково
              д.Нестерово
              жг Нестерово
              п.Кожино
              д.Воробьево
              п.Ново-Волково
              п.Теряево
              п.Дорохово
              п.Беляная Гора
              п.Колюбакино
              п.Санаторий Дорохово
              г Устье
              Можайский район
              г. Можайск
              "ИТКМ" ООО
              г. Ивантеевка
              "Линк" ООО
              г. Дмитров
              Дмитровский район:
                  Автополигон
                  Белый раст
                  Горшково
                  Яхрома
                  Деденево
                  Дуброво
                  Икша
                  Новосиньково
                  Олядьево
                  Орудьево
                  Подосинки
                  Рогачево
                  Рыбное
              г. Кимры
              Кимрский район:
                  Белый городок
              Мытищинский район:
                  Долгопрудный
                  Титово
              "НараТелеком" ООО
              г. Наро-Фоминск
              Наро-Фоминский район
              "НТК" ООО
              г. Ногинск
              "ПРОГТЕХ" ЗАО НПО
              г. Жуковский
              п.Ильинский
              п.Кратово
              д. Верея
              п. Буденовский
              Краснодарский край:
                  г. Анапа
              "Ристек" ООО
              г. Москва
              "Рустелеком" ООО
              г. Озеры
              Озерский район
              "ТДС+" ООО
              г. Волоколамск
              Волоколамский район
              Лотошинский район
              Шаховской район.
              пгт. Лотошино
              пгт. Шаховская
              "Телеком МПК" ООО
              г.Дубна
              Дубнинский район:
                  г.Талдом
                  п.Запрудня
                  п.Вербилки
                  п.Северный
                  п.Темпы
                  с.Новоникольское
                  д.Павловичи
                  д.Квашенки
                  д.Новогуслево
                  д.Юркино
              "Фалкон-Коломна" ООО
              г.Коломна
              Коломенский район:
                  п. Биорки
                  п. Лесной
                  п. Первомайский
                  п. Возрождение
                  п. Шеметово
                  д. Михали
                  д. Юрцово
                  п. Ловцы
              д. Сельниково
              Лесной Городок (п. Тимшино)
              "ФЛЕКС-Л" ООО
              г.Луховицы
              п.Красная Пойма
              "Флекс-Ультра" ООО
              г. Мытищи
              Московская область - радиодоступ
              "Элвис-Телеком-Щёлково" ООО
              г. Щелково
              Щелковский район
              "ЭлектраНет" ООО
              г. Электрогорск
              г. Павловский Посад
              пос. Большие Дворы
              пос. Вольгинский
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