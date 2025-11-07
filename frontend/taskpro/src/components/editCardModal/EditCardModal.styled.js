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
  width: 335px;
  height: 522px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background};
  margin: 0 auto;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  padding: 30px;

  @media (min-width: 768px) {
    width: 350px;
  }
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

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const Input = styled.input`
  width: 287px;
  height: 49px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 8px;
  padding: 14px 18px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
export const Textarea = styled.textarea`
  width: 287px;
  height: 154px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 8px;
  padding: 14px 18px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
export const AddButton = styled.button`
  width: 287px;
  height: 49px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.buttonText};
  cursor: pointer;
  border: none;
  font-size: 14px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-weight: 500;
  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
  }
`;

export const Icon = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.icon};
  color: ${({ theme }) => theme.iconButton};
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 28px;
  color: ${({ theme }) => theme.text};
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 220px;
  gap: 4px;
`;
export const ColorWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 13px;
`;
export const LabelTitle = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 12px;
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
  transition: transform 0.2s, box-shadow 0.2s;

  ${InputButton}:checked + & {
    transform: scale(1);
    box-shadow: 0 0 0 2px ${({ theme }) => theme.accent};
  }
`;
export const LabelColorHigh = styled.label`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.labelHighPriority};
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

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
  transition: transform 0.2s, box-shadow 0.2s;

  ${InputButton}:checked + & {
    transform: scale(1);
    box-shadow: 0 0 0 2px ${({ theme }) => theme.accent};
  }
`;
export const LabelColorWithoutPriority = styled.label`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.labelWithoutPriority};
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  ${InputButton}:checked + & {
    transform: scale(1);
    box-shadow: 0 0 0 2px ${({ theme }) => theme.accent};
  }
`;
export const DeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  margin-top: 14px;
`;
export const DeadlineTitle = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 12px;
  margin-left: 40px;
`;
