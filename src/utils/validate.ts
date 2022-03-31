import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().min(4).max(30),
  email: yup.string().email(),
  password: yup
    .string()
    .matches(/[a-zA-Z0-9]/)
    .min(8),
});