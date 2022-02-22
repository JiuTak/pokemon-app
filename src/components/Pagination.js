import React from "react";

export default function Pagination({ goNextPage, goPreviousPage }) {
  return (
    <div>
      {goPreviousPage && <button onClick={goPreviousPage}> Previous page </button>}
      {goNextPage && <button onClick={goNextPage}> Next page </button>}
    </div>
  );
}
