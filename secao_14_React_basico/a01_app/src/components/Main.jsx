import React, { Component } from "react";
import "./Main.css";

// FORM
import { FaPlus, FaWindowClose } from "react-icons/fa";

// TAREFAS
import { FaEdit } from "react-icons/fa";

export default class Main extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         novaTarefa: "",

    //     }

    //     this.valida = this.valida.bind(this);
    // }

    state = {
        novaTarefa: "",
        tarefas: ["Fazer café", "Estudar React", "Lavar a louça"],
    };

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    };

    render() {
        const { novaTarefa, tarefas } = this.state;

        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>

                <form className="form">
                    <input
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Nova tarefa..."
                        value={novaTarefa}
                    />
                    <button type="submit">
                        <FaPlus />
                    </button>
                </form>
                <ul className="tarefas">
                    {tarefas.map((tarefa, index) => (
                        <li key={index}>
                            {tarefa}
                            <div>
                                <FaEdit className="edit"/>
                                <FaWindowClose className="delete"/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
