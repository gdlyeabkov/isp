<template>
  <div>
    <Header :auth="true" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
        <label for="inputName" class="labelRateField">Название тарифа</label>
        <input  v-model="rateName" type="text" id="inputName" class="form-control inputRateField" placeholder="Название тарифа" required="" autofocus="">
        <label for="inputSpeed" class="labelRateField">Скорость тарифа</label>
        <div style="display: flex;">
          <input  v-model="rateSpeed" type="number" id="inputSpeed" class="form-control inputRateField" placeholder="Скорость тарифа" required="" autofocus="">
          <span class="measure">Мб/с</span>
        </div>
        <label for="inputTV" class="labelRateField">Поддержка ТВ</label>
        <input @input="$refs.rateTVDescRef.disabled = rateTV" @change="debug()" v-model="rateTV" type="checkbox" id="inputTV" required="" autofocus="" class="inputRateField">
        <label for="inputTVDesc" class="labelRateField">Описание поддержки TV</label>
        <input v-model="rateTVDesc" ref="rateTVDescRef" :disabled="true" type="text" id="inputTVDesc" class="form-control inputRateField" placeholder="Описание поддержки TV" required="" autofocus="">
        <label for="inputWriteOff" class="labelRateField">Ежемесячное списание</label>
        <div style="display: flex;">
          <input  v-model="rateWriteOff" type="number" id="inputWriteOff" class="form-control inputRateField" placeholder="Ежемесячное списание" required="" autofocus="">
          <span class="measure">Р</span>
        </div>
        <button @click="register()" class="btn btn-lg btn-primary btn-block registerBtn">Создать новый тариф</button>
        <div class="customErros">{{ errors }}</div>
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
  name: 'RateRegiser',
  data(){
    return {
      rateName: '',
      rateSpeed: 0,
      rateTV: false,
      rateTVDesc: '',
      rateWriteOff: 299,
      errors: ''
    }
  },
  methods: {
    debug(){
      console.log(this.rateTV)
    },
    register(){
      console.log(`Регистрирую новый тариф: ${this.rateName}, ${this.rateSpeed}, ${this.rateTV}, ${this.rateWriteOff}`)
      // rateTVDesc
      fetch(`http://localhost:4000/rates/create/?ratename=${this.rateName}&ratespeed=${this.rateSpeed}&supporttv=${this.rateTV}&tvdesc=${this.rateTVDesc}&ratecost=${this.rateWriteOff}`, {
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
        if(JSON.parse(result).status.includes("OK")){
          console.log(`JSON.parse(result): ${JSON.parse(result)}`)
          this.$router.push({ name: 'Home' })
        }
      });
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

  .inputRateField {
    width: 500px;
    margin: 15px;
  }
  
  .labelRateField {
    margin-top: 35px;
  }

  .measure {
    align-self: center;
    font-weight: bold;
  }

</style>