import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  background: rgba(0, 0, 0, 0.5);
`;
export const ModalContent = styled.div`
  width: 300px;
  height: 254px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background};
  margin: 0 auto;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  padding: 30px;
`;
export const ModalTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 28px;
  color: ${({ theme }) => theme.text};
`;
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;
export const LabelTitle = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 12px;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

export const InputButton = styled.input`
  position: absolute;
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  pointer-events: none;
`;
export const LabelColorLow = styled.label`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.labelLowPriority};
  cursor: pointer;
  display: flex;
  align-items: center;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  ${InputButton}:checked + & {
    transform: scale(1);
    box-shadow: 0 0 0 2px ${({ theme }) => theme.accent};
  }
`;
export const LabelColorHigh = styled.label`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.labelHighPriority};
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  ${InputButton}:checked + & {
    transform: scale(1);
    box-shadow: 0 0 0 2px ${({ theme }) => theme.accent};
  }
`;
export const LabelColorMedium = styled.label`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.labelMediumPriroity};
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  display: flex;
  align-items: center;
  ${InputButton}:checked + & {
    transform: scale(1);
    box-shadow: 0 0 0 2px ${({ theme }) => theme.accent};
  }
`;
export const LabelColorWithoutPriority = styled.label`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.labelWithoutPriority};
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  ${InputButton}:checked + & {
    transform: scale(1);
    box-shadow: 0 0 0 2px ${({ theme }) => theme.accent};
  }
`;
export const PriorityName = styled.span`
  font-size: 12px;
  margin-left: 22px;
  display: inline-block;
  white-space: nowrap;
`;
export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  width: 100%;
  gap: 16px;
`;
export const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ShowAll = styled.span`
  border: none;
  background-color: transparent;
  font-size: 12px;
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
