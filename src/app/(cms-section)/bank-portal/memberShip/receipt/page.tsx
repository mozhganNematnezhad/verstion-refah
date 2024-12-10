//base
import { FC } from "react";

//components
import { ReceiptContainer } from "@/components/containers/BankPortal/ReceiptContainer/ReceiptContainer";
import { bankPortalPageType } from "@/core/enums/bank-portal.enum";

const ReceiptPage: FC = (): JSX.Element => {
  return <ReceiptContainer type={bankPortalPageType.memberShip} />;
};

export default ReceiptPage;
