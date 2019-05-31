import styled from 'styled-components';
import { color, fontWeight, device } from '../../../utils/styles';

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${color.accent};
  padding-left: .6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${color.white};

  @media ${device.mobileL} {
    padding-right: .6em;
  }

  @media ${device.tablet} {
    height: 80px;
    padding: 0 4em;
  }

  .auth-link {
    width: 60px;
    height: 60px;
    background: ${color.black};
    color: ${color.white};
    font-weight: ${fontWeight.bold};
    font-size: 1.2rem;
    text-transform: uppercase;
    border: 1px solid ${color.black};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .25s ease-in-out;
    cursor: pointer;

    @media ${device.mobileL} {
      width: 150px;
      height: 40px;
      font-size: .85rem;

      &:hover {
        background: ${color.white};
        color: ${color.black};
      }
    }
    
    p {
      display: none;

      @media ${device.mobileL} {
        display: block;
      }
    }
    
    i {
      @media ${device.mobileL} {
        display: none;
      }
    }
  }
`;

export const Logo = styled.h2`
  font-size: 1.3rem;
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  color: ${color.black};

  @media ${device.tablet} {
    font-size: 1.8rem;
  }
`;