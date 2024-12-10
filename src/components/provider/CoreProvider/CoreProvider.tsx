//base
import { FC, ReactNode } from "react";

//lib
import { Toaster } from "react-hot-toast";
import { ConfigProvider } from "antd";

//core
import theme from "@/theme/themeConfig";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { AuthenticationContext } from "@/core/context/AuthenticationContext";
import { ReactQueryProvider } from "./components/ReactQuery/ReactQueryProvider";
import { GlobalContext } from "@/core/context/GlobalContext";
import { NProsessBarProvider } from "./components/NProsessBar/NProsessBarProvider";

//styles
import "@/styles/globals.scss";

interface IPropType {
  children: ReactNode;
}

const CoreProvider: FC<IPropType> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider theme={theme}>
        <ReactQueryProvider>
          <AuthenticationContext>
            <GlobalContext>
              <Toaster position="top-center" />
              <NProsessBarProvider />
              {children}
            </GlobalContext>
          </AuthenticationContext>
        </ReactQueryProvider>
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
};

export { CoreProvider };
