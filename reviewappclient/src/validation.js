import * as yup from "yup"
const inputSchema=yup.object().shape(
    {
        appuse:yup.string().required("This field has not be empty"),
        goal:yup.array().of(yup.string()).min(1,'select atleast one goal').required("Select atleast one goal"),
        rateuser:yup.number().typeError('Rate must be a number').min(1,"must be atleast 1").max(10,'must be atmost 10').required("This field cannot be empty"),
        improve:yup.string().required("This field cannot be empty"),
        dob:yup.string().required("This field cannot be empty")
    }
)

export default inputSchema