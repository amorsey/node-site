import React, { Component } from 'react';

const Header = ({headerData}) => {
  if (headerData){
    return(
      <thead>
        <tr>
          {
            headerData.map((data, i) => (
              <th key={i}>
                {data}
              </th>
            ))
          }
        </tr>
      </thead>
    )
  } else return(null)
};

export default Header;
