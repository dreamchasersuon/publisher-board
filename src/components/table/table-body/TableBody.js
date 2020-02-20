import React, { useState, useRef, useEffect } from 'react';
import Th from './th/Th';
import Popover from '../../popover/Popover';
import { ReactComponent as Actions } from './actions.svg';

export default function TableBody({ users }) {
  const [activeUserID, setActiveUserID] = useState(null);
  const actionsRef = useRef(null);

  function handleClickOutside(event) {
    if (actionsRef.current && !actionsRef.current.contains(event.target)) {
      setActiveUserID(null);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  function onClickActions(id) {
    if (id === activeUserID) {
      return setActiveUserID(null);
    }
    setActiveUserID(id);
  }

  return (
    <tbody>
      {users.map(user => {
        return (
          <tr key={user.user_id}>
            <th>
              <div className="TableBody-cell">
                {
                  <>
                    <div
                      className={
                        user.enabled
                          ? 'TableBody-enabled'
                          : 'TableBody-disabled'
                      }
                    />
                    {user.enabled ? 'Enabled' : 'Disabled'}
                  </>
                }
              </div>
            </th>
            <Th value={user.user_name} />
            <Th value={user.user_custom} />
            <Th value={user.email} />
            <Th value={user.balance} />
            <Th isDate value={user.register_date} />
            <th>
              <div
                ref={actionsRef}
                onClick={() => onClickActions(user.user_id)}
                className="TableBody-cell actions"
              >
                <Actions />
              </div>
            </th>
            <Popover isVisible={activeUserID === user.user_id} />
          </tr>
        );
      })}
    </tbody>
  );
}
