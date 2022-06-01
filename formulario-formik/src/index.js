import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "./styles.css";


const SignupForm = () => {
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Precisa ser 15 caracteres ou menos')
        .required('Obrigatório'),
      lastName: Yup.string()
        .max(20, 'Precisa ser 20 caracteres ou menos')
        .required('Obrigatório'),
      email: Yup.string().email('Endereço de email inválido').required('Obrigatório'),
    }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Nome</label>
        <input
          id="firstName"
          type="text"
          {...formik.getFieldProps('firstName')}
        />
  {formik.touched.firstName && formik.errors.firstName ? (
    <div>{formik.errors.firstName}</div> 
    ): null} 

        <label htmlFor="lastName">Sobrenome</label>
        <input id="lastName" type="text" {...formik.getFieldProps('lastName')}/>
        {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div> 
        ): null} 

       <label htmlFor="email">Endereço de email</label>
       <input id="email" type="email" {...formik.getFieldProps('email')} />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}

        <button type="submit">Enviar</button>
      </form>
    );
  };

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
