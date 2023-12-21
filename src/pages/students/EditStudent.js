import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";

export function EditStudent() {
    const navigate = useNavigate();
    const [student,setStudent] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        axios.get("http://localhost:8080/students/" + id).then((res) => {
            setStudent(res.data)
        })
    },[])
    const update =(values)=>{
        axios.put("http://localhost:8080/students/" +id  , values).then(()=>{
            console.log(values)
            navigate("/student/home")
        })
    }
    return (
        <>
            <Formik initialValues={student}
             onSubmit = {update}
                enableReinitialize={true}>
                <Form>
                    <Field name={"name"} placeholder={"Name"}/>
                    <Field name={"description"} placeholder={"Description"}/>
                    <Field name={"action"} placeholder={"Action"}/>
                    <button>Save</button>
                </Form>
            </Formik>
            </>
    )

}