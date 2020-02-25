import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import fetcher from '../../../libs/fetcher';
import { API_URL } from '../../../constants/api';
import { setIsRefresh } from '../../../redux/features/settingsFeatureSlice';
import { setSuccessMessage } from '../../../redux/features/successFeatureSlice';
import '../Form.css';

const validationSchema = Yup.object({
  name: Yup.string().max(64, 'Max length is 64 symbols'),
  email: Yup.string().email('Invalid email address'),
  custom: Yup.string().max(64, 'Max length is 64 symbols'),
});

export default function FormUpdateUser({ formRef, onClose, setIsFetching }) {
  const dispatch = useDispatch();
  const { user_id, user_name, email, user_custom, enabled } = useSelector(
    state => state.settings.user,
  );

  async function updateUser({ name, email, custom }) {
    setIsFetching(true);
    await fetcher({
      url: `${API_URL}/users/${user_id}`,
      data: {
        user_name: name,
        email: email,
        user_custom: custom,
        enabled,
      },
      method: 'PUT',
    });
    setIsFetching(false);
    dispatch(setIsRefresh({ refresh: true }));
    dispatch(setSuccessMessage({ message: `User ${user_name || ''} updated` }));
    onClose();
  }

  return (
    <Formik
      initialValues={{
        name: user_name || '',
        email: email || '',
        custom: user_custom || '',
      }}
      validationSchema={validationSchema}
      onSubmit={async values => await updateUser(values)}
      innerRef={formRef}
    >
      {({ getFieldProps, errors, touched }) => (
        <form className="Form">
          <div className="Form-input_wrapper">
            <label className="Form-label" htmlFor="name">
              Name
            </label>
            <input
              data-testid="update-name"
              className="Form-input"
              name="name"
              placeholder="Username"
              {...getFieldProps('name')}
            />
            {touched.name && errors.name ? (
              <div data-testid="update-errors-name" className="Input-error">
                {errors.name}
              </div>
            ) : null}
          </div>
          <div className="Form-input_wrapper">
            <label className="Form-label" htmlFor="email">
              Email
            </label>
            <input
              data-testid="update-email"
              className="Form-input"
              name="email"
              placeholder="Email"
              {...getFieldProps('email')}
            />
            {touched.email && errors.email ? (
              <div data-testid="update-errors-email" className="Input-error">
                {errors.email}
              </div>
            ) : null}
          </div>
          <div className="Form-input_wrapper">
            <label className="Form-label" htmlFor="custom">
              Custom
            </label>
            <input
              data-testid="update-custom"
              className="Form-input"
              name="custom"
              placeholder="Custom parameter for identification"
              {...getFieldProps('custom')}
            />
            {touched.custom && errors.custom ? (
              <div data-testid="update-errors-custom" className="Input-error">
                {errors.custom}
              </div>
            ) : null}
          </div>
        </form>
      )}
    </Formik>
  );
}

FormUpdateUser.propTypes = {
  formRef: PropTypes.object,
  onClose: PropTypes.func,
  setIsFetching: PropTypes.func,
};
