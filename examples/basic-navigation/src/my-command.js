import * as React from 'react';
import { render, Artboard, Text } from 'react-sketchapp';

const Document = () => (
  <Artboard
    name="Swatches"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: (96 + 8) * 4,
    }}
  >
    <Text>TESTE</Text>
  </Artboard>
);

export default () => {
  const colorList = {
    Haus: '#F3F4F4',
    Night: '#333',
    Sur: '#96DBE4',
    'Sur Dark': '#24828F',
    Peach: '#EFADA0',
    'Peach Dark': '#E37059',
    Pear: '#93DAAB',
    'Pear Dark': '#2E854B',
  };

  render(<Document colors={colorList} />, context.document.currentPage());
};
