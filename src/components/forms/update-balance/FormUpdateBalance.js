import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import fetcher from '../../../libs/fetcher';
import { setIsRefresh } from '../../../redux/features/settingsFeatureSlice';
import { setSuccessMessage } from '../../../redux/features/successFeatureSlice';
import '../Form.css';

const validationSchema = Yup.object({
  balance: Yup.number().required('Required field'),
  /*
  comment: Yup.string()
    .max(255, 'Max length is 255 symbols')
    .required('Required field'),
    */
});

export default function FormUpdateBalance({ formRef, onClose, setIsFetching }) {
  const dispatch = useDispatch();
  const { user_id, user_name } = useSelector(state => state.settings.user);

  async function updateUserBalance({ balance }) {
    setIsFetching(true);
    await fetcher({
      url: `${process.env.REACT_APP_API_URL}/users/${user_id}/recharge`,
      data: {
        balance,
        // comment,
      },
      method: 'POST',
    });
    setIsFetching(false);
    dispatch(setIsRefresh({ refresh: true }));
    dispatch(
      setSuccessMessage({ message: `${user_name || ''} balance updated` }),
    );
    onClose();
  }

  return (
    <Formik
      initialValues={{
        balance: '',
        // comment: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async values => await updateUserBalance(values)}
      innerRef={formRef}
    >
      {({ getFieldProps, errors, touched }) => (
        <form className="Form">
          <div className="Form-input_wrapper">
            <label className="Form-label" htmlFor="name">
              Amount
            </label>
            <input
              data-testid="balance"
              className="Form-input"
              name="balance"
              placeholder="Virtual currency quantity"
              {...getFieldProps('balance')}
            />
            {touched.balance && errors.balance ? (
              <div data-testid="errors-balance" className="Input-error">
                {errors.balance}
              </div>
            ) : null}
          </div>
          {/*
          <div className="Form-input_wrapper">
            <label className="Form-label" htmlFor="email">
              Comment
            </label>
            <textarea
              data-testid="comment"
              className="Form-textarea"
              name="comment"
              placeholder="Reason for changing the balance"
              {...getFieldProps('comment')}
            />
            {touched.comment && errors.comment ? (
              <div data-testid="errors-comment" className="Input-error">
                {errors.comment}
              </div>
            ) : null}
          </div>*/}
        </form>
      )}
    </Formik>
  );
}

FormUpdateBalance.propTypes = {
  formRef: PropTypes.object,
  onClose: PropTypes.func,
  setIsFetching: PropTypes.func,
};
