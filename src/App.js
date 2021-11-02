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

  const constructFormData = (formikValues) => {

    let formData = new FormData();
    formData.append('file', formikValues.file);
    return formData;
  };


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
              <FormDatePicker name="date" />
              {/* <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button> */}

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
