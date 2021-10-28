import React from 'react';
import { useField, useFormikContext } from 'formik';
// import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

const FormDatePicker = ({ ...props }) => {

    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    const isSunday = (date) => {
        const day = date.getDay();
        const current = date.getDate()
        return day === 6;
    };

    const startDate = (val) => {
        console.log("🚀 ~ file: index.jsx ~ line 16 ~ startDate ~ val", val)
        const now = new Date();
        now.setDate(now.getDate() + 14);
        return now;
    };

    const getMinDate = () => {
        const now = new Date();
        return now;
    }

    return (
        <DatePicker
            {...field}
            {...props}
            // selected={(field.value && new Date(field.value)) || null}
            selected={(field.value && startDate(field.value))|| null}
            onChange={val => {
                setFieldValue(field.name, val)
            }}
            // filterDate={isSunday}
            placeholderText="MM/DD/YYYY"
            minDate={new Date()}
            // minDate={(getMinDate)}
            showDisabledMonthNavigation
        />
    );
};

export default FormDatePicker;