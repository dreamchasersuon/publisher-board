import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import fetcher from '../../../libs/fetcher';
import { setSuccessMessage } from '../../../redux/features/successFeatureSlice';
import '../Form.css';
const nanoid = require('nanoid');

const validationSchema = Yup.object({
  name: Yup.string().max(64, 'Max length is 64 symbols'),
  email: Yup.string().email('Invalid email address'),
  custom: Yup.string().max(64, 'Max length is 64 symbols'),
});

export default function FormAddUser({ formRef, onClose, setIsFetching }) {
  const dispatch = useDispatch();
  async function addNewUser({ name, email, custom }) {
    setIsFetching(true);
    await fetcher({
      url: `${process.env.REACT_APP_API_URL}/users`,
      data: {
        user_id: nanoid(),
        user_name: name,
        email: email,
        user_custom: custom,
      },
      method: 'POST',
    });
    setIsFetching(false);
    dispatch(setSuccessMessage({ message: 'User created' }));
    onClose();
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        custom: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async values => await addNewUser(values)}
      innerRef={formRef}
    >
      {({ getFieldProps, errors, touched }) => (
        <form className="Form">
          <div className="Form-input_wrapper">
            <label className="Form-label" htmlFor="name">
              Name
            </label>
            <input
              data-testid="name"
              className="Form-input"
              name="name"
              placeholder="Username"
              {...getFieldProps('name')}
            />
            {touched.name && errors.name ? (
              <div data-testid="errors-name" className="Input-error">
                {errors.name}
              </div>
            ) : null}
          </div>
          <div className="Form-input_wrapper">
            <label className="Form-label" htmlFor="email">
              Email
            </label>
            <input
              data-testid="email"
              className="Form-input"
              name="email"
              placeholder="Email"
              {...getFieldProps('email')}
            />
            {touched.email && errors.email ? (
              <div data-testid="errors-email" className="Input-error">
                {errors.email}
              </div>
            ) : null}
          </div>
          <div className="Form-input_wrapper">
            <label className="Form-label" htmlFor="custom">
              Custom
            </label>
            <input
              data-testid="custom"
              className="Form-input"
              name="custom"
              placeholder="Custom parameter for identification"
              {...getFieldProps('custom')}
            />
            {touched.custom && errors.custom ? (
              <div data-testid="errors-custom" className="Input-error">
                {errors.custom}
              </div>
            ) : null}
          </div>
        </form>
      )}
    </Formik>
  );
}

FormAddUser.propTypes = {
  formRef: PropTypes.object,
  onClose: PropTypes.func,
  setIsFetching: PropTypes.func,
};
