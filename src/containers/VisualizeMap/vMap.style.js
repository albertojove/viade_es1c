import styled from 'styled-components';
import { Map } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { Select } from '@util-components';

export const MapWrapper = styled.section`
  width: 100%;
  background-image: url('/img/background-image.jpg');
  background-repeat: repeat;
  text-align:center;
  position: relative;
`;

export const SelectWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: inline-block;
  margin-right: 50px;
`;

export const H1 = styled.h1`
   font-family: "Raleway", sans-serif;
   font-weight: bold;
   margin: 0 auto;
`;

export const H3 = styled.h3`
   font-family: "Raleway", sans-serif;
   font-weight: bold;
`;

export const SelectStyled = styled(Select)`
   width: 100%;
   background: #fff;
   margin-top: .9em;
   text-align:left;
`;

export const MapStyled = styled(Map)`
   width: 93%;
   height: 500px;
   float: center;
`;

export const Button = styled.button`
  background-color: #1751F5;
`;