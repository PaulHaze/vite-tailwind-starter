import { createGlobalStyle } from 'styled-components';
import tw, { theme } from 'twin.macro';

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
});

export function GlobalStyles() {
  return (
    <>
      {/* <BaseStyles /> */}
      <CustomStyles />
    </>
  );
}
