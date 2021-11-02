import React from 'react';
import { useField, useFormikContext } from 'formik';
// import PropTypes from 'prop-types';
// import DatePicker from 'react-datepicker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const FormDatePicker = ({ name, ...props }) => {

    // with react-day-picker

    const { setFieldValue } = useFormikContext();
    const [field] = useField(name);

    return(
        <>
            <DayPickerInput
                {...field}
                onDayChange={val => {
                    setFieldValue(field.name, val)
                }}
                {...props}
            />
        </>
    );

};

export default FormDatePicker;