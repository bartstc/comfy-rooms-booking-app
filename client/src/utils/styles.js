export const color = {
  white: `#fff`,
  black: `#000000`,
  lightGrey: `#F6F6F6`,
  grey: `#888888`
};

export const fontFamily = {
  primary: `'Montserrat', sans-serif`,
  secondary: `'Lato', sans-serif`
};

export const fontWeight = {
  light: `300`,
  regular: `400`,
  bold: `700`
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};