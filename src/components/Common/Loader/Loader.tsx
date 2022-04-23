import React from 'react';
import { Spin } from 'antd';

const Loader = function () {
  return (
    <div className="loader">
      <Spin />
    </div>
  );
};

export default Loader;
