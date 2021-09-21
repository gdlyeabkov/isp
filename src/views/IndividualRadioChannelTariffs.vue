<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a> > Интернет для дома > Тарифы > Частный дом по индивидуальному радиоканалу</p>
          <p class="newsHeader">
            Беспроводной Интернет по индивидуальному радиоканалу частный дом (квартиру).
          </p>
          <div>
            <p>
               Данные тарифы распространяются на случаи, когда подключение к сети Интернет производится путём организации индивидуального радиоканала к Вам домой. При этом у Вас дома устанавливается комплект специального оборудования и осуществляется его настройка. Такой тип подключения позволяет подключить Интернет домой даже в тех местах, где полностью отсутствует сетевая инфраструктура Интернет провайдеров.
            </p>
            <p>
              Для Вашего удобства мы разработали систему on-line заявок с нашего сайта:
            </p>
            <p style="color: rgb(0, 0, 255);">
              Оставить заявку на подключение
            </p>
            <p>
              Заполните краткую форму заявки оставив свой контактный телефон. По указанному Вами телефону с Вами сразу свяжутся наши специалисты и ответят на интересующие Вас вопросы. При необходимости к Вам выедут наши специалисты и проведут процедуру обследования на предмет технической возможности. Процедура обследования абсолютно бесплатна и не потребует Вашего личного присутствия.
            </p>
            <p>
              Стоимость подключения к сети Интернет по выделенной линии с авторизацией на VPN-сервере для физических лиц
            </p>
            <table>
              <tr style="height: 75px; ">
                <td style="width: 200px; border: 1px solid rgb(0, 0, 0);">Технология</td>
                <td style="text-align: center; width: 400px; border: 1px solid rgb(0, 0, 0);">Скорость нефиксированная (Мбит/с)</td>
                <td style="text-align: center; width: 600px; border: 1px solid rgb(0, 0, 0);">Размер единоразового платежа (руб. с НДС)*</td>
              </tr>
              <tr style="height: 75px; ">
                <td style="padding: 15px; width: 200px; border: 1px solid rgb(0, 0, 0);">Радио с авторизацией на VPN-сервере (отдельная радиоточка)</td>
                <td style="text-align: center; width: 400px; border: 1px solid rgb(0, 0, 0);">до 50</td>
                <td style="font-weight: bolder; text-align: center; width: 600px; border: 1px solid rgb(0, 0, 0);">12000</td>
              </tr>
              <tr style="height: 75px; ">
                <td style="padding: 15px; width: 200px; border: 1px solid rgb(0, 0, 0);">ВОЛС с авторизацией на VPN-сервере (коллективная магистральная радиоточка)</td>
                <td style="text-align: center; width: 400px; border: 1px solid rgb(0, 0, 0);">до 50</td>
                <td style="font-weight: bolder; text-align: center; width: 600px; border: 1px solid rgb(0, 0, 0);">10000</td>
              </tr>
            </table>
            <div style="text-align: center;">
              <p>Примечание:   * при наличии тех возможности</p>
              <p style="font-weight: bolder;">Тарифные планы доступа к сети Интернет по выделенной линии с авторизацией на VPN-сервере для физических лиц, подключенных по ВОЛС к коллективной радиоточке</p>
            </div>
            <p style="text-align: center;">
              Тарифные планы доступа к сети Интернет по выделенной линии с авторизацией на VPN-сервере для физических лиц, подключенных к отдельной радиоточке
            </p>
            <table>
              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">Наименование тарифного плана</td>
                <td style="border: 1px solid rgb(0, 0, 0);">Аббревиатура тарифного плана</td>
                <td style="border: 1px solid rgb(0, 0, 0);">Абон. плата (руб./мес.)</td>
                <td style="border: 1px solid rgb(0, 0, 0);">Скорость до ** (Мбит/с)</td>
                <td style="border: 1px solid rgb(0, 0, 0);">Лимит трафика(Мбайт)</td>
                <td style="border: 1px solid rgb(0, 0, 0);">Цена превышения (руб.)</td>
              </tr>
              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">1</td>
                <td style="border: 1px solid rgb(0, 0, 0);">2</td>
                <td style="border: 1px solid rgb(0, 0, 0);">3</td>
                <td style="border: 1px solid rgb(0, 0, 0);">4</td>
                <td style="border: 1px solid rgb(0, 0, 0);">5</td>
                <td style="border: 1px solid rgb(0, 0, 0);">6</td>
              </tr>
              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">Бронирование линии</td>
                <td style="border: 1px solid rgb(0, 0, 0);">Бронирование линии</td>
                <td style="border: 1px solid rgb(0, 0, 0);">200</td>
                <td style="border: 1px solid rgb(0, 0, 0);">0</td>
                <td style="border: 1px solid rgb(0, 0, 0);">-</td>
                <td style="border: 1px solid rgb(0, 0, 0);">-</td>
              </tr>
              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">Бронирование линии</td>
                <td style="border: 1px solid rgb(0, 0, 0);">Бронирование линии</td>
                <td style="border: 1px solid rgb(0, 0, 0);">200</td>
                <td style="border: 1px solid rgb(0, 0, 0);">0</td>
                <td style="border: 1px solid rgb(0, 0, 0);">-</td>
                <td style="border: 1px solid rgb(0, 0, 0);">-</td>
              </tr>
              <tr>
                <td colspan="6" style="border: 1px solid rgb(0, 0, 0);">Безлимитные тарифные планы «Малая Родина на связи»</td>
              </tr>
              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">Удаленный доступ для трудоголиков</td>
                <td style="border: 1px solid rgb(0, 0, 0);">u20M/399</td>
                <td style="border: 1px solid rgb(0, 0, 0);">399</td>
                <td style="border: 1px solid rgb(0, 0, 0);">20</td>
                <td style="border: 1px solid rgb(0, 0, 0);">-</td>
                <td style="border: 1px solid rgb(0, 0, 0);">-</td>
              </tr>
              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">Супер для любетелей кино и игр</td>
                <td style="border: 1px solid rgb(0, 0, 0);">U30M/650</td>
                <td style="border: 1px solid rgb(0, 0, 0);">650</td>
                <td style="border: 1px solid rgb(0, 0, 0);">30</td>
                <td style="border: 1px solid rgb(0, 0, 0);">-</td>
                <td style="border: 1px solid rgb(0, 0, 0);">-</td>
              </tr>
              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">Премиум для любетелей кино и игр</td>
                <td style="border: 1px solid rgb(0, 0, 0);">U50M/990</td>
                <td style="border: 1px solid rgb(0, 0, 0);">990</td>
                <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                <td style="border: 1px solid rgb(0, 0, 0);">-</td>
                <td style="border: 1px solid rgb(0, 0, 0);">-</td>
              </tr>
              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">Индивидуальный</td>
                <td style="border: 1px solid rgb(0, 0, 0);">"Выбирай"</td>
                <td style="border: 1px solid rgb(0, 0, 0);">***</td>
                <td style="border: 1px solid rgb(0, 0, 0);">50+</td>
                <td style="border: 1px solid rgb(0, 0, 0);">-</td>
                <td style="border: 1px solid rgb(0, 0, 0);">-</td>
              </tr>
            </table>
            <p>
              Примечание:
            </p>
            <p>
              *** Индивидуальный тарифный план создается с учетом пожеланий клиента и технической возможности, позволяет заказать подключение к Интернет на скорости более 20 Мбит/с, стоимость подключения и абонентская плата рассчитывается индивидуально, в зависимости от нахождения объекта подключения и требуемой скорости.
            </p>
            <ol>
              <li>Цены указаны в рублях РФ и включают НДС.</li>
              <li>Деньги за пользование Интернетом снимаются с лицевого счета абонента отдельно за каждое соединение с сервером VPN. Для расчета используется большая величина входящего или исходящего трафика.</li>
              <li>При отрицательном сальдо лицевого счета АБОНЕНТА предоставление услуг приостанавливается без предварительного уведомления. Абонентская плата, указанная в тарифном плане, снимается с лицевого счета Абонента ежедневно равными долями в течение месяца. В случае отсутствия средств на лицевом счете Абонента, абонентская плата продолжает сниматься с лицевого счета, образуя задолженность Абонента перед Оператором. По письменному заявлению ООО «ФЛЕКС» может произвести перерасчет задолженности из расчета 200 руб. в месяц -  за техническое обслуживание соединительной линии, резервировании порта и радиоресурса. Срок задолженности определяется с месяца, в котором Ваш лицевой счет обнулился.</li>
              <li>Заявки на смену тарифного плана доступа к сети Интернет принимаются в письменном виде до 25 числа текущего месяца. Ввод в действие вновь выбранного тарифного плана осуществляется с 1-го числа следующего месяца.  Возможность перехода на конкретный тарифный план определяется составом установленного клиентского оборудования. **Скорость, указанная в тарифных планах, не является гарантированной. Под этой величиной понимается максимальная скорость, которая может быть получена на данном тарифном плане (скорость порта). Она зависит от многих факторов, в том числе от загруженности ресурсов, к которым обращается пользователь, от повышенной вирусной активности в сети, а так же от загрузки каналов связи.</li>
              <li>**Скорость, указанная в тарифных планах, не является гарантированной. Под этой величиной понимается максимальная скорость, которая может быть получена на данном тарифном плане (скорость порта). Она зависит от многих факторов, в том числе от загруженности ресурсов, к которым обращается пользователь, от повышенной вирусной активности в сети, а так же от загрузки каналов связи.</li>
            </ol>
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