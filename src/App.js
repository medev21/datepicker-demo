import { Formik } from 'formik';
import FormDatePicker from './components/FormDatePicker';

import 'react-datepicker/dist/react-datepicker.css';

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ date: "" }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values))
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
