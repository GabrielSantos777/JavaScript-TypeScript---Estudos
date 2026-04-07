import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import "./Form.css";


Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
};

export default function Form( {handleChange, handleSubmit, novaTarefa} ) {
    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                onChange={handleChange}
                type="text"
                placeholder="Nova tarefa..."
                value={novaTarefa}
            />
            <button type="submit">
                <FaPlus />
            </button>
        </form>
    );
}
