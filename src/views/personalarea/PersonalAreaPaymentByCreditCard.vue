<template>
  <div>
    <Header :auth="false" :area="true" :minheight="275" :balance="balance" :bonus="personalAccountBonus" :clientId="clientId" :clientName="clientName" />
    <Aside/>
    <div class="main">
      <div style="background: rgb(92,194,207); background: linear-gradient(90deg, rgba(92,194,207,1) 0%, rgba(255,255,255,1) 100%); align-self: center; width: 100%; color: rgb(255, 255, 255); font-size: 28px;">
        <p>Личный кабинет: Интернет</p>
      </div>
      <div style="margin-top: 25px; width:85%; display: flex; flex-direction: column; align-items: flex-start;">
        <p style="font-size: 20px; text-align: left;">Лицевой счет абонента № {{ clientId }}</p>
        <p>Имя пользователя: <span style="font-weight: bolder;">{{ clientName }}</span></p>
        <p>Баланс лицевого счета: <span style="font-weight: bolder;">{{ personalAccountBonus }}Ք</span></p>
        <p>Действующий тарифный план: <span style="font-weight: bolder;">{{ clientRate }}</span></p>
        <p><span style="color: rgb(0, 0, 255);">Бонусная скидка:</span> <span style="font-weight: bolder; color: rgb(255, 0, 0);">{{ personalAccountBonus }}%</span></p>
        <div style="text-align: left;">
          <p class="newsHeader">Оплата банковской картой</p>
          <img src="https://lk.flex.ru/img/payments/card/visa.png" alt="">
          <img src="https://lk.flex.ru/img/payments/card/mastercard.png" alt="">
          <span v-if="!clientCard.cardnumber.includes('error')">
            <p>Укажите сумму платежа:</p>
            <input v-model="amount" style="display: inline;" type="number" class="form-control w-25"/>
            <span>руб.</span>
          </span>
          <span v-else>
            <p style="font-weight: bolder;">
              Карта оплаты ещё не прикреплена
            </p>
          </span>
          <button @click="pay()" :disabled="clientCard.cardnumber.includes('error')" class="btn btn-light">
            Перейти к оплате
          </button>
          <p>
            Нажав "Перейти к оплате", вы будете перемещены на страницу процессингового центра для ввода реквизитов
          </p>
          <p>
            Вашей банковской карты и адреса электронной почты.
          </p>
          <p style="font-weight: bolder;">
            Важно! Не забудьте указать адрес Вашей электронной почты. На этот адрес придёт квитанция об оплате, подтверждающая факт списания денег с карты на Ваш лицевой счёт. Если Вы не укажете адрес электронной почты, платёж не будет проведён!
          </p>
        </div>
        <p style="text-align: left;">Обращаем ваше внимание, что при возврате ошибочно уплаченных денежных средств с Абонента удерживается комиссия в размере 3% понесённых оператором расходов за проведение операций по проведению денежных средств.</p>
        <p style="text-align: center; width: 100%; display: block; font-weight: bolder;">История последних операций с банковской картой</p>
        
        <!-- <table>
          <tr>
            <td style="font-weight: bolder; border: 1px solid rgb(145, 145, 145);">
              № заказа	
            </td>
            <td style="font-weight: bolder; border: 1px solid rgb(145, 145, 145);">
              сумма	
            </td>
            <td style="font-weight: bolder; border: 1px solid rgb(145, 145, 145);">
              дата и время
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid rgb(145, 145, 145);">
              <button class="btn btn-primary">
                1427684
              </button>
            </td>
            <td style="border: 1px solid rgb(145, 145, 145);">
              22,00
            </td>
            <td style="border: 1px solid rgb(145, 145, 145);">
              15.03.2019 17:12
            </td>
          </tr>
          <tr>
            <td style="border: 1px solid rgb(145, 145, 145);">
              <button class="btn btn-primary">
                1427682
              </button>	
            </td>
            <td style="border: 1px solid rgb(145, 145, 145);">
              2011,00
            </td>
            <td style="border: 1px solid rgb(145, 145, 145);">
              15.03.2019 17:08
            </td>
          </tr>
          <tr>
            <td colspan="4" style="border: 1px solid rgb(145, 145, 145);">
              Отображаются только 30 последних операций. Предоставление полного списка операций производится только по заявлению.
            </td>
          </tr>
        </table> -->
        
        <table>
          <tr>
            <td style="font-weight: bolder; border: 1px solid rgb(145, 145, 145);">
              № заказа	
            </td>
            <td style="font-weight: bolder; border: 1px solid rgb(145, 145, 145);">
              сумма	
            </td>
            <td style="font-weight: bolder; border: 1px solid rgb(145, 145, 145);">
              дата и время
            </td>
          </tr>
          <tr v-for="payment in payments.reverse().filter((pmnt, pmntIdx) => {
              return pmntIdx <= 29
            }).reverse()" :key="payment.order">
            <td style="border: 1px solid rgb(145, 145, 145);">
              <button class="btn btn-primary">
                {{ payment.orderNumber }}
              </button>
            </td>
            <td style="border: 1px solid rgb(145, 145, 145);">
              {{ payment.amount }}Ք
            </td>
            <td style="border: 1px solid rgb(145, 145, 145);">
              {{ `${payment.date.split(' ')[0].split('-')[2]}.${payment.date.split(' ')[0].split('-')[1]}.${payment.date.split(' ')[0].split('-')[0]} ${payment.date.split(' ')[1].split(':')[0]}:${payment.date.split(' ')[1].split(':')[1]}` }}
            </td>
          </tr>
          <tr>
            <td colspan="4" style="border: 1px solid rgb(145, 145, 145);">
              Отображаются только 30 последних операций. Предоставление полного списка операций производится только по заявлению.
            </td>
          </tr>
        </table>

        <div style="text-align: left;">
          <p>
            При оплате банковской картой безопасность платежей гарантирует процессинговый центр Best2PayBest2Pay.
          </p>
          <p>
            Приём платежей происходит через защищённое безопасное соединение, используя протокол TLS 1.2. Компания Best2Pay соответствует международным требованиями PCI DSS для обеспечения безопасной обработки реквизитов банковской карты плательщика. Ваши конфиденциальные данные необходимые для оплаты (реквизиты карты, регистрационные данные и др.) не поступают в интернет-магазин, их обработка производится на стороне процессингового центра Best2Pay и полностью защищена.
          </p>
          <p>
            Никто, в том числе ООО «ФЛЕКС», не может получить банковские и персональные данные плательщика.
          </p>
          <p>
            При оплате заказа банковской картой возврат денежных средств производится на ту же самую карту, с которой был произведён платёж.
          </p>
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
import Aside from '@/components/Aside.vue'

