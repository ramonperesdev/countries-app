// LIBS
import ReactLoading, { LoadingType } from 'react-loading';

// STYLES
import { WrapperLoading } from '../../styles/components/loading';

// TYPES
interface ILoadingProps {
  h?: string;
  w?: string;
  color?: string;
  type?: LoadingType;
}

export function Loading({
  h,
  w,
  color = 'hsl(0, 0%, 75.29411764705883%)',
  type = 'bubbles',
  ...rest
}: ILoadingProps) {
  return (
    <WrapperLoading style={{ height: h ? h : '100%', width: w ? w : '100%' }}>
      <ReactLoading type={type} color={color} {...rest} />
    </WrapperLoading>
  );
}
