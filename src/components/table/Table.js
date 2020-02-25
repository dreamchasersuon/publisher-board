import React, { useEffect, useState } from 'react';
import useSWR, { useSWRPages } from 'swr';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import TableHead from './table-head/TableHead';
import TableBody from './table-body/TableBody';
import TableFooter from './table-footer/TableFooter';
import Tr from './table-body/tr/Tr';
import { API_URL } from '../../constants/api';
import { setIsRefresh } from '../../redux/features/settingsFeatureSlice';
import './Table.css';

export default function Table({ handleOnOpenModal }) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.settings);
  const { isRefresh } = useSelector(state => state.settings);
  const [offsetMultiplier, setOffsetMultiplier] = useState(1);

  const {
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore,
    pageSWRs,
  } = useSWRPages(
    'users',
    ({ offset, withSWR }) => {
      const { data } = withSWR(
        // eslint-disable-next-line
        useSWR(`${API_URL}/users?limit=10&offset=${offset || 0}`),
      );

      if (!data || data.payload) {
        return (
          <tr>
            <td colSpan="100%" />
          </tr>
        );
      }

      return data.data.map(user => (
        <Tr
          key={user.user_id}
          user={user}
          users={data.data}
          handleOnOpenModal={handleOnOpenModal}
        />
      ));
    },

    ({ data }) => {
      if (data.payload) {
        return null;
      }
      setOffsetMultiplier(offsetMultiplier + 1);
      return data && data.data.length
        ? data.data.length * offsetMultiplier
        : null;
    },
    [],
  );

  useEffect(() => {
    // re-validate only changed offset on update
    if (pageSWRs.length) {
      let refreshIndex;
      pageSWRs.forEach((page, index) => {
        if (
          page.data.data.find(pagesUser => pagesUser.user_id === user.user_id)
        ) {
          refreshIndex = index;
        }
      });
      pageSWRs[refreshIndex].revalidate();
    }
    if (isRefresh) {
      dispatch(setIsRefresh({ refresh: false }));
    }
    // eslint-disable-next-line
  }, [dispatch, isRefresh]);

  return (
    <table>
      <TableHead />
      <TableBody>{pages}</TableBody>
      <TableFooter
        isReachingEnd={isReachingEnd}
        isLoadingMore={isLoadingMore}
        loadMore={loadMore}
      />
    </table>
  );
}

Table.propTypes = {
  handleOnOpenModal: PropTypes.func,
};
