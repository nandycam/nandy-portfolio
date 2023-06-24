import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "../src/styles/Contact.module.css"
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
const ContactModal = () => {
  return (
    <div className={styles.Modal_container}>
      <h5 className={styles.modal_header}>Signup</h5>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              className={styles.Modal_input}
              placeholder="Name *"
              name="firstName"
            />
            {errors.firstName && touched.firstName ? (
              <div className={styles.text_para}>{errors.firstName}</div>
            ) : null}

            <button type="submit" className={styles.My_btn}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactModal;
