import { useState, type PropsWithChildren } from "react";
import type { Theme } from "../types/types";
import { ThemeContext } from "./theme";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>("light");

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
