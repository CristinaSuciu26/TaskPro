import styled from "styled-components";

export const LoaderOverlay = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
 background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const LoaderBarWrapper = styled.div`
  width: 60%;
  max-width: 400px;
  height: 20px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 10px;
  overflow: hidden;
`;

export const LoaderBar = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #9dc888;
  border-radius: 10px;
  transition: width 0.2s linear;
`;

export const FactWrapper = styled.div`
  margin-top: 20px;
  max-width: 300px;
  width: 80%;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  opacity: 0.9;
`;

export const FactText = styled.span`
  display: inline-block;

`;
