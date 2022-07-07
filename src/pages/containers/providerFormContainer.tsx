import FormContext from "../../context/FormContext";
import { Register } from "../Register/Register";

export function ProviderFormContainer(){
    return(
        <>
        <FormContext validationSchema={''}>
        <Register />
        </FormContext>
        </>
    )
}