import * as React from 'react';
import * as PropTypes from 'prop-types';
import { render, Page, Artboard, Text, View } from 'react-sketchapp';

const Document = ({ props }) => (
  <Page>
    {Object.keys(props).map(prop => (
      <Artboard
        name={prop}
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
          name={prop}
        >
          <Text>{prop.name}</Text>;
        </View>
      </Artboard>
    ))}
  </Page>
);

Document.propTypes = {
  props: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default () => {
  const props = {
    PageOne: {
      name: 'Screen1',
    },
    PageTwo: {
      name: 'Screen2',
    },
  };

  render(<Document props={props} />, context.document.currentPage());
};
