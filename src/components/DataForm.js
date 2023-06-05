import React from 'react';
import {useFormik} from 'formik';
import * as yup from "yup";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card, CardContent, Typography} from "@mui/material";
import UserData from "./UserData";

const validationSchema = yup.object({
    time: yup
        .string('Provide reading time')
        .required('Reading time is required'),
    quantity: yup
        .number('Provide number of read pages')
        .min(1, 'Number is too small')
        .max(5000, 'Number is too big')
        .required('Number is required'),
});

const DataForm = () => {

    const formik = useFormik({
        initialValues: {time: '', quantity: ''},
        validationSchema: validationSchema,
        onSubmit: (values) => {

            const userDataModel = new UserData();
            userDataModel.time = values.time;
            userDataModel.quantity = values.quantity;
            //props.addData(userDataModel);
            console.log(userDataModel);

            formik.resetForm();
        },
    });

    return (
        <div style={{margin: '0 25%'}}>
            <Card variant="outlined" style={{backgroundColor: "rgba(240,236,241,0.94)"}}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        Enter your reading session
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="time"
                            name="time"
                            value={formik.values.time}
                            onChange={formik.handleChange}
                            error={formik.touched.time && Boolean(formik.errors.time)}
                            helperText={formik.touched.time && formik.errors.time}
                            label="Reading time"/>
                        <TextField
                            fullWidth
                            id="quantity"
                            name="quantity"
                            value={formik.values.quantity}
                            onChange={formik.handleChange}
                            error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                            helperText={formik.touched.quantity && formik.errors.quantity}
                            label="Number of read pages"/>
                        <Button style={{backgroundColor: "#cc6969"}} variant="contained" fullWidth type="submit"> Add </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default DataForm;