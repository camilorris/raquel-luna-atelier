import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  number: Yup.number(),
  dressType: Yup.string(),
  date: Yup.date(),
  contact: Yup.string()
});

export default ContactSchema;
