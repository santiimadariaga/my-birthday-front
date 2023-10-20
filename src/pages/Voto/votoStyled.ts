import styled from 'styled-components';
import collage from '../../assets/COLLAGE.png';
import { Link } from 'react-router-dom';

export const Page = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${collage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const Box = styled.form`
  max-width: 500px;
  width: 40vw;
  min-width: 300px;
  border-radius: 0 20px;
  padding: 20px;
  padding-bottom: 40px;
  background-color: rgba(255, 255, 255, 0.598459366656819);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    padding-top: 35px;
  }
`;

export const Title = styled.p`
  font-family: 'Permanent Marker', cursive;
  font-size: clamp(32px, 4vw, 48px);
  color: black;
  opacity: 1;
  z-index: 10;
`;

export const Select = styled.select`
  width: 70%;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: clamp(17px, 2vw, 20px);
  outline: none;
  border: none;
  color: black;
  cursor: pointer;
`;

export const SendButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: clamp(15px, 2vw, 20px);
  cursor: pointer;
  border: none;
  background-color: white;
  transition: all 0.3s ease;

  &:hover {
    background-color: grey;
    color: white;
    transition: all 0.3s ease;
  }
`;

export const Navigator = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  color: black;
  font-weight: 500;
  background-color: white;
  padding: 10px;

  &:hover {
    background-color: grey;
    color: white;
    transition: all 0.3s ease;
  }
`;

export const NavigatorTwo = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 20px;
  color: black;
  font-weight: 500;
  background-color: white;
  padding: 10px;

  &:hover {
    background-color: grey;
    color: white;
    transition: all 0.3s ease;
  }
`;
