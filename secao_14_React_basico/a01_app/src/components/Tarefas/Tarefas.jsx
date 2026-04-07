import React from "react";
import "./Tarefas.css";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";

Tarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
};

export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
    return (
        <ul className="tarefas">
            {tarefas.map((tarefa, index) => (
                <li key={index}>
                    {tarefa}
                    <div>
                        <FaEdit
                            onClick={(e) => handleEdit(index, e)}
                            className="edit"
                        />
                        <FaWindowClose
                            onClick={(e) => handleDelete(index, e)}
                            className="delete"
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
}
