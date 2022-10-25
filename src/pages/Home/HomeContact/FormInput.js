import { useState } from "react";

const FormInput = function(props) {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputsProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label> {label} </label>
            <input 
                {...inputsProps} 
                onChange={onChange} 
                onBlur={handleFocus} 
                focused={focused.toString()} 
            />
            <span> {errorMessage} </span>
        </div>
    )
}

export default FormInput;