import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from "yup"
import "../Css/Formulario.css"
import { useForm } from '@formspree/react';

import sucessForm from "../Images/gifs-de-ecologia-2.gif"

// import sucess from "../images/Icons/sucess.png"


// 
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

let schema = yup.object().shape({

    email: yup.string().email("Verifique o Email Informado").required("Nao esqueca o Email"),
    telefone: yup.string().required("Telefone Nao Informado").matches(
        /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/,
        "Verifique o Numero Informado"
    ),
    possuiProjeto: yup.array().required().min(1, "Seleciona Uma Das Opcoes"),
    mensagem: yup.string().required("Conte Sobre O Que Precisa"),
    nome: yup.string().required("Nos Diga Qual Sua Graca")
});


const CheckboxExample = () => {

    const [state, handleSubmit] = useForm("mqkvbjdr");

    if (state.succeeded) {


        return (
            <>
                <div className='modalSucess'>
                    <h2>Formulario Enviado!</h2>
                    <img src={sucessForm} alt="Confirmado" srcSet="" />
                </div>
            </>
        )
    }

    return (

        <>
            <div className='ContainerFormulario'>
                <h1 id='contato' className='h1'>Contato</h1>
                <div className='formContainer'>

                    <Formik

                        validationSchema={schema}

                        initialValues={{
                            nome: "",
                            possuiProjeto: [],
                            email: "",
                            telefone: "",
                            mensagem: ""
                        }}

                        onSubmit={async values => {
                            console.log("submiting...")
                            await sleep(1000);
                            // alert(JSON.stringify(values, null, 2));
                            handleSubmit(values)
                        }
                        }
                    >
                        {({ isSubmitting }) => (

                            <Form >

                                <h1>Fale Conosco</h1>

                                <div className='subForm' >

                                    <div style={{ display: "flex", flexDirection: "column" }} >
                                        <label htmlFor="name">Nome</label>
                                        <Field className="input" type="text" name="nome" placeholder="Digite Seu Nome" />
                                        <div>
                                            <ErrorMessage className='ErrorMessage' name="name" component="label" />
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "column" }} >
                                        <label htmlFor="email">Email</label>
                                        <Field className="input" type="email" name="email" placeholder="Digite Seu Email" />
                                        <div>
                                            <ErrorMessage className='ErrorMessage' name="email" component="label" />
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label htmlFor="phoneNumber">Telefone</label>
                                        <Field className="input" type="text" name="telefone" placeholder="Digite Seu telefone" />
                                        <div>
                                            <ErrorMessage className='ErrorMessage' name="telefone" component="label" />
                                        </div>
                                    </div>

                                    <div style={{ display: "flex" }}>
                                        <label htmlFor="projetoSelect">Possui Projeto ?</label>
                                        <div>
                                            <label>
                                                <Field type="checkbox" name="possuiProjeto" value="Sim" />
                                                Sim
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="possuiProjeto" value="Nao" />
                                                Nao
                                            </label>
                                        </div>
                                    </div>
                                    <ErrorMessage className='ErrorMessage' name="possuiProjeto" component="label" />

                                    <div>
                                        <label htmlFor="mensagem"></label>
                                        <Field as="textarea" name="mensagem" placeholder="Escreva Sua Mensagem" className="textArea" />
                                        <div>
                                            <ErrorMessage className='ErrorMessage' name="mensagem" component="label" />
                                        </div>
                                    </div>

                                    <div className='button'>
                                        <button type="submit" value="Submit" disabled={isSubmitting}>
                                            Enviar
                                        </button>
                                    </div>

                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
};

export default CheckboxExample;