import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  preload: false,
  style: 'normal',
  display: 'swap',
});

const fontFamilies = {
  default: `Malgun Gothic, Dotum, Helvetica, AppleGothic, Sans-serif`,
  // default: `'Malgun Gothic','맑은 고딕',sans-serif`,
  notoSans: `${notoSansKR.style.fontFamily}, Malgun Gothic, Dotum, Helvetica, AppleGothic, Sans-serif`,
};

const colors = {
  primary: '#ea3363',
  black: '#000000',
  black100: '#121212',
  black200: '#20201f',
  black400: '#444444',
  white: '#ffffff',
  gray100: '#e5e5e5',
  gray200: '#eef1f4',
  gray500: '#545F71',
  placeholder: '#a0a0a0',
  borderGray: '#ededed',
  sajuGray: '#e7e7e7',
};

const minDeviceWidth = '335px';
const maxDeviceWidth = '640px';
const desktopDeviceWidth = '1200px';

const theme: any = {
  fontFamilies,
  colors,
  minDeviceWidth,
  maxDeviceWidth,
  desktopDeviceWidth,
  imageUrl: process.env.APP_IMAGE_URL,
};
export default theme;
