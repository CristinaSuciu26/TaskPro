import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../redux/auth/authThunks";
import {
  CloseButton,
  FormWrapper,
  Icon,
  ImageInput,
  ImageWrapper,
  Input,
  Label,
  ModalContent,
  ModalOverlay,
  ModalTitle,
  PasswordWrapper,
  SaveButton,
  UserImg,
} from "./ProfileEditModal.styled";
import NoPicture from "../../assets/images/no-profile-picture.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiPlus, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .transform((val) => (val === "" ? undefined : val))
    .notRequired()
    .min(6, "Password must be at least 6 characters"),
});

export default function ProfileEditModal({ user, onClose }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const initialFormData = {
    name: user?.name || "",
    email: user?.email || "",
    password: "",
    image: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  const [preview, setPreview] = useState(user?.image || null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));

      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      const isChanged =
        formData.name !== initialFormData.name ||
        formData.email !== initialFormData.email ||
        formData.password !== "" ||
        formData.image !== null;

      if (!isChanged) {
        toast.info("No changes to update.");
        onClose();
        return;
      }

      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      if (formData.password) payload.append("password", formData.password);
      if (formData.image) payload.append("image", formData.image);

      dispatch(updateProfile(payload));

      toast.success("Updated successfully!");
      onClose();
    } catch (err) {
      if (err.inner) {
        err.inner.forEach((error) => {
          toast.error(error.message);
        });
      } else {
        toast.error("Validation failed");
      }
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Edit profile</ModalTitle>
        <CloseButton onClick={onClose}>
          <FiX strokeWidth={1.5} />
        </CloseButton>

        <FormWrapper onSubmit={handleSubmit}>
          <ImageWrapper>
            <UserImg src={preview || NoPicture} alt={formData.name || "User"} />

            <ImageInput
              id="file-input"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              style={{ display: "none" }}
            />
            <Label htmlFor="file-input">
              <Icon>
                <FiPlus size={14} />
              </Icon>
            </Label>
          </ImageWrapper>

          <Input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <PasswordWrapper>
            <Input
              type={show ? "text" : "password"}
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <span className="toggle-eye" onClick={() => setShow(!show)}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </span>
          </PasswordWrapper>
          <SaveButton type="submit">Save</SaveButton>
        </FormWrapper>
      </ModalContent>
    </ModalOverlay>
  );
}
