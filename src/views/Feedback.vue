<template>
  <div>
    <Header :auth="false" :area="false"/>
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:100%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a> > Контакты</p>
          <p class="newsHeader">
            Контакты и реквизиты
          </p>
          <p>Полное наименование:</p>
          <p>Общество с ограниченной ответственностью «ФЛЕКС»</p>
          <p>Сокращенное наименование: ООО «ФЛЕКС»</p>
          <p>Наименование на английском языке: «Flex» Ltd.</p>

          <p>ИНН 5031018470</p>
          <p>КПП 503101001</p>
          <p>ОГРН 1035006102240</p>
          <p>ОКВЭД 64.20</p>
          <p>ОКТМО 46639101</p>

            <table bgcolor="white">
              <tr>
                <td style="width: 500px;">Телефон/факс:</td>
                <td style="width: 300px;">8(495)600-42-13</td>
              </tr>
              <tr>
                <td style=""></td>
                <td style="">8(495)600-42-11</td>
              </tr>
              <tr>
                <td style=""></td>
                <td style="">8(495)702-94-49</td>
              </tr>
              <tr>
                <td style=""></td>
                <td style="">8(495)995-52-40</td>
              </tr>
              <tr>
                <td style=""></td>
                <td style="">8(496)510-12-00</td>
              </tr>
              <tr>
                <td style="">Служба технической поддержки:</td>
                <td style="">8(495)600-42-11, 8(906) 70-111-70</td>
              </tr>
              <tr>
                <td style="">Адрес компании:</td>
                <td style="">Россия, 142403, Московская область, Богородский городской округ, г. Ногинск, пл. Ленина, 11</td>
              </tr>
              <tr>
                <td style="">Офис обслуживания физических лиц (абонентский отдел):</td>
                <td style="">Богородский городской округ, Ногинск, Трудовая улица, д. 5</td>
              </tr>
              <tr>
                <td style="">Офис обслуживания юридических лиц и ИП (коммерческий отдел):</td>
                <td style="">Богородский городской округ, г. Ногинск, пл. Ленина, 11</td>
              </tr>
              <tr>
                <td style="">Режим работы подразделений и служб ГК "ФЛЕКС":</td>
                <td style=""></td>
              </tr>
              <tr>
                <td style="">Служба технической поддержки:</td>
                <td style="">круглосуточно;</td>
              </tr>
              <tr>
                <td style="">Офис обслуживания физических лиц (абонентский отдел):</td>
                <td style="">рабочие дни - 9:00-19:00 (без перерыва на обед), суббота - 10:00-16:00 (без перерыва на обед), воскресенье - выходной;</td>
              </tr>
              <tr>
                <td style="">Офис обслуживания юридических лиц и ИП (коммерческий отдел):</td>
                <td style="">рабочие дни - 09:00-18:00 (обеденный перерыв - 13:00-14:00), пятница – 09.00-17.00 (обеденный перерыв – 13:00-14:00) суббота, воскресенье - выходной;</td>
              </tr>
              <tr>
                <td style="">Бухгалтерия:</td>
                <td style="">рабочие дни - 09:00-18:00 (обеденный перерыв - 13:00-14:00) пятница - 09.00-17.00 (обеденный перерыв - 13:00-14:00) суббота, воскресенье – выходной.</td>
              </tr>
              <tr>
                <td style="">Остальные подразделения и службы:</td>
                <td style="">рабочие дни - 09:00-18:00 (обеденный перерыв - 13:00-14:00) суббота, воскресенье - выходной</td>
              </tr>
              <tr>
                <td style="">E-mail:</td>
                <td style=""></td>
              </tr>
              <tr>
                <td style="">Общая информация:</td>
                <td style="">info@flex.ru</td>
              </tr>
              <tr>
                <td style="">Технический отдел:</td>
                <td style="">support@flex.ru</td>
              </tr>
              <tr>
                <td style="">Бухгалтерия:</td>
                <td style="">billing@flex.ru</td>
              </tr>
              <tr>
                <td style="">Абонентская служба:</td>
                <td style="">abon@flex.ru</td>
              </tr>
              <tr>
                <td style="">Коммерческий отдел:</td>
                <td style="">info@flex.ru</td>
              </tr>
            </table>
            <p>ФЛЕКС на карте:</p>
            <div class="map">

            </div>
            <p>Офис обслуживания организаций и ИП:</p>
            <div class="map">

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

  .map {
    display:block;
    width: 250px;
    height: 250px;
    background-color: rgb(245, 245, 245);
  }

</style>