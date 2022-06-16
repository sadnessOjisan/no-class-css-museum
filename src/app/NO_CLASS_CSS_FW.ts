export type CSS_FW_NAME_TYPE =
  | 'Water.css(dark)'
  | 'Water.css(light)'
  | 'mvp.css'
  | 'AttriCSS(Bright Light green)'
  | 'AttriCSS(Midnight Green)'
  | 'AttriCSS(Dark Forest Green)'
  | 'AttriCSS(Dark Fairy Pink)'
  | 'AttriCSS(Light Fairy Pink)'
  | 'milligram'
  | 'new.css'
  | 'awsm.css'
  | 'Bahunya'
  | 'holiday.css'
  | 'markdowncss(splendor)'
  | 'markdowncss(Retro)'
  | 'marx'
  | 'sakura'
  | 'sakura(dark)'
  | 'sakura(dark-solarized)'
  | 'sakura(earthly)'
  | 'sakura(ink)'
  | 'sakura(vader)'
  | 'style.css'
  | 'Stylize.css'
  | 'tufte-css'
  | 'Tacit'
  | 'Writ'
  | 'bullframe.css';

type NoClassCssFwType = {
  name: CSS_FW_NAME_TYPE;
  officialURL: string;
  downloadURL: string;
};

const NO_CLASS_CSS_FWS: NoClassCssFwType[] = [
  {
    name: 'Bahunya',
    officialURL: 'https://github.com/kimeiga/bahunya',
    downloadURL: 'https://cdn.jsdelivr.net/gh/kimeiga/bahunya/dist/bahunya.min.css',
  },
  {
    name: 'Water.css(dark)',
    officialURL: 'https://watercss.kognise.dev/',
    downloadURL:
      'https://github.com/kognise/water.css/blob/master/dist/dark.min.css',
  },
  {
    name: 'Water.css(light)',
    officialURL: 'https://watercss.kognise.dev/',
    downloadURL:
      'https://github.com/kognise/water.css/blob/master/dist/light.min.css',
  },
  {
    name: 'mvp.css',
    officialURL: 'https://andybrewer.github.io/mvp/',
    downloadURL: 'https://github.com/andybrewer/mvp/blob/master/mvp.css',
  },
  {
    name: 'AttriCSS(Bright Light green)',
    officialURL: 'https://raj457036.github.io/attriCSS/',
    downloadURL:
      'https://github.com/raj457036/attriCSS/blob/master/themes/brightlight-green.css',
  },
  {
    name: 'AttriCSS(Midnight Green)',
    officialURL: 'https://raj457036.github.io/attriCSS/',
    downloadURL:
      'https://github.com/raj457036/attriCSS/blob/master/themes/midnight-green.css',
  },
  {
    name: 'AttriCSS(Dark Forest Green)',
    officialURL: 'https://raj457036.github.io/attriCSS/',
    downloadURL:
      'https://github.com/raj457036/attriCSS/blob/master/themes/darkforest-green.css',
  },
  {
    name: 'AttriCSS(Dark Fairy Pink)',
    officialURL: 'https://raj457036.github.io/attriCSS/',
    downloadURL:
      'https://github.com/raj457036/attriCSS/blob/master/themes/darkfairy-pink.css',
  },
  {
    name: 'AttriCSS(Light Fairy Pink)',
    officialURL: 'https://raj457036.github.io/attriCSS/',
    downloadURL:
      'https://github.com/raj457036/attriCSS/blob/master/themes/lightfairy-pink.css',
  },
  {
    name: 'milligram',
    officialURL: 'https://milligram.io/',
    downloadURL:
      'https://github.com/milligram/milligram/blob/master/dist/milligram.min.css',
  },
  {
    name: 'new.css',
    officialURL: 'https://newcss.net/',
    downloadURL: 'https://github.com/xz/new.css/blob/master/new.css',
  },
  {
    name: 'awsm.css',
    officialURL: 'https://igoradamenko.github.io/awsm.css/index.html',
    downloadURL:
      'https://github.com/igoradamenko/awsm.css/blob/master/dist/awsm.min.css',
  },

  {
    name: 'bullframe.css',
    officialURL: 'https://github.com/marcop135/bullframe.css',
    downloadURL:
      'https://github.com/marcop135/bullframe.css/blob/master/dist/css/bullframe.min.css',
  },
  {
    name: 'holiday.css',
    officialURL: 'https://holidaycss.js.org/',
    downloadURL:
      'https://github.com/EvgenyOrekhov/holiday.css/blob/master/dist/holiday.css',
  },
  {
    name: 'markdowncss(splendor)',
    officialURL: 'https://markdowncss.github.io/',
    downloadURL:
      'https://github.com/markdowncss/splendor/blob/master/css/splendor.min.css',
  },
  {
    name: 'markdowncss(Retro)',
    officialURL: 'https://markdowncss.github.io/',
    downloadURL:
      'https://github.com/markdowncss/retro/blob/master/css/retro.css',
  },
  {
    name: 'marx',
    officialURL: 'https://mblode.github.io/marx/',
    downloadURL: 'https://github.com/mblode/marx/blob/master/css/marx.min.css',
  },
  {
    name: 'sakura',
    officialURL: 'https://oxal.org/projects/sakura/demo/',
    downloadURL: 'https://github.com/oxalorg/sakura/blob/master/css/sakura.css',
  },
  {
    name: 'sakura(dark)',
    officialURL: 'https://oxal.org/projects/sakura/demo/',
    downloadURL:
      'https://github.com/oxalorg/sakura/blob/master/css/sakura-dark.css',
  },
  {
    name: 'sakura(dark-solarized)',
    officialURL: 'https://oxal.org/projects/sakura/demo/',
    downloadURL:
      'https://github.com/oxalorg/sakura/blob/master/css/sakura-dark-solarized.css',
  },
  {
    name: 'sakura(earthly)',
    officialURL: 'https://oxal.org/projects/sakura/demo/',
    downloadURL:
      'https://github.com/oxalorg/sakura/blob/master/css/sakura-earthly.css',
  },
  {
    name: 'sakura(ink)',
    officialURL: 'https://oxal.org/projects/sakura/demo/',
    downloadURL:
      'https://github.com/oxalorg/sakura/blob/master/css/sakura-ink.css',
  },
  {
    name: 'sakura(vader)',
    officialURL: 'https://oxal.org/projects/sakura/demo/',
    downloadURL:
      'https://github.com/oxalorg/sakura/blob/master/css/sakura-vader.css',
  },
  {
    name: 'style.css',
    officialURL: 'https://css-pkg.github.io/style.css/',
    downloadURL: 'https://unpkg.com/style.css@1.0.0/style.css',
  },
  {
    name: 'Stylize.css',
    officialURL: 'https://vasanthv.com/stylize.css/demo.html',
    downloadURL:
      'https://github.com/vasanthv/stylize.css/blob/master/stylize.min.css',
  },
  {
    name: 'tufte-css',
    officialURL: 'https://github.com/edwardtufte/tufte-css',
    downloadURL:
      'https://github.com/edwardtufte/tufte-css/blob/gh-pages/tufte.min.css',
  },
  {
    name: 'Tacit',
    officialURL: 'https://yegor256.github.io/tacit/',
    downloadURL:
      'https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css.min.css',
  },
  {
    name: 'Writ',
    officialURL: 'https://writ.cmcenroe.me/',
    downloadURL:
      'https://github.com/causal-agent/writ/blob/master/writ.min.css',
  },
];

export default NO_CLASS_CSS_FWS;
