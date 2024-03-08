// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  name: 'dev',
  baseAPIURL: '/api',
  logoutUrl: 'https://10.104.240.135:8543/TDMWeb/Login.do',
  homeUrl: 'https://10.104.240.135:8543/TDMWeb/Login.do',
  cspUrl: 'http://10.13.81.39:8103/SFFWeb/pages/om/om_customer_portal.jsf?idRefresh=0',
  sffHomeUrl: 'http://10.13.81.39:8103/SFFWeb/pages/home/aisMyChannel.jsf',
  salePortalBaseUrl: 'http://10.137.16.46:8080/sales-portal',
  customerInfoPortalBaseUrl: 'http://10.137.16.46:8080/customer-portal-info',
  baseHref: '/web',
  checkListMobileStatus: ['000', '377', '378', '379', '384', '310'],
  clientID: '',
  sentryDSN: 'https://11641eb70dd741eea9bc38f197c79d5c@sentry.io/257889',
  sentryTags: 'dev',
  payAdvanceUrl: 'https://stg-payadvance.intra.ais:8544/AISPostpaidWeb/pages/PaymentOTC.jsf',
  payAdvanceProjectCode: 'PAY_ORDER_MY_CHANNEL',
  payAdvancePartnerProjectCode: 'PAY_ORDER_PARTNER',
  loginNew : 'https://test-partnerservices.intra.ais/PartnerServices/loginByPKI.aspx'
};
