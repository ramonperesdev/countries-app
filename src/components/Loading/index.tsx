import React from 'react';
import ReactLoading from 'react-loading';

// STYLES
import { WrapperLoading } from '../../styles/components/loading';

export function Loading({ h, w, color, type, ...rest }: any) {
  return (
    <WrapperLoading style={{ height: h ? h : '100%', width: w ? w : '100%' }}>
      <ReactLoading type={type} color={color} {...rest} />
    </WrapperLoading>
  );
}
