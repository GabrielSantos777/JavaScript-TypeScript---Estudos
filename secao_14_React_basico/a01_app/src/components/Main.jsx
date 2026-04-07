import React, { Component } from "react";
import "./Main.css";
import Tarefas from "./Tarefas/Tarefas";
import Form from "./Form";

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

    componentDidUpdate(prevProps, prevState) {
        const { tarefas } = this.state;
        if (tarefas === prevState.tarefas) return;

        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }
    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem("tarefas"));

        if (!tarefas) return;

        this.setState({
            tarefas,
        });
    }

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

                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa}
                />

                <Tarefas
                    tarefas={tarefas}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }
}
