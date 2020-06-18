import { Theme, useTheme, useMediaQuery } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

// https://material-ui.com/components/use-media-query/#migrating-from-withwidth
export default function useWidth() {
  const theme: Theme = useTheme();
  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: Breakpoint | null, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