import * as jwt from 'jsonwebtoken'

export default {
  name: 'PersonalArea',
  data(){
    return {
      _id: '',
      clientId: '411269',
      clientName: 'all-4973',
      clientRate: 'Супер u100M/399р',
      personalAccountBonus: 221.5,
      balance: 0,
      clientCard: {
        cardnumber: "error",
        pincode: "error",
      },
      amount: 0,
      payments: [],
      token: window.localStorage.getItem("isptoken"),
    }
  },
  mounted(){
    jwt.verify(this.token, 'ispsecret', async (err, decoded) => {
      if (err) {
        this.$router.push({ name: "Home" })
      } else {
        console.log(`decoded.clientId: ${decoded.clientId}`)
        fetch(`http://localhost:4000/clients/get/?clientid=${decoded.clientId}`, {
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
          this.clientId = JSON.parse(result).client.clientId 
          this.clientName = JSON.parse(result).client.name
          
          // this.clientRate = JSON.parse(result).client.rate
          this.clientRate = JSON.parse(result).rate.name

          this.personalAccountBonus = JSON.parse(result).client.personalAccountBonus
          this.balance = JSON.parse(result).client.balance

          if(JSON.parse(result).client.cards[0] !== null && JSON.parse(result).client.cards[0] !== undefined){
            this.clientCard = JSON.parse(result).client.cards[0]
          }

          this.payments = JSON.parse(result).client.payments

          fetch(`http://localhost:4000/clients/connections/add/?clientid=${this.clientId}`, {
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
            
          })
        
        })
      }
    })
  },
  methods: {
    pay(){
      fetch(`http://localhost:4000/clients/cards/pay/?clientid=${this.clientId}&amount=${this.amount}`, {
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
        if(JSON.parse(result).status.includes('OK')){
          this.$router.push({ name: 'PersonalArea' })
        } else {
          alert('Оплата прошла неудачно')
        }
      })
    },
    plugIn(){

    },
    toPage(pageName){
      this.$router.push({ name: pageName })
    },
    logout(){
      this.token = jwt.sign({
          clientId: this.clientid
        }, 'ispsecret', { expiresIn: 1 })
        localStorage.setItem('isptoken', this.token)
      this.toPage('Home')
    },
  },
  components: {
    Header,
    Aside,
    Footer
  }

}
</script>
<style scoped>
  .aside {
    float: left;
    height: 2300px;
    width: 25%;
    background-color: rgb(205, 205, 205);
  }
  .main {
    background-color: rgb(225, 225, 225);
    width: 75%;
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

  .aside > p {
    color: rgb(0, 0, 255);
  }

</style>