import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ModalHeader from './header/ModalHeader';
import ModalBody from './body/ModalBody';
import ModalFooter from './footer/ModalFooter';
import FormUpdateUser from '../forms/update-user/FormUpdateUser';
import FormAddUser from '../forms/add-user/FormAddUser';
import FormUpdateBalance from '../forms/update-balance/FormUpdateBalance';
import FormGetTransactions from '../forms/get-transactions/FormGetTransactions';
import Transactions from '../transactions/Transactions';
import './Modal.css';

const formsMap = {
  updateUser: {
    render(props) {
      return <FormUpdateUser {...props} />;
    },
    btnCloseLabel: 'cancel',
    btnProceedLabel: 'update',
    title: 'Update User',
  },
  addUser: {
    render(props) {
      return <FormAddUser {...props} />;
    },
    btnCloseLabel: 'cancel',
    btnProceedLabel: 'add',
    title: 'Add User',
  },
  updateBalance: {
    render(props) {
      return <FormUpdateBalance {...props} />;
    },
    btnCloseLabel: 'cancel',
    btnProceedLabel: 'update',
    title: 'Update Balance',
  },
  getTransactions: {
    render(props) {
      return <FormGetTransactions {...props} />;
    },
    btnCloseLabel: 'cancel',
    btnProceedLabel: 'get',
    title: 'Get Transactions',
  },
  transactions: {
    render(props) {
      return <Transactions {...props} />;
    },
    btnCloseLabel: 'close',
    btnProceedLabel: null,
    title: 'Transactions',
  },
};

export default function Modal({ name, onClose }) {
  const [isFetching, setIsFetching] = useState(false);
  const formRef = useRef(null);
  function handleOnSubmitForm() {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  }

  return (
    <div className="Overlay">
      <div onClick={onClose} className="Overlay-backdrop" />
      <div className="Modal">
        <ModalHeader
          title={formsMap[name] ? formsMap[name].title : 'Body not found'}
        />
        <ModalBody>
          {formsMap[name] ? (
            formsMap[name].render({ formRef, onClose, setIsFetching })
          ) : (
            <span>Nothing to show</span>
          )}
        </ModalBody>
        <ModalFooter
          isLoading={isFetching}
          handleOnSubmitForm={handleOnSubmitForm}
          handleOnCloseModal={onClose}
          btnCloseLabel={
            formsMap[name] ? formsMap[name].btnCloseLabel : 'close'
          }
          btnProceedLabel={formsMap[name] && formsMap[name].btnProceedLabel}
        />
      </div>
    </div>
  );
}

Modal.propTypes = {
  name: PropTypes.string,
  onClose: PropTypes.func,
};
