export const color = {
  white: `#FFF`,
  black: `#000000`,
  lightGrey: `#EFEFEF`,
  grey: '#888',
  accent: `#DAA520`
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

export const tableStyles = `
  margin-top: .6em;
  font-size: .85rem;
  width: 100%; 
  border-collapse: collapse; 

  tr:nth-of-type(odd) { 
    background: ${color.lightGrey}; 
  }

  th { 
    background: ${color.black}; 
    color: white; 
    font-weight: bold;
  }

  td, th { 
    padding: 6px; 
    border: 2px solid ${color.white}; 
    text-align: left; 
  }

  @media 
  only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px)  {
      display: block;
      position: relative;
      width: 100%;

      &:after {
        clear: both;
        content: '';
        display: block;
        font-size: 0;
        height: 0;
        visibility: hidden;
      }

      tbody {
        display: block;
        overflow-x: auto;
        position: relative;
        white-space: nowrap;
        width: auto;


        tr {
          display: inline-block;
          vertical-align: top;

          td {
            display: block;
            text-align: center;

            &:first-child {
              text-align: left;
            }
          }
        }
      }

      thead {
        display: block;
        float: left;
        margin-right: 10px;

        &:after {
          clear: both;
          content: "";
          display: block;
          font-size: 0;
          height: 0;
          visibility: hidden;
        }

        th:first-of-type {
          height: 2.1rem;
        }

        th {
          display: block;
          text-align: right;

          &:first-child {
            text-align: right;
          }
        }
      }
    }
  }
`;