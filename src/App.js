import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Table from './components/table/Table';
import './App.css';
import { createPortal } from 'react-dom';
import Modal from './components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { removeError } from './redux/features/errorsFeatureSlice';
import { removeSuccessMessage } from './redux/features/successFeatureSlice';
import { setTransactions } from './redux/features/settingsFeatureSlice';
import Snackbar from './components/snackbar/Snackbar';

export default function App() {
  const dispatch = useDispatch();
  const { transactions } = useSelector(state => state.settings);
  const errors = useSelector(state => state.errors);
  const success = useSelector(state => state.success);

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [formName, setFormName] = useState(null);

  /*
      Open modal with transactions after form
      submission.
      Otherwise, close modal.
   */
  useEffect(() => {
    if (transactions.length) {
      document.body.classList.add('Overflow-hidden');
      return setFormName('transactions');
    }
    document.body.classList.remove('Overflow-hidden');
    setFormName(null);
  }, [transactions]);

  /*
      Show snackbar with error
      if fetched.
      Remove previous
      error if errors length > 1.
   */
  useEffect(() => {
    if (errors.length > 1) {
      dispatch(removeError());
    }
    setError(errors[0]);
  }, [dispatch, errors]);

  /*
      Show snackbar with success
      message if fetched.
      Remove previous
      message if messages length > 1.
   */
  useEffect(() => {
    if (success.length > 1) {
      dispatch(removeSuccessMessage());
    }
    setSuccessMessage(success[0]);
  }, [dispatch, success]);

  /*
      Open transactions modal,
      by setting the name of
      selected form.
      Hide scrolling in App.
   */
  function handleOnOpenModal(e) {
    document.body.classList.add('Overflow-hidden');
    setFormName(e.target.getAttribute('data-name'));
  }

  /*
      Close modal.
      Remove transactions if
      currently opened modal
      contain them.
   */
  function handleOnCloseModal() {
    if (formName === 'transactions') {
      dispatch(setTransactions({ transactions: [] }));
    }
    document.body.classList.remove('Overflow-hidden');
    setFormName(null);
  }

  return (
    <div className="App">
      <Header
        title="Players"
        caption="manage users of your game"
        handleOnOpenModal={handleOnOpenModal}
      />
      <Table handleOnOpenModal={handleOnOpenModal} />
      {error && (
        <Snackbar
          onClose={() => dispatch(removeError())}
          type="error"
          message={error}
        />
      )}
      {successMessage && (
        <Snackbar
          onClose={() => dispatch(removeSuccessMessage())}
          message={successMessage}
          type="success"
        />
      )}
      {formName &&
        createPortal(
          <Modal onClose={handleOnCloseModal} name={formName} />,
          document.getElementById('root'),
        )}
    </div>
  );
}
