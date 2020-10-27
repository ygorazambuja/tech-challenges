import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import api from "../../services/api";

interface NewComment {
    id?: string;
}
const App: React.FC = () => {
    const [input, setInput] = useState("");
    const history = useHistory();
    const { id } = useParams<NewComment>();
    return (
        <div
            className="container-fluid"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "20px 0px",
            }}
        >
            <div className="mb-5">
                <h1>Novo Comentario </h1>
            </div>
            <div className="mb-5">
                <input
                    className="form-control"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                ></input>
            </div>

            <div className="row justify-content-md-center">
                <div className="col">
                    <button
                        className="btn btn-success"
                        onClick={() => {
                            api.post(`/posts/${id}/comments`, {
                                message: input,
                            })
                                .then((_) => {
                                    history.goBack();
                                })
                                .catch((err) => console.log(err));
                        }}
                    >
                        Adicionar
                    </button>
                </div>
                <div className="col">
                    <Link className="btn btn-danger" to="/">
                        Voltar
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default App;
