import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../spinner/Spinner';
import './TableFooter.css';

export default function TableFooter({
  isReachingEnd,
  isLoadingMore,
  loadMore,
}) {
  return (
    <tfoot>
      <tr>
        <td colSpan="100%">
          <button onClick={loadMore} className="TableFooter-button">
            {isLoadingMore ? <Spinner /> : 'LOAD MORE'}
          </button>
        </td>
      </tr>
    </tfoot>
  );
}

TableFooter.propTypes = {
  isReachingEnd: PropTypes.bool,
  isLoadingMore: PropTypes.bool,
  loadMore: PropTypes.func,
};
