import { SvgUri } from 'react-native-svg';

import React from 'react';

type TSvgURI = {
  url: string;
};

const SvgURI = ({ url }: TSvgURI) => (
  <SvgUri width="100%" height="100%" uri={url} />
);

export default SvgURI;
