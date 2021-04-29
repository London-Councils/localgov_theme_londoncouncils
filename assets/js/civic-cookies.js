var config = {
  apiKey: 'f073d4f8b71afa6dba4446d2238dc881c9293448',
  product: 'PRO',
  acceptBehaviour: 'recommended',
  text : {
    title: 'Cookies on London Councils',
    intro:  'We use some essential cookies to make this website work. ' +
      'We’d like to set additional cookies to understand how you use our site and to improve our services.',
  },
  statement: {
    description: 'For more information visit our',
    name: 'Cookies Page',
    url: 'https://londoncouncils.test/',
    updated: '19/04/2020'
  },
  optionalCookies: [
    {
      name: 'analytics',
      recommendedState: true,
      lawfulBasis: 'consent',
      label: 'Cookies that measure website use',
      description: 'We use Site Improve to measure how you use the website so we can improve it based on user' +
        ' needs. We do not allow Site Improve to use or share the data about how you use this site. ' +
        'Site Improve sets cookies that store anonymised information about your visit.',
      cookies: ['nmstat', 'AWSELBCORS'],
      onAccept: function () {
        (function() {
          var sz = document.createElement('script'); sz.type = 'text/javascript'; sz.async = true;
          sz.src = '//siteimproveanalytics.com/js/siteanalyze_67788905.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sz, s);
        })();
      },
      onRevoke: function () {
        document.cookie = 'nmstat=; Max-Age=-99999999;';
        document.cookie = 'AWSELBCORS=; Max-Age=-99999999;';
      }
    },
    {
      name: 'feedback',
      recommendedState: true,
      lawfulBasis: 'consent',
      label: 'Cookies for surveys',
      description: 'We conduct online surveys to help us to understand our users` needs and improve our ' +
        'service. We use Survey Monkey to collect responses to surveys. If you take part, SurveyMonkey ' +
        'will save extra cookies to your computer to track your progress through it. ' +
        'No personal information is stored unless provided as part of the survey.',
      cookies: ['ep201', 'ep202', 'ep203', 'CX_402905543', 'smcx_0_last_shown_at'],
      onAccept: function () {
        (function() {
          const betaSurvey = document.getElementById('beta-survey');
          const smScript = document.createElement('script');
          smScript.setAttribute('id', 'smcx-sdk');
          smScript.type = 'text/javascript';
          smScript.async = true;
          smScript.src = 'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgdwlzD1NjFToERhnwN_2BAtg3pSW2TwJJfvrBkEUeYpcwEM.js';
          //smScript.text = '(function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=n,c.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgdwlzD1NjFToERhnwN_2BAtg3pSW2TwJJfvrBkEUeYpcwEM.js",a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");';
          betaSurvey.appendChild(smScript);
        })();
      },
      onRevoke: function () {
        document.cookie = 'ep201=; Max-Age=-99999999;';
        document.cookie = 'ep202=; Max-Age=-99999999;';
        document.cookie = 'ep203=; Max-Age=-99999999;';
        document.cookie = 'CX_402905543=; Max-Age=-99999999;';
        document.cookie = 'smcx_0_last_shown_at=; Max-Age=-99999999;';
      }
    }
  ],
  position: 'LEFT',
  theme: 'DARK',
  branding : {
    removeIcon: true,
    removeAbout: true
  }
};
CookieControl.load( config );
