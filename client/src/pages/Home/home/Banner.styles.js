import styled from 'styled-components';
import { fontWeight, device, color } from '../../../utils/styles';

export const BannerWrapper = styled.section`
  margin-top: -20px;
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    rgba(255, 255, 255, .5), 
    rgba(255, 255, 255, .5)
    ), url('/images/Showcase.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;

  @media ${device.tablet} {
    height: 600px;
  }

  @media ${device.laptop} {
    height: 800px;
    margin-top: -40px;
  }
`;

export const BannerTitle = styled.h1`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: ${fontWeight.bold};
  position: relative;
  margin-bottom: 2.2em;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -.4em;
    left: calc(50% - 45px);
    background: ${color.black};
    width: 90px;
    height: 4px;
  }

  @media ${device.tablet} {
    font-size: 2.2rem;
    margin-bottom: 1.4em;
  }

  @media ${device.laptopL} {
    font-size: 3.4rem;
    margin-bottom: 1.4em;
  }
`;

export const BannerSubtitle = styled.p`
  display: none;
  font-size: 1.3rem;
  margin-bottom: 3em;

  @media ${device.tablet} {
    display: block;
  }
`;