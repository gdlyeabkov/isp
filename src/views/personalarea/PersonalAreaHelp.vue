<template>
  <div>
    <Header :auth="false" :area="true" :minheight="275" :balance="balance" :bonus="personalAccountBonus" :clientId="clientId" :clientName="clientName" />
    <Aside />
    <div class="main">
      <div style="background: rgb(92,194,207); background: linear-gradient(90deg, rgba(92,194,207,1) 0%, rgba(255,255,255,1) 100%); align-self: center; width: 100%; color: rgb(255, 255, 255); font-size: 28px;">
        <p>Личный кабинет: Интернет</p>
      </div>
      <div style="text-align: left; margin-top: 25px; width:85%; display: flex; flex-direction: column; align-items: flex-start;">
        <p style="width:45%; font-weight: bolder;"> 
          Справочная система «Личного Кабинета»
        </p>
        <p style="cursor: pointer; width:45%; color: rgb(0, 0, 255);" @click="currentArticle = 1"> 
          Краткое описание разделов
        </p>
        <p style="cursor: pointer; width:45%; color: rgb(0, 0, 255);" @click="currentArticle = 2"> 
          Функциональные отличия с предыдущей версией
        </p>
        <p style="cursor: pointer; width:45%; color: rgb(0, 0, 255);" @click="currentArticle = 3"> 
          Возможные технические проблемы
        </p>
        <p style="cursor: pointer; width:45%; color: rgb(0, 0, 255);" @click="$router.push({ name: 'Support' })"> 
          Инструкции по настройкам доступа к локальной сети и к сети интернет
        </p>

        <div v-if="currentArticle === 1">
          <p style="font-weight: bolder;">
            Содержание:
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Новости и уведомления
          </p>
          <div style="margin-left: 45px;">
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 4">
              описание раздела
            </p>
          </div>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Лицевой счет
          </p>
          <div style="margin-left: 45px;">
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 5">
              описание раздела
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 6">
              Статистика платежей
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 7">
              Статистика списаний
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 8">
              Обещанный платеж
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 9">
              Активация карты
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 10">
              Финансовые документы
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 11">
              Оплата банковской картой
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 12">
              Оплата услуг
            </p>
          </div>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Интернет и сеть
          </p>
          <div style="margin-left: 45px;">
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 13">
              описание раздела
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 14">
              Данные по трафику
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 15">
              Данные по соединениям
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 16">
              Тарифный план
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 17">
              Ускорение интернета
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 18">
              Смена пароля на доступ в сеть
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 19">
              Блокировка учетной записи
            </p>
          </div>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Дополнительные услуги
          </p>
          <div style="margin-left: 45px;">
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 20">
              описание раздела
            </p>
          </div>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Информация и помощь
          </p>
          <div style="margin-left: 45px;">
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 21">
              описание раздела
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 22">
              Отслеживание заявок в тех.поддержку
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 23">
              Смена пароля на доступ в «Личный Кабинет»
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 24">
              Помощь по личному кабинету
            </p>
            <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 25">
              Настройки
            </p>
          </div>
        </div>
        <div v-else-if="currentArticle === 2">
          <p style="font-weight: bolder;">
            Содержание:
          </p>
          <div style="margin-left: 45px;">
            <p @click="currentArticle = 26" style="cursor: pointer; color: rgb(0, 0, 255);">
              Новые возможности
            </p>
            <p @click="currentArticle = 27" style="cursor: pointer; color: rgb(0, 0, 255);">
              Изменения в ранее существовавшем функционале
            </p>
            <p @click="currentArticle = 28" style="cursor: pointer; color: rgb(0, 0, 255);">
              Технические отличия
            </p>
          </div>
        </div>
        <div v-else-if="currentArticle === 3">
          <p style="font-weight: bolder;">
            Возможные технические проблемы
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            При попытке входа в «Личный Кабинет» выдает ошибку доступности базы данных
          </p>
          <p>
            Такая ситуация возникает в случае, если проводятся технические работы, или же возникла непредвиденная авария. Повторную попытку входа в «Личный Кабинет» не имеет смысла делать ранее чем через час после возникновения аварийной ситуации,
          </p>
          <p>
            Во время навигации по «Личному Кабинету» возникают ошибки отображения тех или иных данных
          </p>
          <p>
            Такая ситуация возникает в случае, если проводятся технические работы, или же возник непредвиденный сбой. Рекомендуется продолжить работу с «Личным Кабинетом» минут через 10-15.
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Во время использования интерактивного функционала (например управление услугами) ничего не происходит
          </p>
          <p>
            Для комфортной работы рекомендуется использовать свежие версии браузеров (Internet Explorer версии не ниже 9, Opera версии 11, FireFox версии 4 и т.д.). Обязательным условием возможности нормальной работы является поддержка JavaScript. Обязательно проверьте, чтобы у вас была включена поддержка JavaScript.
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Во время использования интерактивного функционала (например управление услугами) возникают различные ошибки
          </p>
          <p>
            Данная проблема может возникать по ряду причин: некорректная работа JavaScript в браузере, или же технические работы на сервере. Не исключены и непредвиденные ошибки. Первым делом проверьте на наличие обновлений для вашего браузера, и соответственности обновите его при необходимости. Если обновление браузера не решает проблем, попробуйте выйти (через пункт "Выход" в меню) и сново войти в «Личный Кабинет» (в этом случае будет произведен сброс cookies для сайта). В случае, если вышеперечисленные меры не решили возникшей проблемы, подробно опишите ее в письме на адрес web@flex.ru, по возможности приложите скриншот возникшей ошибки.
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            P.S.
          </p>
          <p>
            В случае возникновения любых других проблем при работе с «Личным Кабинетом», подробно опишите ситуацию в письме на адрес web@flex.ru. Проблема будет решена в индивидуальном порядке, а ее решение в последующем будет опубликовано в данной справочной системе.
          </p>
        </div>
        <div v-else-if="currentArticle === 4">
          <p style="font-weight: bolder;">
            Новости и уведомления
          </p>
          <p @click="currentArticle = 1" style="cursor: pointer; color: rgb(0, 0, 255);">
            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            В разделе «Новости и уведомления» публикуется информация как общеуведомительного характера, так и индивидуальные сообщения (например о причинах блокировки учетной записи)
          </p>
        </div>
        <div v-else-if="currentArticle === 5">
          <p style="font-weight: bolder;">
            Лицевой счет
          </p>
          <p @click="currentArticle = 1" style="cursor: pointer; color: rgb(0, 0, 255);">
            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            В раздел «Лицевой счет» собраны баланс вашего лицевого счета, данные по периодическим и разовым списаниям, данные по платежам, а так же способы оплаты услуг.
          </p>
          <p>
            Ключевыми данными по разделу считаются код пользователя, имя пользователя и баланс лицевого счета.
          </p>
          <p>
            Код пользователя – уникальный идентификатор вашего лицевого счета, по которому производится оплата услуг (например пополнение баланса лицевого счета через терминалы или электронные платежные системы).
          </p>
          <p>
            Имя пользователя отображает «логин», который зафиксирован за вашим лицевым счетом, и используется для доступа в интернет, а так же для доступа в «Личный Кабинет».
          </p>
        </div>
        <div v-else-if="currentArticle === 6">
          <p style="font-weight: bolder;">
            Статистика платежей
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">
            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            – отображает историю совершенных платежей, в том числе обещаные платежи.
          </p>
          <p>
            Для отображения данных необходимо выбрать период для отображения из меню.
          </p>
        </div>
        <div v-else-if="currentArticle === 7">
          <p style="font-weight: bolder;">
            Статистика списаний
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">
            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            – отображает историю списаний с лицевого счета. Здесь отображаются периодические списания по абонентской плате, списания за подключенные доп.услуги, а так же разовые списания за то или иное обслуживание.
          </p>
          <p>
            Для отображения данных необходимо выбрать период для отображения из меню.
          </p>
        </div>
        <div v-else-if="currentArticle === 8">
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Обещанный платеж
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">
            Назад
          </p>
          <p>
            «Обещанный платеж» – временно пополняет баланс на сумму 3 у.е. Сумма платежа автоматически вычитается через 3ое суток с момента активации услуги, или сразу жи при пополнении баланса, если пополнение произошло раньше автоматического вычета.
          </p>
        </div>
        <div v-else-if="currentArticle === 9">
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Активация карты
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">
            Назад
          </p>
          <p>
            – представляет возможность пополнения лицевого счета посредством активации карты оплаты.
          </p>
          <p>
            Для активации карты оплаты введите ее номер и пин-код в соответствующие поля формы. По завершению ввода нажмите кнопку "Активировать карту оплаты", после чего дождитесь ответа от сервера. В случае если сервер ответил что ваша карта была уже активирована ранее (но вы уверены что не вами), обратитесь в абонентский отдел компании. Если же сервер выдал ошибку при активации карты, обратитесь в службу технической поддержки.
          </p>
        </div>
        <div v-else-if="currentArticle === 10">
          <p style="font-weight: bolder;">
            Финансовые документы
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">
            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            – отображает список доступных финансовых документов (счета-фактуры, акты, т.п.).
          </p>
          <p>
            Для отображения данных необходимо выбрать период для отображения из меню.
          </p>
        </div>
        <div v-else-if="currentArticle === 11">
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Оплата банковской картой
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">
            Назад
          </p>
          <p>
            – предоставляет возможность оплаты услуг банковскими картами платежных систем VISA и MasterCard.
          </p>
          <p>
            В случае, если активирована опция "сохранить карту", и платеж проведен успешно, сохраняется цифровой ключ, посредством которого можно проводить дальнейшие операции оплаты без перехода на страницу процессиногового центра (т.е. без подключения к сети интернет). Для безопасности проводимых операций, операции с "сохраненной" картой необходимо подтверждать CVV2/CVC кодом.
          </p>
          <p>
            Абоненту предоставляется история последних 10 операций с банковскими картами. Для получения любой дополнительной информации по операциям необходимо обратиться в абонентскую службу с соответствующим заявлением. Любая информация по операциям с банковскими картами предоставляется только с письменного заявления и только владельцу учетной записи или банковской карты при предъявлении соответствующих документов.
          </p>
        </div>
        <div v-else-if="currentArticle === 12">
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Способы оплаты
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">
            Назад
          </p>
          <p>
            – предоставляет информацию по возможным способам оплаты услуг.
          </p>
          <p>
            Обязательно ознакомьтесь с возможными вариантами оплаты. Другие способы оплаты могут не работать, если они не представлены на этой странице.
          </p>
        </div>
        <div v-else-if="currentArticle === 13">
          <p style="font-weight: bolder;">
            Интернет и сеть
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">
            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Раздел «Интернет и сеть» собирает в себе информацию по основной услуге - доступ в сеть Интернет.
          </p>
          <p>
            Помимо получения информации по действующему тарифному плану и потреблению трафика, в данном разделе вы можете запланировать смену тарифного плана, поменять пароль на доступ в сеть интернет, а так же приостановить действие услуги.    
          </p>
        </div>
        <div v-else-if="currentArticle === 14">
          <p style="font-weight: bolder;">
            Данные по трафику
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">
            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            – отображает информацию по потреблению трафику, а так же по остатку вложенного трафика, если таковой имеется.
          </p>
          <p>
            Помимо общей информации по трафику, отображает текущий тариф, запланированный на смену тариф (если было планирование), статический IP адрес, а так же IP адрес привязки учетной записи.
          </p>
        </div>
        <div v-else-if="currentArticle === 15">
          <p style="font-weight: bolder;">
            Данные по соединениям
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">
            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            – отображает историю соединений, с указанием потребленного трафика, а так же списанных за соедиенения средств.
          </p>
          <p>
            В каждом соединении одна из величин потребляемого трафика (входящий или исходящий) выделяется жирным - именно по этому значению, ведется подсчет потребления трафика, а так же списания за соединение. В соединениях учитывается наибольшая величина входящего или исходящего трафика.
          </p>
        </div>
        <div v-else-if="currentArticle === 16">
          <p style="font-weight: bolder;">
            Тарифный план
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">

            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            – на данной странице отображается действующий тарифный план, запланированный на смену тарифный план (если было планирование), а так же предоставляется возможность планирования смены тарифного плана из списка доступных.
          </p>
          <p>
            В случае, если список доступных тарифных планов для планирования пуст, для смены тарифного плана потребуется обращение в абонентский отдел с письменным заявлением.
          </p>
          <p>
            ППланирование смены тарифного плана может быть осуществлено в любое время, однако, непосредственно смена тарифного плана будет произведена первого числа следующего месяца, если только иное не предусмотрено тарифной политикой компании.
          </p>
        </div>
        <div v-else-if="currentArticle === 17">
          <p style="font-weight: bolder;">
            Ускорение интернета
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">

            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            – позволяет временно удвоить скорость подключения к интернету, без необходимости переподключения и смены тарифного плана.
          </p>
          <p>
            При активации услуги, с вашего лицевого счета списывается сумма в размере суточной величины абонентской платы. Удвоение скорости производится с момента активации услуги и длится 12 часов.
          </p>
          <p>
            Данная функция может отсутствовать на вашей странице, - зависит от тарифной политики компании, а так же от действующего тарифа.
          </p>
        </div>
        <div v-else-if="currentArticle === 18">
          <p style="font-weight: bolder;">
            Смена пароля на доступ в сеть
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">

            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            – на данной странице вы можете сменить действующий пароль для доступа в сеть интернет на новый.
          </p>
          <p>
            Рекомендованная длина пароля - от 8 до 16 символов
          </p>
          <p>
            Крайне не рекомендуется использовать кириллицу, а так же специальные символы при задании пароля.
          </p>
          <p>

            Смена пароля на доступ в сеть интернет не влияет на вход в «Личный Кабинет»
          </p>
        </div>
        <div v-else-if="currentArticle === 19">
          <p style="font-weight: bolder;">              
            Блокировка учетной записи

          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">
            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            – Услуга временного блокирования доступа в интернет предназначена для временного приостановления действия услуги доступа в интернет. При таком блокировании доступ в интернет прекращается, при этом прекращаются списания абонентской платы за услугу доступа в интернет. Списание абонентской платы за обслуживание абонентской линии (за сеть) не приостанавливается.
          </p>
          <p>
            На данной странице отображается текущее состояние учетной записи, а так же, если предусмотрено политикой оператора, возможность самостоятельного управления блокировкой.

          </p>
          <p>
            Блокировка учетной записи (временная) не является полным приостановлением предоставляемых услуг. Приостанавливается только услуга по доступу в сеть интернет. Все доп.услуги продолжают действовать в полном объеме, с соответствующими списаниями абонентской платы.
          </p>
        </div>
        <div v-else-if="currentArticle === 20">
          
          <p style="font-weight: bolder;">              
            Дополнителньые услуги
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">

            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            В раздел «Дополнительные услуги» собраны услуги, не привязанные к основной услуге доступа в сеть интернет.
          </p>
          <p>

            Наличие тех или иных доп.услуг, а так же возможность управления ими зависит от действующей политики оператора.
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Управление доп.услугами производится соответствующими иконками:
          </p>
          <p>
            • Для подключения доп.услуги, нажмите на иконку Подключить услугу и дождитесь подтверждения.

          </p>
          <p>
            • Если услуга подключена, в графе "состояние услуги" появится иконка Услуга подключена

          </p>
          <p>
            • Для отключения доп.услуги, нажмите на иконку Отключить услугу и дождитесь подтверждения.

          </p>
          <p>
            • Если самостоятельно управление доп.услугой невозможно, в графе "управление" будет отображаться иконка Услуга может быть отключена только через абонентский отдел. В этом случае управление доп.услугой возможно только с письменного заявления в абонентский отдел.

          </p>
          <p>
            При подключении доп.услуги возможно разовое списание стоимости подключения с лицевого счета, если такая стоимость предусмотрена доп.услугой.
          </p>
          <p>
            Списание абонентской платы по услуге, если таковая предусмотрена, производится в соответствии с предусмотренным методом списания.
          </p>
          <p>
            Описание каждой доп.услуги предоставлено непосредственно на странице доп.услуги.
          </p>
        </div>
        <div v-else-if="currentArticle === 21">
          <p style="font-weight: bolder;">
            Информация и помощь


          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">
            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Данный раздел организован для улучшения взаимодействия оператора с абонентом, начиная от возможности просмотра состояния заявки, обрабатываемой службой технической поддержки, до возможности обратной связи, позволяющей в короткие сроки получить ответ на практически любой интересующий вопрос.
          </p>
          <p>
            Возможности отслеживания состояния заявок в тех.поддержку, а так же система обратной связи могут отсутствовать на странице вашего личного кабинета - зависит от степени интеграции операторского сервиса в единую систему клиентского обслуживания группы компаний «ФЛЕКС».
          </p>
          <p>
            Помимо вышеперечисленных возможностей, данный раздел содержит справочную систему (которую вы сейчас читаете), а так же возможность индивидуальных настроек вашего личного кабинета.
          </p>
        </div>
        <div v-else-if="currentArticle === 22">
          <p style="font-weight: bolder;">
            Отслеживание состояния заявок в службу технической поддержки
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">
            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            – представляет из себя историю зарегистрированных обращений в службу технической поддержки.
          </p>
          <p>
            Возможности отслеживания состояния заявок в тех.поддержку, а так же система обратной связи могут отсутствовать на странице вашего личного кабинета - зависит от степени интеграции операторского сервиса в единую систему клиентского обслуживания группы компаний «ФЛЕКС».
          </p>
        </div>
        <div v-else-if="currentArticle === 23">
          <p style="font-weight: bolder;">
            Смена пароля на доступ в «Личный Кабинет»
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">

            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            – на данной странице вы можете сменить действующий пароль для доступа в в «Личный Кабинет» на новый.
          </p>
          <p>

            Рекомендованная длина пароля - от 8 до 16 символов.
          </p>
          <p>
            Крайне не рекомендуется использовать кириллицу, а так же специальные символы при задании пароля.
          </p>
          <p>

            Смена пароля на доступ в «Личный Кабинет» не влияет на услугу доступа в сеть интернет.
          </p>
        </div>
        <div v-else-if="currentArticle === 24">
          <p style="font-weight: bolder;">
            Помощь по личному кабинету
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">

            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            – справочная система, содержащая краткое описание существующего функционала.
          </p>
          <p>
            Если вы не нашли ответ на интересующий вопрос в данной справочной системы, вы можете направить свой вопрос по электронному адресу web@flex.ru. Наиболее частозадаваемые вопросы будут изложены в справочной системе, соответственно вместе с ответами на них. На остальные вопросы ответы будут предоставлены по электронной почте в индивидуальном порядке.
          </p>
        </div>
        <div v-else-if="currentArticle === 25">
          <p style="font-weight: bolder;">   
            Настройки «Личного Кабинета»
          </p>
          <p style="cursor: pointer; color: rgb(0, 0, 255);" @click="currentArticle = 1">

            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            – позволяет изменить предоставленные настройки «Личного Кабинета».
          </p>
          <p>
            • не отображать предупреждения о недостаточной безопасности – крайне не рекомендуемая опция, которая скрывает все предупреждения по безопасности вашего «Личного Кабинета» (например если вы используете короткий пароль).
          </p>
          <p>
            • Стартовая страница «Личного Кабинета» – позволяет задать стартовую страницу «Личного Кабинета», с которой у вас будет начинаться навигации при следующем заходе.
          </p>
        </div>
        <div v-else-if="currentArticle === 26">
          <p style="font-weight: bolder;">
            Новые возможности
          </p>
          <p @click="currentArticle = 2" style="cursor: pointer; color: rgb(0, 0, 255);">
            Назад
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Ускорение интернета
          </p>
          <p>
            Данный функционал расчитан на пользователей с низскоростными безлимитными тарифными планами. Благодаря данной возможности, можно временно удвоить скорость подключения к сети интернет без смены тарифного плана.
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Блокировка учетной записи
          </p>
          <p>
            Данная возможность позволяет вам временно приостановить услугу доступа в интернет. Вы блокируете доступ в интернет, и не можете воспользоваться услугой, при этом приостанавливаются списания абонентской платы за услугу доступа в интернет. Списание абонентской платы за обслуживание сети сохраняется.
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Дополнительные услуги
          </p>
          <p>
            Раздел "дополнительные услуги" позволяет управлять подпиской на различные услуги, как например антивирус DrWeb, реальный статический IP-адрес, или смс-уведомления.
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Обратная связь
          </p>
          <p>
            Данный функционал позволяет держать обратную связь с представителями компании для решения любых возникающих вопросов. В отличие от той же гостевой, возможности "обратной связи" позволяют упростить решение вопросов, т.к. все сообщения подписываются, что в свою очередь упрощает вашу идентификацию. Более того, в "обратной связи" вы можете излагать свои мысли в любой форме, без оглядки на то, как это будет воспринято другими посетителями гостевой.
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            Настройки
          </p>
          <p>
            Данный функционал позволяет изменить индивидуальные настройки «Личного Кабинета», например такие как "стартовая страница" или "отображение предупреждений".
          </p>
          <p style="font-weight: bolder; font-size: 18px; color: rgb(0, 150, 0);">
            P.S.
          </p>
          <p>
            Если вас интересует появление какого-либо нового функционала в «Личном Кабинете», вы можете изложить свои мысли в письме на адрес web@flex.ru. Ваше обращение не останется без внимания, и, возможно, ваши пожелания будут учтены при внесении дальнейших изменений в систему.
          </p>
        </div>
        <div v-else-if="currentArticle === 27">
          <p style="font-weight: bolder;">
            Изменения в ранее существовавшем функционале
          </p>
          <p @click="currentArticle = 2" style="cursor: pointer; color: rgb(0, 0, 255);">
            Назад
          </p>
          <p>
            Обратная связь
          </p>
          <p>
            Опция обратной связи из «Личного Кабинета» убрана по техническим и организационным причинам.
          </p>
          <p>
            Данные по соединениям
          </p>
          <p>
            По техническим причинам убрана возможность детализации соединений. Теперь детализацию соединений можно получить только по запросу у оператора.
          </p>
          <p>
            Антивирусная защита DrWeb
          </p>
          <p>
            Услуга вынесена в раздел "дополнителньые услуги".
          </p>
          <p>
            SMS уведомления
          </p>
          <p>
            Услуга вынесена в раздел "дополнителньые услуги".
          </p>
          <p>
            Смена пароля на доступ в «Личный Кабинет»
          </p>
          <p>
            Добавлены рекомендации по выбору нового пароля.
          </p>
        </div>
        <div v-else-if="currentArticle === 28">
          <p style="font-weight: bolder;">
            Технические отличия
          </p>
          <p @click="currentArticle = 2" style="cursor: pointer; color: rgb(0, 0, 255);">
            Назад
          </p>
          <p>
            В новой версии «Личного Кабинета» изменена система навигации в сторону упрощения и улучшения доступности всех функций системы.
          </p>
          <p>
            Улучшена совместимость между разными браузерами. Корректная работоспособность «Личного Кабинета» проверена в таких браузерах как Internet Explorer 8, Internet Explorer 9, Opera 10, Opera 11, FireFox 3.5, FireFox 4.0, Safari 3
          </p>
          <p>
            Улучшена работа механизмов асинхронной загрузки данных (AJAX), за счет интеграции с jQuery.
          </p>
          <p>
            Улучшена работа серверной обработки данных, увеличена производительность система, а так же корректность ее работы.
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

import * as jwt from 'jsonwebtoken'
import Aside from '../../components/Aside.vue'

export default {
  name: 'PersonalAreaHelp',
  data(){
    return {
      _id: '',
      clientId: '411269',
      clientName: 'all-4973',
      clientRate: 'Супер u100M/399р',
      personalAccountBonus: 221.5,
      balance: 0,
      token: window.localStorage.getItem("isptoken"),
      currentArticle: 0
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
          this.clientRate = JSON.parse(result).client.rate
          this.personalAccountBonus = JSON.parse(result).client.personalAccountBonus
          this.balance = JSON.parse(result).client.balance
        });
      }
    })
  },
  methods: {
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
    Footer,
    Aside
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