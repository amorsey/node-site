import React, { Component } from 'react';

const Row = ({rowData, element, imgs}) => {
  return(
      <tr>
        {
          rowData.map((data, i) => (
            <td key={i}>
              {element ? element(data, imgs[i]) : data}
            </td>
          ))
        }
      </tr>
  )
};

export default Row;
