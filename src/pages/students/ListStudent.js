import {useLocation, Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export function ListStudent() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/students").then((res) => {
            setList(res.data);
        });
    }, [])
    const remove = async (id) => {
        await axios.delete("http://localhost:8080/students/" + id)
        let res = await axios.get("http://localhost:8080/students")
        setList(res.data)
    }
    const search = async (value) =>{
        await axios.get( "http://localhost:8080/search/students?q="+ value.nameSearch).then((res)=>{
             setList(res.data)
        })
    }


    return (
        <>
           <Formik initialValues={{
               nameSearch:""
           }
           } onSubmit={search}>
               <Form>
                   <Field name={"nameSearch"} placeholder={"search"}/>
                   <button type={"submit"}>Search</button>
               </Form>
           </Formik>
            <h1>List Student</h1>
            {state && <><span style={{color: "green"}}>{state.message}</span></>}
            <table border={1}>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Action</td>
                    <td colSpan={2}>Edit/Delete</td>
                </tr>
                {
                    list.map((item) => (
                        <>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.action}</td>
                                <td>
                                    <Link to={'/students/edit/' + item.id}><button>Sửa</button></Link>
                                </td>
                                <td>
                                    <button onClick={() => {
                                        remove(item.id)
                                    }}>Xóa
                                    </button>
                                </td>
                            </tr>
                        </>
                    ))
                }
            </table>
        </>
    )
}