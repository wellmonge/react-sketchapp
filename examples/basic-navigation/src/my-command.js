import * as React from 'react';
import * as PropTypes from 'prop-types';
import { render, Page, Artboard, Text, View } from 'react-sketchapp';

const Document = ({ colors }) => (
  <Page>
    {Object.keys(colors).map(color => (
      <Artboard
        name={color}
        style={{
          flex: 1,
          background: 'transparent',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 1440,
          margin: 100,
          height: 900,
        }}
      >
        <View
          style={{
            flex: 1,

            backgroundColor: 'green',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 100,
            height: 50,
          }}
          onClick={() => {
            // eslint-disable-next-line no-unused-expressions
            <Text>sdsads</Text>;
          }}
          name="rere"
        />
      </Artboard>
    ))}
  </Page>
);

Document.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default () => {
  const colorList = {
    PageOne: '#F3F4F4',
    PageTwo: '#333',
  };

  render(<Document colors={colorList} />, context.document.currentPage());
};
