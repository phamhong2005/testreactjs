import {useNavigate} from "react-router-dom";
import {Form, Formik, Field, ErrorMessage} from "formik";
import axios from "axios";
import * as Yup from "yup";


const StudentSchema = Yup.object().shape({
    id: Yup.number()
        .required('Required'),
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        // .matches("([A-Z])\\w+", 'Abc')
        .required('Required'),
    description: Yup.string().required('Required'),
    action: Yup.string().required('Required')
});
export default function CreateStudent() {
    const navigate = useNavigate();

    const add = (values) => {
        axios.post("http://localhost:8080/students", values).then(() => {
            navigate("/students/home", {state: {message: "Create Success!!"}});
        })
    }
    return (
        <>
            <h1>Create Student</h1>
            {/*<button onClick={() => {*/}
            {/*    navigate("/students/home", {state: {name: "Linh", age: 1}})*/}
            {/*}}>Thêm mới*/}
            {/*</button>*/}

            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    description: '',
                    action: ''
                }
                }
                validationSchema={StudentSchema}
                onSubmit={add}
                // enableReinitialize={true}
            >
                <Form>
                    <Field name={"id"} placeholder={"Id"}/>
                    <span style={{color: "red"}}><ErrorMessage name={"id"}/></span><br/>
                    <Field name={"name"} placeholder={"Name"}/>
                    <span style={{color: "red"}}><ErrorMessage name={"name"}/></span><br/>
                    <Field name={"description"} placeholder={"Description"}/>
                    <span style={{color: "red"}}><ErrorMessage name={"description"}/></span><br/>
                    <Field name={"action"} placeholder={"Action"}/>
                    <span style={{color: "red"}}><ErrorMessage name={"action"}/></span><br/>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}