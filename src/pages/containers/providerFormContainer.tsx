import FormContext from "../../context/FormContext";
import { Register } from "../Form/Register";

export function ProviderFormContainer(){
    return(
        <>
        <FormContext validationSchema={''}>
        <Register />
        </FormContext>
        </>
    )
}