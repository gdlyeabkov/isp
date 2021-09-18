<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">    
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">Частным клиентам</a> > Техническая поддержка</p>
          <p class="newsHeader">
            Инструкции для настройки подключения к Интернету и локальной сети ОС и роутеров
          </p>
          <p>Внимание! Данные настройки рассчитаны только на абонентов, получающих доступ в Интернет через домовые сети, проживающих в населенных пунктах: Ногинск, Электросталь, Электроугли, Обухово, Старая Купавна, Зеленый, Светлый, Всеволодово, Ямкино, Буньково, Радиоцентр, Авдотьино, Мамонтово, Жилино, Горки, Иванисово, Новые дома.</p>
          
          <div class="instruction">
            <div style="min-width: 35%; min-height: 35%; background-size: 100% 100%; background-image: url('https://items.s1.citilink.ru/1436302_v02_b.jpg')"></div>
            <div style="width: 75%; display: flex; flex-direction: column; align-items: center; text-align: left; background-color: rgb(235, 235, 235)">
              <p style="font-weight: bold; font-size: 14px;">Инструкции для настройки (с нуля) подключения к Интернету и локальной сети</p>
              <div style="display: flex;">
                <ul>
                  <li>Для Windows 10</li>
                  <li>Для Windows 7</li>
                  <li>Для Windows 8</li>
                  <li>Для Mac OS X</li>
                </ul>
                <ul>
                  <li>Для Windows XP</li>
                  <li>Для Windows Vista</li>
                  <li>Для FreeBSD</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="instruction">
            <div style="min-width: 20%; min-height: 35%; background-size: 100% 100%; background-image: url('https://avatars.mds.yandex.net/get-mpic/4497593/img_id9019406060948782956.jpeg/13hq')"></div>
            <div style="width: 75%; display: flex; flex-direction: column; align-items: center; text-align: left; background-color: rgb(235, 235, 235)">
              <p style="font-weight: bold; font-size: 14px;">Инструкции для настройки подключения к Интернету для роутеров:</p>
              <div style="display: flex;">
                <ul>
                  <li>L2TP на D-Link DIR серии, на примере DIR-100</li>
                  <li>L2TP на D-Link DIR серии, на примере DIR-330</li>
                  <li>L2TP на D-Link DI серии, на примере DI-624 (rev C)</li>
                  <li>L2TP на Zyxel P-330W серии</li>
                  <li>L2TP на ASUS WL500 серии, на примере ASUS wL500gp V2</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="instruction">
            <div style="min-width: 20%; min-height: 35%; background-size: 100% 100%; background-image: url('data:image/jpeg;base64,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')"></div>
            <div style="width: 75%; display: flex; flex-direction: column; align-items: center; text-align: left; background-color: rgb(235, 235, 235)">
              <p style="font-weight: bold; font-size: 14px;">Инструкции для настройки почты:</p>
              <div style="display: flex;">
                <ul>
                  <li>Для Outlook Express</li>
                  <li>Для Microsoft Office Outlook 2003</li>
                  <li>Для The Bat!</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="instruction">
            <div style="min-width: 25%; min-height: 35%; background-size: 100% 100%; background-image: url('https://st2.depositphotos.com/3102403/7843/v/950/depositphotos_78432710-stock-illustration-flat-science-and-medicine-laboratory.jpg')"></div>
            <div style="width: 75%; display: flex; flex-direction: column; align-items: center; text-align: left; background-color: rgb(235, 235, 235)">
              <p style="font-weight: bold; font-size: 14px;">Инструкции для перехода с PPTP на L2TP:</p>
              <div style="display: flex;">
                <ul>
                  <li>Для Windows XP</li>
                  <li>Для Windows Vista</li>
                  <li>Для Windows 7</li>
                </ul>
              </div>
            </div>
          </div>

          <p>Внимание!</p>
          <p>В случае если у вас стоит операционная система отличная от вышеперечисленных, или же вы настраиваете роутер, вам необходимо будет настроить:</p>
          <ul>
            <li>Протокол TCP/IP (версия 4) для сетевого подключения</li>
            <li>IP адрес: согласно договору</li>
            <li>Маска подсети: согласно договору</li>
            <li>Стандартный (или основной) шлюз: согласно договору</li>
            <li>Предпочитаемый DNS сервер: 80.252.130.253</li>
            <li>Альтернативный DNS сервер: 80.252.130.254</li>
            <li>Подключение к VPN по протоколу L2TP (авторизация CHAP, без шифрования трафика)</li>
            <li>IP адрес сервера VPN сервера: L2TP.FLEX.RU</li>
            <li>В настройках VPN соединения все адреса получаются автоматически</li>
            <li>Рекомендуемое значение MTU для L2TP (если требуется указать): 1460</li>
            <li>Имя пользователя (login): согласно договору</li>
            <li>Пароль (password): ваш пароль для подключения к Интернету</li>
          </ul>
          <p> В случае если ваша операционная система не поддерживает L2TP (Windows 95/98/ME, и возможно другие) - рекомендуем использовать роутер или стороннее ПО для подключения к L2TP (например Cisco VPN Client).</p>
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

  .instruction {
    border: 1px solid rgb(175, 175, 175);
    width: 100%;
    height: 200px;
    display: flex;
    margin: 15px 0px;
  }

  .instruction:hover {
    border: 3px inset red;
    box-shadow: 0px 0px 10px rgb(0, 0, 0);
  }

</style>