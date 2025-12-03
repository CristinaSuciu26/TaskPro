import { useState } from "react";
import { FiX } from "react-icons/fi";
import {
  CloseButton,
  FormWrapper,
  Input,
  ModalContent,
  ModalOverlay,
  ModalTitle,
  SendButton,
  Textarea,
} from "./HelpModal.styled";
import { toast } from "react-toastify";

export function HelpModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !message) {
        toast.error("Please fill out all fields");
        return;
      }

      toast.success("Message sent!");
      onClose();
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <FiX strokeWidth={1.5} />
        </CloseButton>
        <ModalTitle>Need help</ModalTitle>

        <FormWrapper onSubmit={handleSubmit}>
          <label>
            <Input
              placeholder="Email address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <Textarea
              name="message"
              placeholder="Comment"
              rows="5"
              cols="40"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          <SendButton type="submit">Send</SendButton>
        </FormWrapper>
      </ModalContent>
    </ModalOverlay>
  );
}
