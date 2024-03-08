export const environment = {
  production: true,
  name: 'sit',
  baseAPIURL: '/api',
  logoutUrl: 'https://10.137.44.27:8443/TDMWeb/Login.do',
  homeUrl: 'https://10.137.44.27:8443/TDMWeb/Login.do',
  cspUrl: 'https://sffsit.ais.co.th:8103/SFFWeb/pages/om/om_customer_portal.jsf?idRefresh=0',
  sffHomeUrl: 'https://10.137.20.37:8103/SFFWeb/pages/home/portal.jsf',
  salePortalBaseUrl: 'http://10.137.16.46:8081/sales-portal',
  customerInfoPortalBaseUrl: 'http://10.137.16.46:8081/customer-portal-info',
  baseHref: '/customer-service',
  checkListMobileStatus: ['000', '377', '378', '379', '384', '310'],
  clientID: '',
  sentryDSN: 'https://b8e5251744fd493e91c4ac43dcdee2a3@sentry.io/262536',
  sentryTags: 'sit',
  payAdvanceUrl: 'https://stg-payadvance.intra.ais:8544/AISPostpaidWeb/pages/PaymentOTC.jsf',
  payAdvanceProjectCode: 'PAY_ORDER_MY_CHANNEL',
  payAdvancePartnerProjectCode: 'PAY_ORDER_PARTNER',
  loginNew : 'https://test-partnerservices.intra.ais/PartnerServices/loginByPKI.aspx'
};
