import React, { createRef, useRef } from 'react';
import { Formik } from 'formik';
import FormDatePicker from './components/FormDatePicker';

function App() {

  const initialValues = {
    date: "",
    file: null,
  };

  // const inputRef = createRef();
  const inputRef = useRef();

  const disabledDaysBefore = () => {
    let start = new Date();
    start = start.setDate(start.getDate() + 14 + (2 - start.getDay()));
    return new Date(start);
  }

  const dayPickerProps= {
    /*
     * make Tuesday the only available date to pick
     * two weeks from the current date
     */
    disabledDays: [
        { before: disabledDaysBefore() },
        { daysOfWeek: [0,1, 3, 4, 5, 6] },
    ],
  }


  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values", values);
          // alert(values.file)
        }}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setFieldValue,
          } = props;

          return (
            <form onSubmit={handleSubmit}>
              <FormDatePicker
                name="date"
                dayPickerProps={dayPickerProps}
              />

              <input
                type="file"
                style={{display: "none"}}
                onChange = {event => {
                  setFieldValue("file", event.currentTarget.files[0])
                }}
                ref={inputRef}
              />

              <button
                type="button"
                onClick={() => inputRef.current.click() }
              >
                Upload Address Form
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>

            </form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
