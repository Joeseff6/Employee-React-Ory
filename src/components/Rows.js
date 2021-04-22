import React from 'react';

const Rows = function({image, first, last, email}) {
  return (
    <tr>
      <td>{image}</td>
      <td>{first}</td>
      <td>{last}</td>
      <td>{email}</td>
    </tr>
  )
}

export default Rows;