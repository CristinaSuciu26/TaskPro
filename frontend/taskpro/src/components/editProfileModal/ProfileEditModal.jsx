import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../redux/auth/authThunks";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
} from "./ProfileEditModal.styled";

export default function ProfileEditModal({ user, onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    if (formData.password) payload.append("password", formData.password);
    if (formData.image) payload.append("image", formData.image);

    dispatch(updateProfile(payload));
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Edit profile</h2>
        <CloseButton onClick={onClose}>×</CloseButton>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />

          <button type="submit">Save changes</button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
}
