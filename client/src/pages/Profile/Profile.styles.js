import styled from 'styled-components';
import { color, fontWeight, device } from '../../utils/styles';

export const ProfileContainer = styled.section`
  padding: 0 .6em;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Table = styled.table`
/* https://codepen.io/marclundgren/pen/hgelI */
  /* 
  Generic Styling, for Desktops/Laptops 
  */
  width: 100%; 
  border-collapse: collapse; 
  /* Zebra striping */
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

  /* 
  Max width before this PARTICULAR table gets nasty
  This query will take effect for any screen smaller than 760px
  and also iPads specifically.
  */
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

export const Header = styled.header`
  width: 100%;
  margin-bottom: 1.4em;

  @media ${device.tablet} {
    display: flex;
    aling-items: center;
    justify-content: space-between;
  }
`;

export const Welcome = styled.h1`
  font-size: 1.3rem;
  font-weight: ${fontWeight.light};
  margin-bottom: 1em;

  @media ${device.tablet} {
    font-size: 1.9rem;
  }
`;

export const History = styled.div`

`;

export const Empty = styled.p`

`;