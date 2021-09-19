import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ClientLogin from '../views/ClientLogin.vue'
import ClientRegister from '../views/ClientRegister.vue'
import RateRegister from '../views/RateRegister.vue'
import PersonalArea from '../views/PersonalArea.vue'
import Support from '../views/Support.vue'
import Feedback from '../views/Feedback.vue'
import NewsRegister from '../views/NewsRegister.vue'
import News from '../views/News.vue'
import LicenseRegister from '../views/LicenseRegister.vue'
import Licenses from '../views/Licenses.vue'
import Ads from '../views/Ads.vue'
import Regulations from '../views/Regulations.vue'
import ErrorsConnection from '../views/ErrorsConnection.vue'

import ConnectedHouses from '../views/ConnectedHouses.vue'
import TariffsForApartmentsAndHouses from '../views/TariffsForApartmentsAndHouses.vue'
import IndividualRadioChannelTariffs from '../views/IndividualRadioChannelTariffs.vue'
import ConnectionRequest from '../views/ConnectionRequest.vue'
import PaymentMethods from '../views/PaymentMethods.vue'
import ComputerOrRouterSettings from '../views/ComputerOrRouterSettings.vue'
import TurboButton from '../views/TurboButton.vue'
import TemporaryBlocking from '../views/TemporaryBlocking.vue'
import OurPartners from '../views/OurPartners.vue'
import TechnicalSupportRegulations from '../views/TechnicalSupportRegulations.vue'
import GuestBook from '../views/GuestBook.vue'
import PublicOffer from '../views/PublicOffer.vue'
import RouterInInstallments from '../views/RouterInInstallments.vue'
import InteractiveTelevisionSmotryoshka from '../views/InteractiveTelevisionSmotryoshka.vue'
import CollectiveReceptionSystems from '../views/CollectiveReceptionSystems.vue'
import MediaPlayerForSmotryoshka from '../views/MediaPlayerForSmotryoshka.vue'
import TelephoneTariffs from '../views/TelephoneTariffs.vue'
import ConnectionRequestMobile from '../views/ConnectionRequestMobile.vue'
import PaymentMethod from '../views/PaymentMethod.vue'
import SmartIntercom from '../views/SmartIntercom.vue'
import IntercomSystems from '../views/IntercomSystems.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clients/login',
    name: 'ClientLogin',
    component: ClientLogin
  },
  {
    path: '/clients/register',
    name: 'ClientRegister',
    component: ClientRegister
  },
  {
    path: '/rates/register',
    name: 'RateRegister',
    component: RateRegister
  },
  {
    path: '/client/area',
    name: 'PersonalArea',
    component: PersonalArea
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },
  {
    path: '/news/register',
    name: 'NewsRegister',
    component: NewsRegister
  },
  {
    path: '/news/list',
    name: 'News',
    component: News
  },
  {
    path: '/licenses/list',
    name: 'Licenses',
    component: Licenses
  },
  {
    path: '/licenses/register',
    name: 'LicenseRegister',
    component: LicenseRegister
  },
  {
    path: '/ads/register',
    name: 'Ads',
    component: Ads
  },
  {
    path: '/support/regulations',
    name: 'Regulations',
    component: Regulations
  },
  {
    path: '/support/errors',
    name: 'ErrorsConnection',
    component: ErrorsConnection
  },
  {
    path: '/support/errors',
    name: 'ErrorsConnection',
    component: ErrorsConnection
  },
  {
    path: '/connectedhouses',
    name: 'ConnectedHouses',
    component: ConnectedHouses
  },
  {
    path: '/tariffsforapartmentsandhouses',
    name: 'TariffsForApartmentsAndHouses',
    component: TariffsForApartmentsAndHouses
  },
  {
    path: '/individualradiochanneltariffs',
    name: 'IndividualRadioChannelTariffs',
    component: IndividualRadioChannelTariffs
  },
  {
    path: '/connectionrequest',
    name: 'ConnectionRequest',
    component: ConnectionRequest
  },
  {
    path: '/paymentmethods',
    name: 'PaymentMethods',
    component: PaymentMethods
  },
  {
    path: '/computerorroutersettings',
    name: 'ComputerOrRouterSettings',
    component: ComputerOrRouterSettings
  },
  {
    path: '/turbobutton',
    name: 'TurboButton',
    component: TurboButton
  },
  {
    path: '/temporaryblocking',
    name: 'TemporaryBlocking',
    component: TemporaryBlocking
  },
  {
    path: '/ourpartners',
    name: 'OurPartners',
    component: OurPartners
  },
  {
    path: '/technicalsupportregulations',
    name: 'TechnicalSupportRegulations',
    component: TechnicalSupportRegulations
  },
  {
    path: '/guestbook',
    name: 'GuestBook',
    component: GuestBook
  },
  {
    path: '/publicoffer',
    name: 'PublicOffer',
    component: PublicOffer
  },
  {
    path: '/routerininstallments',
    name: 'RouterInInstallments',
    component: RouterInInstallments
  },
  {
    path: '/interactivetelevisionsmotryoshka',
    name: 'InteractiveTelevisionSmotryoshka',
    component: InteractiveTelevisionSmotryoshka
  },
  {
    path: '/collectivereceptionsystems',
    name: 'CollectiveReceptionSystems',
    component: CollectiveReceptionSystems
  },
  {
    path: '/mediaplayerforsmotryoshka',
    name: 'MediaPlayerForSmotryoshka',
    component: MediaPlayerForSmotryoshka
  },
  {
    path: '/telephonetariffs',
    name: 'TelephoneTariffs',
    component: TelephoneTariffs
  },
  {
    path: '/connectionrequestmobile',
    name: 'ConnectionRequestMobile',
    component: ConnectionRequestMobile
  },
  {
    path: '/paymentmethod',
    name: 'PaymentMethod',
    component: PaymentMethod
  },
  {
    path: '/smartintercom',
    name: 'SmartIntercom',
    component: SmartIntercom
  },
  {
    path: '/intercomsystems',
    name: 'IntercomSystems',
    component: IntercomSystems
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
