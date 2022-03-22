import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email"),
  message: Yup.string().required("Message is required"),
});

export default schema;
