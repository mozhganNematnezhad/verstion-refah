//base
import { FC } from "react";

//components
import { TransferContainer } from "@/components/containers/BankPortal/TransferContainer/TransferContainer";
import { bankPortalPageType } from "@/core/enums/bank-portal.enum";

const Transfer: FC = () => {
  return <TransferContainer type={bankPortalPageType.memberShip} />;
};

export default Transfer;
