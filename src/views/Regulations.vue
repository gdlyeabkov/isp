<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a> > Техническая поддержка > Регламент взаимодействия Абонента со Службой ТП</p>
          <p class="newsHeader">
            Регламент взаимодействия Абонента со Службой технической поддержки пользователей ООО "ISP"
          </p>
          <ol>
            <li>Режим работы Службы технической поддержки пользователей ООО "ISP" (далее Службы) - круглосуточный. С 8.00 до 20.00 в рабочие дни Служба функционирует в полном объеме. С 20.00 до 08.00, а также в выходные и праздничные дни Службу представляют Дежурные инженеры.</li>
            <li>Обращение в Службу осуществляется по многоканальному телефону 8(495)600-42-13, либо по любому из указанных на сайте www.flex.ru телефонов с последующим набором в тоновом режиме добавочного номера 2-80.</li>
            <li>
              Служба принимает обращения по следующим вопросам:
              <ul>
                <li>жалобы на качество предоставляемых услуг;</li>
                <li>справки по ходу выполнения работ по инициированной ранее жалобе Абонента.</li>
                <li>консультации по вопросам пользования услугами ООО "ISP".</li>
              </ul>
            </li>
            <li>При обращении в Службу диспетчер запрашивает у Абонента идентификационную информацию: ФИО лица, на имя которого заключен договор (для юридических лиц - название организации); номер договора; имя пользователя (логин); код пользователя; телефонный номер для обратной связи.</li>
            <li>Диспетчер в ходе диалога с Абонентом сообщает ему идентификационный номер обращения, который в дальнейшем должен использоваться Абонентом при запросе справки по ходу работ.</li>
            <li>Время реакции на жалобу Абонента не должно превышать 1 часа. В течение этого времени инженер, ответственный за обработку жалобы, обязан связаться с Абонентом для проведения работ по диагностированию оборудования.</li>
            <li>В случае, если проблема, побудившая Абонента обратиться в Службу, инженерами Службы не может быть устранена, по жалобе формируется Заявка на проведение ремонтно-восстановительных работ подразделением эксплуатации сети. Время выполнения ремонтно-восстановительных работ - не более 3-х рабочих дней с момента поступления жалобы от Абонента.</li>
            <li>Диспетчер имеет право отказать в приеме обращений в Службу Абонента в случае отрицательного баланса на его лицевом счету.</li>
            <li>Диспетчер имеет право отказать в приеме жалобы от Абонента при крупных авариях на сети передачи данных ООО "ISP", которые могут стать причиной массовых обращений Абонентов в Службу. При этом Диспетчер обязан сообщить Абоненту причину отказа и ориентировочное время устранения аварии.</li>
          </ol>
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
  name: 'News',
  data(){
    return {
      news: []
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