import { useState, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import SerieComponent from "../components/SerieComponent";
import { Link } from "react-router-dom";
import { getAllSerieService } from "../services/SerieService";
import axios from "axios";
function SeriePage() {

    const [series, setSeries] = useState([]);

    
    const loadData = async () => {
        const resp=await getAllSerieService();
        console.log("Datos obtenidos:", resp.data);
        setSeries(resp.data);
    };


    useEffect(() => {
        loadData();
    }, []);


    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                    <h3>Series</h3>
                    <div>
                        <Link className="btn btn-primary" to="/series/new">Nuevo</Link>
                    </div>
                </div>
                <div className="row">
                    {series.map((serie) => (
                        <div key={serie.id} className="col-md-3 mb-3">
                            <SerieComponent
                                codigo={serie.id}
                                nombre={serie.name}
                                categoria={serie.category_description}
                                imagen={serie.image || 'default-image.png'}
                                lista={series}
                                actualizarLista={setSeries}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SeriePage;
