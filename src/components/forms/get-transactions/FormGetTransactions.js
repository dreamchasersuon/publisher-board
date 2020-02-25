import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import '../Form.css';
import fetcher from '../../../libs/fetcher';
import { API_URL } from '../../../constants/api';
import { setTransactions } from '../../../redux/features/settingsFeatureSlice';
import toRFC3339Date from '../../../utils/toRFC3339Date';
import { setSuccessMessage } from '../../../redux/features/successFeatureSlice';

const validationSchema = Yup.object({
  dateFrom: Yup.date()
    .typeError('Expected format is YYYY-MM-DD')
    // fallback validation for IE and Safari
    .test(
      'valid-date',
      'Expected format is YYYY-MM-DD',
      val => new Date(val).toString() !== 'Invalid Date',
    )
    .required('Required field'),
  dateTo: Yup.date()
    .typeError('Expected format is YYYY-MM-DD')
    .test(
      'valid-date',
      'Expected format is YYYY-MM-DD',
      val => new Date(val).toString() !== 'Invalid Date',
    )
    .min(Yup.ref('dateFrom', 'End date should be later than start date'))
    .required('Required field'),
});

export default function FormGetTransactions({
  formRef,
  onClose,
  setIsFetching,
}) {
  const dispatch = useDispatch();
  const { user_id } = useSelector(state => state.settings.user);

  async function getTransactions({ dateFrom, dateTo }) {
    setIsFetching(true);
    const isoDateFrom = toRFC3339Date(new Date(dateFrom));
    const isoDateTo = toRFC3339Date(new Date(dateTo));

    const transactions = await fetcher(
      `${API_URL}/users/${user_id}/transactions?datetime_from=${isoDateFrom}&datetime_to=${isoDateTo}`,
    );
    setIsFetching(false);
    if (transactions.length) {
      dispatch(setTransactions({ transactions }));
    } else {
      dispatch(
        setSuccessMessage({ message: 'No transactions for this period' }),
      );
    }
    onClose();
  }

  return (
    <Formik
      initialValues={{
        dateFrom: '',
        dateTo: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async values => await getTransactions(values)}
      innerRef={formRef}
    >
      {({ getFieldProps, errors, touched }) => (
        <form className="Form">
          <div className="Form-input_wrapper">
            <label className="Form-label" htmlFor="dateFrom">
              Date from
            </label>
            <input
              data-testid="dateFrom"
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
              title="Should be date"
              className="Form-input"
              name="dateFrom"
              placeholder="Period start"
              {...getFieldProps('dateFrom')}
            />
            {touched.dateFrom && errors.dateFrom ? (
              <div data-testid="errors-dateFrom" className="Input-error">
                {errors.dateFrom}
              </div>
            ) : null}
          </div>
          <div className="Form-input_wrapper">
            <label className="Form-label" htmlFor="dateTo">
              Date to
            </label>
            <input
              data-testid="dateTo"
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
              className="Form-input"
              name="dateTo"
              placeholder="Period end"
              {...getFieldProps('dateTo')}
            />
            {touched.dateTo && errors.dateTo ? (
              <div data-testid="errors-dateTo" className="Input-error">
                {errors.dateTo}
              </div>
            ) : null}
          </div>
        </form>
      )}
    </Formik>
  );
}

FormGetTransactions.propTypes = {
  formRef: PropTypes.element,
  onClose: PropTypes.func,
  setIsFetching: PropTypes.func,
};
