import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent";
import './style/category.css';
function CategoryPage() {
    
    const urlApi = 'http://localhost:8000/series/api/v1/categories/';
    const [categories, setCategories] = useState([]);
    const navigate=useNavigate();

    const loadData = async () => {
        const resp = await axios.get(urlApi);
        console.log(resp.data);
        setCategories(resp.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('¿Está seguro de eliminar este registro?')) { 
            await axios.delete(`${urlApi}${id}/`);
            const nLista = categories.filter(item => item.id !== id);
            setCategories(nLista);
        }  
    };
    const handleEdit=async(id) =>{
        navigate(`/categories/edit/${id}`);
    }

    return (
        <>
            <HeaderComponent />
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
                    <h3 className="text-primary">Categorías</h3>
                    <Link className="btn btn-primary rounded-pill px-4 py-2" to="/categories/new">
                        <i className="bi bi-plus-circle me-2"></i> Nuevo
                    </Link>
                </div>
                <div className="table-responsive shadow-lg rounded-3">
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Nombre</th>
                                <th className="text-center">Id</th>
                                <th className="text-center" style={{ width: '120px' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((item) => (
                                <tr key={item.id} className="align-middle">
                                    <td>{item.description}</td>
                                    <td className="text-center">{item.id}</td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => handleEdit(item.id)}
                                            className="btn btn-warning me-2 btn-sm rounded-circle"
                                            title="Editar categoría"
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="btn btn-danger btn-sm rounded-circle"
                                            title="Eliminar categoría"
                                        >
                                            <i className="bi bi-trash-fill"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default CategoryPage;
