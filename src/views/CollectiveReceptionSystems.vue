<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a> > Телевидение > Системы коллективного приема</p>
          <p class="newsHeader">
            Системы коллективного приема
          </p>
          <div>
            <p>
              Услуга технического обслуживания системы коллективного приема телевидения оказывается физическим лицам. Адреса, где возможно воспользоваться данной услугой, уточняйте у операторов по телефону.
              <p class="newsHeader">
                Тарифы
              </p>
              <p>
                Разовые платежи при подключении к системе коллективного приема телевидения:
              </p>
              <table bgcolor="white" >
                <tr style="height: 75px">
                  <td style="width: 375px; font-weight: bolder; border: 1px solid rgb(0, 0, 0);">
                    Единовременный платеж за первичное подключение квартиры к уже существующей абонентской распределительной сети кабельного телевидения
                  </td>
                  <td style="width: 95px; font-weight: bolder; border: 1px solid rgb(0, 0, 0);">
                    1 точка
                  </td>
                  <td style="width: 95px; font-weight: bolder; border: 1px solid rgb(0, 0, 0);">
                    350 руб.
                  </td>
                </tr>
                <tr style="height: 75px">
                  <td style="width: 375px; font-weight: bolder; border: 1px solid rgb(0, 0, 0);">
                    Единовременный платеж за за первичное подключение квартиры с прокладкой кабеля от слаботочного шкафа до квартиры, включая кабель до 20м, после 20м = 25 рублей за м.
                  </td>
                  <td style="width: 95px; font-weight: bolder; border: 1px solid rgb(0, 0, 0);">
                    1 точка
                  </td>
                  <td style="width: 95px; font-weight: bolder; border: 1px solid rgb(0, 0, 0);">
                    1150 руб.
                  </td>
                </tr>
              </table>
              <p>
                Периодические платежи:
              </p>
              <table bgcolor="white" >
                <tr style="height: 75px">
                  <td style="width: 375px; font-weight: bolder; border: 1px solid rgb(0, 0, 0);">
                    Ежемесячная абонентская плата	
                  </td>
                  <td style="width: 275px; border: 1px solid rgb(0, 0, 0);">
                    от 50 руб./мес.*
                  </td>
                </tr>
              </table>
              <p>
                *- сумма ежемесячного платежа зависит от адреса подключения, точную стоимость  уточняйте в абонентском отделе
              </p>
              <p>
                Стоимость дополнительных услуг:
              </p>
            
            <table width="75%" style="text-align: center; margin: auto;" bgcolor="white">
              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  1  
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  2  
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  3  
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  4  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  5  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  6  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  7  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  8  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  9  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  10  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>
            </table>

            <p class="newsHeader">
              Стоимость расходных материалов при монтаже (подключении) к системе коллективного приема телевидения:
            </p>
            <table width="75%" style="text-align: center; margin: auto;" bgcolor="white">
              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  1  
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  2  
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  3  
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  4  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  5  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  6  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  7  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>
            </table>

            <p class="newsHeader">
              Стоимость ежемесячного обслуживания домофонных систем и систем коллективного приема телевидения (СКПТ) по следующим адресам:
            </p>
            <table width="75%" style="text-align: center; margin: auto;" bgcolor="white">
              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  1  
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  2  
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  3  
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td style="border: 1px solid rgb(0, 0, 0);">
                  4  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  5  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  7  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  8  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  9  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  10  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  11  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  12  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  13  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  14  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  15  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  16  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  17  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  18  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  19  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  20  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  21  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  22  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  23  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  24  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  25  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  26  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  27  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  28  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>

              <tr>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  29  
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  Черное, ул. Агрогородок, д. 7
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  ДМФ 
                </td>
                <td  style="border: 1px solid rgb(0, 0, 0);">
                  50
                </td>
              </tr>
            </table>
            <p>
              Услуга технического обслуживания системы коллективного приема телевидения оказывается ООО «ФлексКомм» (ГК «ФЛЕКС»)
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