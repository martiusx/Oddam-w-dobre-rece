import Heading from "../../../components/ui/Heading";
import Button from "../../../components/ui/Button";
import HomeFooter from "../HomeFooter";
import inputs from "./Inputs";
import FormInput from "./FormInput";
import { useState } from "react";
import FormTextarea from "./FormTextarea";
import Axios from 'axios';


const HomeContact = function(props) {
    const [show, setShow] = useState(false);
    const [values, setValues] = useState({
        username: '',
        email: '',
        textArea: '',
    })

    const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";


    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = values;
        setShow(true);
        Axios.post(url,{
            name: values.username,
            email: values.email,
            message: values.textArea,
        })
        .then(res=>{
            console.log(res.values)
        })
    }
    const onChange = (e) => {
        const newValues = { ...values }
        newValues[e.target.name] = e.target.value
        setValues(newValues);
        console.log(newValues)
    };


    

    return (
        <div className="homeContact" id="homeContact">
            <div className="homeContact__img"></div>
            <div className="homeContact__text">
                <Heading firstText="Skontaktuj się z nami"/>
                {show? <p>Wiadomość została wysłana!<br></br>Wkrótce się skontaktujemy.</p> : null}
                <form className="homeContact__text-form" onSubmit={handleSubmit}>
                    <div className="homeContact__text-wrapper">
                        <div className="homeContact__text-name">
                            <FormInput key={inputs[0].id} {...inputs[0]} value={values[inputs[0].name]} onChange={onChange}/>
                        </div>
                        <div className="homeContact__text-email">
                            <FormInput key={inputs[1].id} {...inputs[1]} value={values[inputs[1].name]} onChange={onChange}/>
                        </div>
                    </div>
                    <div className="homeContact__text-message">
                         <FormTextarea key={inputs[2].id} {...inputs[2]} value={values[inputs[2].name]} onChange={onChange}/>
                    </div>
                    <div className="homeContact__text-button"> 
                         <Button text="wyślij"/>
                    </div>
                </form>
            </div>
            <HomeFooter/>
        </div>
    )
}

export default HomeContact;
