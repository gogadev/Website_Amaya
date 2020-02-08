import styled from "styled-components";
import defaultImg from "../images/room3.jpg";

const StyledHero = styled.header`
  min-height: 90vh;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
