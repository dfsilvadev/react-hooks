import "styled-components";
import { MyTheme } from "../styles";

type ThemeType = typeof MyTheme;

declare module "styled-components" {
  export type DefaultTheme = ThemeType;
}
