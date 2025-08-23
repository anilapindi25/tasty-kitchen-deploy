import React from 'react';
import './index.css';

const Pagination = ({ activePage, setActivePage, totalPages }) => (
  <div className="pagination">
    <button
      disabled={activePage === 1}
      onClick={() => setActivePage(activePage - 1)}
    >
      {"<"}
    </button>
    <span>{`${activePage} of ${totalPages}`}</span>
    <button
      disabled={activePage === totalPages}
      onClick={() => setActivePage(activePage + 1)}
    >
      {">"}
    </button>
  </div>
);

export default Pagination;
