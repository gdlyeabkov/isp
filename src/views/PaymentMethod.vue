<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a> > Способы оплаты услуг</p>
          <p class="newsHeader">
            Способы оплаты услуг
          </p>
          <div>
            <p style="font-weight: bolder;">
              Оплата банковскими картами                
            </p>
            <img style="margin: 0px 5px;" width="75px" src="https://flex.ru/media/pic/customer/pays/visa50.png" alt="">
            <img style="margin: 0px 5px;" width="75px" src="https://flex.ru/media/pic/customer/pays/mastercard50.png" alt="">
            <img style="margin: 0px 5px;" width="150px" src="https://flex.ru/media/pic/customer/pays/mir_logo.png" alt="">
            <p>
              Оплатить услуги можно с помощью банковских карт международных платёжных систем Visa International, MasterCard International, а так же Национальной платежной карты «Мир». При оплате банковской картой безопасность платежей гарантирует процессинговый центр <span style="color: rgb(0, 0, 255);">Best2Pay</span>.
            </p>
            <p>
              Приём платежей происходит через защищённое безопасное соединение, используя протокол TLS 1.2. Компания <span style="color: rgb(0, 0, 255);">Best2Pay</span> соответствует международным требованиями PCI DSS для обеспечения безопасной обработки реквизитов банковской карты плательщика. Ваши конфиденциальные данные необходимые для оплаты (реквизиты карты, регистрационные данные и др.) не поступают во «ФЛЕКС», их обработка производится на стороне процессингового центра <span style="color: rgb(0, 0, 255);">Best2Pay</span> и полностью защищена.
            </p>
            <p>
              Никто, в том числе «ФЛЕКС», не может получить банковские и персональные данные плательщика.
            </p>
            <p>
              При оплате услуг банковской картой возврат денежных средств производится на ту же самую карту, с которой был произведён платёж.
            </p>
            <p>
              Важно! В целях безопасности, оплата при помощи банковских карт осуществляется в Вашем <span style="font-weight: bolder;">Личном Кабинете.</span> Оплатить >>
            </p>
            <div style="display: flex;">
              <div>
                <p style="font-weight: bolder;">
                  QIWI Кошелек
                </p>
                <img width="250px" src="https://flex.ru/media/pic/customer/pays/qiwi_koshelek.png" alt="">
                <p>
                  С <span style="color: rgb(0, 0, 255);">QIWI Кошелек</span> вы можете  быстро, безопасно пополнить счет через <span style="color: rgb(0, 0, 255);">web-</span> и <span style="color: rgb(0, 0, 255);">мобильный</span> сайты, <span style="color: rgb(0, 0, 255);">приложения для мобильных устройств</span>, социальных сетей, <span style="color: rgb(0, 0, 255);">SMS-команды</span> и QIWI Терминалы.
                  QIWI Wallet легко <span style="color: rgb(0, 0, 255);">пополнить</span> без комиссии в QIWI Терминалах и терминалах партнеров, салонах сотовой связи, супермаркетах, банкоматах, через интернет-банк.
                  Совершать платежи вы можете не только со счета QIWI Wallet, но и банковской картой, с  лицевого счета мобильного телефона, наличными. 
                  Если у вас еще нет QIWI Wallet, вы можете зарегистрировать его на <span style="color: rgb(0, 0, 255);">сайте</span> или в любом из приложений за минуту.
                </p>
              </div>
              <div>
                <p style="font-weight: bolder;">
                  QIWI Терминал
                </p>
                <img width="250px" src="https://flex.ru/media/pic/customer/pays/qiwi_logo.png" alt="">
                <p>
                  Пополните счет в ближайшем QIWI Терминале. QIWI Терминалы установлены рядом с домом, в магазинах, торгово-развлекательных центрах, кинотеатрах, АЗС, отделениях ГИБДД и других общедоступных местах по всей России. Их легко узнать по трем большим кнопкам на экране.
                  Удобный интерфейс QIWI Терминала позволяет платить легко и быстро: достаточно найти нужную услугу через кнопку «Поиск», ввести необходимые данные и внести наличные. Деньги будут зачислены моментально.
                  Карта расположения терминалов и контактная информация доступна на специальной странице <span style="color: rgb(0, 0, 255);">qiwi.com</span>
                </p>
              </div>
            </div>
            <p style="font-weight: bolder;">
              Оплата в ООО Сеть Связной
            </p>
            <img width="150px" src="https://flex.ru/media/pic/customer/pays/svyaznoy.png" alt="">
            <p>
              Оплатить услуги можно наличными на кассе в салонах Связной или через терминалы, расположенные в салонах. Ознакомиться со списком салонов Связной можно по ссылке www.svyaznoy.ru/shops. Оплата производится без комиссии. Внесенные средства зачисляются на счет в течение нескольких минут.
            </p>
            <p style="font-weight: bolder;">
              Оплата КиберПлат (CyberPlat)
            </p>
            <img width="150px" src="https://flex.ru/media/pic/customer/pays/cyberplat.gif" alt="">
            <p>
              Интегрированная универсальная мультибанковская система CyberPlat® («КиберПлат») — исторически первая российская система электронных платежей. Первый онлайновый платеж был проведен 18 марта 1998 года в пользу компании «Гарант-парк», а первый платеж в пользу оператора сотовой связи «Билайн» был осуществлен 12 августа 1998 года. К настоящему моменту CyberPlat® («КиберПлат») работает на рынке электронных платежей уже 17 лет и является самой крупной в России и странах СНГ надежной и отлаженной системой электронных платежей.
            </p>
            <p>
              На данный момент общая сеть пунктов приема платежей CyberPlat® ("КиберПлат") составляет свыше 840 000 точек, принимающих наличные платежи в пользу ведущих операторов мобильной и фиксированной связи, коммерческого телевидения и провайдеров различных услуг.
            </p>
            <div style="display: flex;">
              <div>
                <p style="font-weight: bolder;">
                  Оплата "WebMoney"
                </p>
                <img width="150px" src="https://flex.ru/media/pic/customer/pays/wmlogo50.png" alt="">
                <p>
                  Владельцам электронных кошельков WebMoney свой баланс можно пополнить из своего кошелька. В открывшейся странице, введите ID пользователя, (код пользователя (4-6 цифр обычно), посмотреть который вы можете в Вашем Личном Кабинете.) затем желаемую сумму и следуйте инструкциям системы. Пополнить.
                </p>
                <p style="font-weight: bolder;">
                  Оплата «Яндекс деньги»
                </p>
                <img width="150px" src="https://flex.ru/media/pic/customer/pays/YAndeks-Dengi.jpg" alt="">
                <p>
                  Яндекс.Деньги — доступный и безопасный способ платить за товары и услуги через интернет. На сайте Яндекс.Денег можно оплатить квитанцию, кредит или штраф, перевести или вывести деньги, а также купить виртуальную банковскую карту.
                </p>
                <span style="color: rgb(0, 0, 255);">ФЛЕКС на Яндекс.Деньги</span>
              </div>
              <div>
                <p style="font-weight: bolder;">
                  Оплата через «C!ber Pay»
                </p>
                <img width="150px" src="https://flex.ru/media/pic/customer/pays/CiberPay.jpg" alt="">
                <p>
                  Для оплаты услуг в открывающихся окнах терминала последовательно выберите пункты:
                </p>
                <p>
                  Оплата услуг → Интернет, Телефония → ФЛЕКС
                </p>
                <p>
                  При внесении платежа в качестве идентификатора указывайте код пользователя (4-6 цифр обычно), посмотреть который вы можете в Вашем Личном Кабинете. Обязательно сохраняйте чек до поступления средств на счет. В случае возникновения проблем с прохождением платежа, на чеке указывается номер телефона, позвонив по которому вы можете узнать судьбу вашего платежа.
                </p>
                <p style="font-weight: bolder;">
                  Оплата через Сбербанк Онлайн:
                </p>
                <img width="150px" src="https://flex.ru/media/pic/customer/pays/sberonline.png" alt="">
                <p>
                  Оплату услуг ООО «ФЛЕКС» можно производить с помощью системы "Сбербанк Онлайн".
                </p>
              </div>
            </div>
            <p style="font-weight: bolder;">
              Банковские реквизиты для перечисления денежных средств на лицевой счет Абонента:
            </p>
            <p>
              р/счет 40702810740280103013
            </p>
            <p>
              в ПАО «Сбербанк России», г. Москва
            </p>
            <p>
              к/с 30101810400000000225, БИК 044525225
            </p>
            <p style="color: rgb(255, 0, 0);">
              Обязательно указывайте номер договора и номер лицевого счета (номер лицевого счёта можно узнать в договоре или в личном кабинете).
            </p>
            <p style="font-weight: bolder;">
              Пополнение счета картами экспресс-оплаты:
            </p>
            <p>
              Пополнение счета при помощи карт оплаты осуществляется в разделе Личного кабинета - «Лицевой счет» → «Активация карты». Там же размещена инструкция по выполнению операции. Внимание! Оплата услуг при помощи карт оплаты может производиться только физическими лицами!
              Образцы карты оплаты:
            </p>
            <p style="font-weight: bolder;">
              Обращаем Ваше внимание на то, что запись «Активировать до…» не действительна. Срок действия, указанный на картах экспресс-оплаты, продлён на неограниченное время.
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
    height: 2700px;
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
    height: 2700px;
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