import "styled-components";
import { DefaultTheme } from "../styles";

type ThemeType = typeof DefaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
