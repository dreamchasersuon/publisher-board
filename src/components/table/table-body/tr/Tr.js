import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Td from '../td/Td';
import { ReactComponent as Actions } from '../actions.svg';
import Popover from '../../../popover/Popover';
import { useDispatch } from 'react-redux';
import { setActiveUser } from '../../../../redux/features/settingsFeatureSlice';

export default function Tr({ users, user, handleOnOpenModal }) {
  const dispatch = useDispatch();
  const [activeUserId, setActiveUserId] = useState(null);
  const popoverRef = useRef(null);

  useEffect(() => {
    if (activeUserId) {
      popoverRef.current.focus();
    }
  }, [activeUserId]);

  function handleOnBlurPopover() {
    setActiveUserId(null);
  }

  function onClickActions(userId) {
    if (userId === activeUserId) {
      return setActiveUserId(null);
    }

    const user = users.find(user => user.user_id === userId);
    dispatch(setActiveUser({ user }));
    setActiveUserId(userId);
  }
  return (
    <tr key={user.user_id}>
      <td>
        <div className="TableBody-cell">
          <div
            className={
              user.enabled ? 'TableBody-enabled' : 'TableBody-disabled'
            }
          />
          {user.enabled ? 'Enabled' : 'Disabled'}
        </div>
      </td>
      <Td value={user.user_name} />
      <Td value={user.user_custom} />
      <Td value={user.email} />
      <Td value={user.balance} />
      <Td isDate value={user.register_date} />
      <td>
        <div
          data-testid="popover-button"
          onClick={() => onClickActions(user.user_id)}
          className="TableBody-cell actions"
        >
          <Actions />
        </div>
        {activeUserId === user.user_id && (
          <Popover
            popoverRef={popoverRef}
            handleOpenModal={handleOnOpenModal}
            handleOnBlurPopover={handleOnBlurPopover}
          />
        )}
      </td>
    </tr>
  );
}

Tr.propTypes = {
  users: PropTypes.array,
  user: PropTypes.object,
  handleOnOpenModal: PropTypes.func,
};
