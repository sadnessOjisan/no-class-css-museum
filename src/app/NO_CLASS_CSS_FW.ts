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
  | 'new.css';

type NoClassCssFwType = {
  name: CSS_FW_NAME_TYPE;
  officialURL: string;
  downloadURL: string;
};

const NO_CLASS_CSS_FWS: NoClassCssFwType[] = [
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
];

export default NO_CLASS_CSS_FWS;
