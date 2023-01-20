import useWindowDimensions from '~/hooks/useWindowDimensions';
import type { DisplayContent } from '~/types';

export const useDisplayContent = (isIndex: boolean): DisplayContent => {
  const { width } = useWindowDimensions();

  return width < 768 ? (!isIndex ? 'right' : 'left') : 'both';
};
