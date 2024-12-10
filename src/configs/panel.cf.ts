interface IPanelConfig {
  theme: "dark" | "light";
  width: string;
  fontSize: string;
}

export const panelConfig: IPanelConfig = {
  theme: "light",
  width: "270px",
  fontSize: "10px",
};
