import React from 'react'
import { Formik  } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="app">
      <Formik
      initialValues={{  name:"",email: "" , password:"" ,confirmpassword:""}}
       onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));

        axios.post("https://67d15eb7825945773eb411e2.mockapi.io/api/v1/users",values)
        .then(res =>{
          console.log(res)
          navigate("/")
        })
        .catch(err =>{
          console.log(err)
        })
      }}
      ///yup
      validationSchema={Yup.object().shape({
        name:Yup.string().required("Name is Required")
          .min(2, 'Too Short!')
      .max(50, 'Too Long!'),

      email: Yup.string()
          .email('invalid email')
          .required("Email is Required"),
          
          password: Yup.string()
          .required("Password must contain at least 10 characters, one uppercase, one lowercase, one digit, and one special character")
          .matches(
            /^.*(?=.{10,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 10 characters, one uppercase, one lowercase, one digit, and one special character"
          ),
        
        confirmpassword: Yup.string()
          .required("Please confirm your password")
          .oneOf([Yup.ref('password'), null], "Passwords don't match")
})}
      >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" style={{ display: "block" }}>
              name
            </label>
            <input
              id="name"
              placeholder="Enter your name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name && touched.name
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.name && touched.name && (
              <div className="input-feedback">{errors.name}</div>
            )}

            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

             <label htmlFor="password" style={{ display: "block" }}>
              password
            </label>
            <input
              id="password"
              placeholder="Enter your password"
              name='password'
              type='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.password && touched.password
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <label htmlFor="confirmpassword" style={{ display: "block" }}>
              confirmpassword
            </label>
            <input
              id="confirmpassword"
              placeholder="Enter your password"
              type='password'
              name="confirmpassword"
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.confirmpassword && touched.confirmpassword
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.confirmpassword && touched.confirmpassword && (
              <div className="input-feedback">{errors.confirmpassword}</div>
            )}

           <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

            </form>
        );
      }}
    </Formik>

  </div>
    </>
  )
}

export default Adduser
