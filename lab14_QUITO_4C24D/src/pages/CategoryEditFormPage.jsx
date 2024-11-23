import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent";
import './style/category_edit.css';

const initData = {
    id: '',
    description: '',
}

function CategoryEditFormPage(){
    
    const urlApi = 'http://localhost:8000/series/api/v1/categories/';
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState(initData);

    const setDataForm = async () => {
        const resp = await axios.get(`${urlApi}${id}/`);
        setData(resp.data);
    }

    const onChangeNombre = (e) => {
        const nData = {...data, description: e.target.value}
        setData(nData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${urlApi}${id}/`, data);
        navigate("/categories");
    };

    useEffect(()=>{
        setDataForm();
    },[]);

    return (
        <>
            <HeaderComponent />
            <div className="container mt-4">
                <div className="border-bottom pb-3 mb-4">
                    <h3 className="text-primary">Editar - Categoría</h3>
                </div>
                <form onSubmit={handleSubmit} className="edit-form">
                    <div className="mb-4">
                        <label htmlFor="inputName" className="form-label">Nombre</label>
                        <input
                            type="text"
                            onChange={onChangeNombre}
                            className="form-control"
                            value={data.description}
                            required
                        />
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <button className="btn btn-primary">Guardar</button>
                        <Link className="btn btn-secondary" to="/categories">Cancelar</Link>
                    </div>
                </form>
            </div>
        </>
    )
};    

export default CategoryEditFormPage
