import { useState } from "react"

import PropTypes from "prop-types";

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInput = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();

        const newValue = inputValue.trim();

        if (newValue === '') return;
        onAddCategory(newValue)
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmitForm}>
            <input
                type="text"
                placeholder="Buscar GIF"
                value={inputValue}
                onChange={onChangeInput}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}