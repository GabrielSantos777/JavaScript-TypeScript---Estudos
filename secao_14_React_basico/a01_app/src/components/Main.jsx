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
        tarefas: [],
        index: -1,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if (tarefas.indexOf(novaTarefa) !== -1) return;

        const novasTarefas = [...tarefas];

        this.setState({
            tarefas: [...novasTarefas, novaTarefa],
        });
    };
    handleDelete = (index, e) => {
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);
        this.setState({
            tarefas: [...novasTarefas],
        });
    };

    handleEdit = (index, e) => {
        const { tarefas } = this.state;
        const novaTarefa = prompt("Editar tarefa:", tarefas[index]);
        if (novaTarefa) {
            const novasTarefas = [...tarefas];
            novasTarefas[index] = novaTarefa;
            this.setState({
                tarefas: [...novasTarefas],
            });
        }
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

                <form onSubmit={this.handleSubmit} className="form">
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
                                <FaEdit onClick={(e) => this.handleEdit(index, e)} className="edit"/>
                                <FaWindowClose onClick={(e) => this.handleDelete(index, e)} className="delete"/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
