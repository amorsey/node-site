import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

const Table = (props) => {
  return(
    <div>
      <table>
        <Header headerData={props.headerData} />
        <Body props={props}/>
      </table>
    </div>
  );
};

export default Table;
