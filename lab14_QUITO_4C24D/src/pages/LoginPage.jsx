import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { loginService } from "../services/LoginService";
import './style/style.css';

const initData = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [data, setData] = useState(initData);

  const onChangeUserName = (e) => {
    setData({ ...data, username: e.target.value });
  };

  const onChangePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await loginService(data);
      login(resp.data);
      navigate("/categories");
    } catch (error) {
      window.alert("El usuario o contraseña no es correcto");
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-container">
        <div className="row justify-content-sm-center">
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-7 col-sm-10">
            <div className="login-card">
              <div className="card-body p-4">
                <h1 className="fs-4 card-title fw-bold mb-10">Login</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="username">Usuario</label>
                    <input
                      id="username"
                      type="text"
                      className="form-control"
                      value={data.username}
                      onChange={onChangeUserName}
                      required
                    />
                  </div>
  
                  <div className="form-group mb-3">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      value={data.password}
                      onChange={onChangePassword}
                      required
                    />
                  </div>
  
                  <div className="d-flex justify-content-between">
                    <a href="forgot.html" className="text-muted">
                      ¿Recuperar Contraseña?
                    </a>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="remember"
                        id="remember"
                        className="form-check-input"
                      />
                      <label htmlFor="remember" className="form-check-label">
                        Recordarme
                      </label>
                    </div>
                  </div>
  
                  <div className="d-flex align-items-center mt-4">
                    <button type="submit" className="btn btn-primary ms-auto">
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
              Copyright &copy; Tecsup 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );  
}
export default LoginPage;