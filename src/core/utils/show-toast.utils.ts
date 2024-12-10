import { toast } from "react-hot-toast";
import { toastTypes } from "../enums/toast-types.enum";

export const showToast = (message: Array<any>, type: string) => {
  message.map((mes) => {
    switch (type) {
      case toastTypes.success:
        toast.success(mes);
        break;

      case toastTypes.error:
        toast.error(mes);
        break;

      case toastTypes.warning:
        toast(mes, {
          style: { background: "yellow", color: "white" },
        });
        break;

      case toastTypes.info:
        toast(mes, {
          style: { background: "blue", color: "white" },
        });
        break;
    }
  });
};
