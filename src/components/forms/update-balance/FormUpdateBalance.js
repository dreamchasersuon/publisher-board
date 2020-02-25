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
  amount: Yup.number().required('Required field'),
  comment: Yup.string()
    .max(255, 'Max length is 255 symbols')
    .required('Required field'),
});

export default function FormUpdateBalance({ formRef, onClose, setIsFetching }) {
  const dispatch = useDispatch();
  const { user_id, user_name } = useSelector(state => state.settings.user);

  async function updateUserBalance({ amount, comment }) {
    setIsFetching(true);
    await fetcher({
      url: `${API_URL}/users/${user_id}/recharge`,
      data: {
        amount,
        comment,
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
        amount: '',
        comment: '',
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
              data-testid="amount"
              className="Form-input"
              name="amount"
              placeholder="Virtual currency quantity"
              {...getFieldProps('amount')}
            />
            {touched.amount && errors.amount ? (
              <div data-testid="errors-amount" className="Input-error">
                {errors.amount}
              </div>
            ) : null}
          </div>
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
          </div>
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
