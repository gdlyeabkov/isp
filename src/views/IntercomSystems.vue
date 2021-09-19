<template>
  <div>
    <Header :auth="false" :area="false" :minheight="75" :balance="0" :bonus="0" :clientId="''" :clientName="''" />
    <div class="aside">
      
    </div>
    <div class="main">
      <div style="margin-top: 25px; width:85%;">
        <div style="text-align: left;">
          <p><a style="cursor: pointer;" @click="$router.push({ name: 'Home' })">ISP</a>> Домофоны > Техническое обслуживание домофонной системы</p>
          <p class="newsHeader">
            Техническое обслуживание домофонной системы
          </p>
          <div>
            <p>
              Услуга технического обслуживания домофонной системы оказывается физическим лицам. Адреса, где возможно воспользоваться данной услугой, уточняйте у операторов по телефону.
            </p>

              <p style="font-weight: bolder;">Тарифы:</p>
              <p>Стоимость подключения домофонных систем для любого адреса:</p>
              <table bgcolor="white" border="1">
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Тип услуги</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Стоимость, руб.</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Подключение домофона (Трубка исполнителя, при наличии кабеля от слаботочного ящика до места установки аудио/видео устройства)</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">1850</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Подключение домофона (трубка абонента, при наличии кабеля от слаботочного ящика до места установки аудио/видео устройства)</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">1200</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Подключение видеодомофона (Видеопанель абонента. Обратите внимание : для питания монитора требуется 220V)</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">2450</td>
                </tr>
              </table>
              
              <p class="newsHeader">Стоимость дополнительных работ по подключению к системе «домофон»:</p>
              <table bgcolor="white" border="1">
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Тип услуги</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Стоимость, руб.</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Стоимость мск*, мсц* ( При первичном подключении)</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">1700</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Стоимость мск*, мсц* ( При замене неисправного )</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">1250</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Протяжка кабеля от слаботочного шкафа до квартиры, Сверление отверстий в стене толщиной до 300 мм, d=8-10 мм для ввода кабеля в квартиру, установка устройства на стену.</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">800</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Замена аудиотрубки после гарантийного срока или механических повреждений.</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">1400</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Платный выезд для диагностики оборудования или доставка ключей</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">500</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Установка вызывной панели (БЕЗ ПРОТЯЖКИ КАБЕЛЯ)</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">1200</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Пусконаладочные работы вызывной панели ( НЕ первичная установка)</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">500</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Стоимость одного ключа ( Без доставки)</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">200</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Установка кабель-канала ( ЦЕНА ЗА М. включая кабель-канал)</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">120</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Переоформление договора, повторное подключение</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">350</td>
                </tr>
              </table>

              <p class="newsHeader">Стоимость ежемесячного обслуживания домофонных систем и систем коллективного приема телевидения (СКПТ) по следующим адресам:</p>
              <table bgcolor="white" border="1">
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Адрес оказания услуг</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Услуга Домофон/СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Стоимость с 01.07.21</td>
                </tr>
                
                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">1</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Комсомольская 22А</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">2</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Комсомольская 20Б</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">3</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Комсомольская, д.10</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">4</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Академика Фортова, д.1</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">5</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">1-я Ревсобраний, дома. 6А, 6Б</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">6</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Юбилейная, д.16А</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">7</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Социалистическая, д. 3</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">8</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Московская ул. 1 кв.1-20</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">9</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">28 июня, 9А</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">10</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Самодеятельная д.2В, корп.3, 4</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">130</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">55</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">11</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">г.п. Обухово, ул.Энтузиастов, д.5</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">12</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Щемилово Орлова ул. 2,4, 6, 8, 10, 26, мкр-рн Новое бисерово-2 - 1-17</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">60</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">13</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Шевченко, 1, 5 подъезд, квартиры 257-320</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">60</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">14</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Кирова, 21- 3,4 подъезды, квартиры 193-272</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">55</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">55</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">15</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Кирова, 21- 3,4 подъезды, квартиры 193-272</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">55</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">45</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">16</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Чехова, д.4</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">17</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Чехова, д.9</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">130</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">130</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">18</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">ул.Новая, д.6</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">55</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">19</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">60 Лет Победы, д.10</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">60</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">20</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">60 Лет Победы, д.12; Ялагина 13, 13А, 13Б</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">60</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">21</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Спортивная, д.26, 26А</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">22</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Лесная, д.27</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">55</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">60</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">23</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">ул.Ленина, д.08</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">24</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">ул.Ленина, д.08А</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">25</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">ул. Ногинское ш. 36к4</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">55</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">26</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">ул. Захарченко, д. 8, 10</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">55</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">27</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Федурново,«МАРЗ», дома 8, 9, 10</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">60</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">55</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">28</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Черное, ул. Агрогородок, дома: 7, 18, 19, 20, 32</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">70</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

                <tr>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">29</td>
                  <td rowspan="2" style="border: 1px solid rgb(0, 0, 0);">Черное, ул. Агрогородок, д. 7</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">СКПТ</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>
                <tr>
                  <td style="border: 1px solid rgb(0, 0, 0);">Домофон</td>
                  <td style="border: 1px solid rgb(0, 0, 0);">50</td>
                </tr>

              </table>
              
              <p>Услуга технического обслуживания домофонных систем оказывается ООО «ФлексКомм» (ГК «ФЛЕКС»)</p>
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