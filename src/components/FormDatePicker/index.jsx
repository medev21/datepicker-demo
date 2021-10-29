import React from 'react';
import { useField, useFormikContext } from 'formik';
// import PropTypes from 'prop-types';
// import DatePicker from 'react-datepicker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const FormDatePicker = ({ name }) => {

    // with react-day-picker

    const { setFieldValue } = useFormikContext();
    const [field] = useField(name);

    const disabledDaysBefore = () => {

        let start = new Date();
        start = start.setDate(start.getDate() + 14 + (7- start.getDay()));
        return new Date(start);
    }

    return(
        <>
            <DayPickerInput
                {...field}
                onDayChange={val => {
                    setFieldValue(field.name, val)
                }}

                dayPickerProps={{
                    disabledDays: [
                        { before: disabledDaysBefore() },
                        { daysOfWeek: [1, 2, 3, 4, 5, 6] },
                    ],
                }}
            />
        </>
    );

};

export default FormDatePicker;