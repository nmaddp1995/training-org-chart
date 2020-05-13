import React from 'react';
import { useDrag } from 'react-dnd';

import Dustbin from './Dustbin';
import Box from './Box';

const TestDrag = () => {
      return (
        <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Dustbin />
      </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Box name="Glass" />
        <Box name="Banana" />
        <Box name="Paper" />
      </div>
        </div>
      )
};

const Square = ({ x, y, children }) => {
    const black = (x + y) % 2 === 1
  return <Square black={black}>{children}</Square>
}

export default TestDrag;