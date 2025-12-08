import styled from "styled-components";

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 20, 17, 0.85);
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const LoaderBarWrapper = styled.div`
  width: 60%;
  max-width: 400px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;

  border: 1px solid #bedbb0;
  overflow: hidden;
  margin-bottom: 50px;
`;

export const LoaderBar = styled.div`
  width: ${($progress) => $progress}%;
  height: 100%;
  background: #bedbb0;
  border-radius: 10px;
  transition: width 0.2s linear;
`;

export const FactWrapper = styled.div`
  width: 260px;
  height: 140px;
  background-color: #bedbb0;
  border-radius: 10px;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
  border: 2px rgba(22, 22, 22, 0.6);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  transform: rotate(-3deg);
  position: relative;
`;

export const FactText = styled.span`
  display: inline-block;
  color: #032409ff;
`;
