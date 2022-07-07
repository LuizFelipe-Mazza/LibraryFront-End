import FormContext from "../../context/FormContext";
import { ProviderForm } from "../FormProvider/ProviderForm";

export function ProviderFormContainer(){
    return(
        <>
        <FormContext validationSchema={''}>
        <ProviderForm/>
        </FormContext>
        </>
    )
}