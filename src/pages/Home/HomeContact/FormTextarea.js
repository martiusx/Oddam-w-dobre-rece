import { useState } from "react";

const FormTextarea = function(props) {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputsProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label> {label} </label>
            <textarea 
                minLength={120} 
                {...inputsProps} 
                onChange={onChange} 
                onBlur={handleFocus} 
                focused={focused.toString()} 
            />
            <span> {errorMessage} </span>
        </div>
    )
}

export default FormTextarea;