//base
import { FC } from "react";

//components
import { BusinessCMSContainer } from "@/components/containers/Business/BusinessCMSContainer/BusinessCMSContainer";

interface IPageProps {
  params: {
    businessDomain: string;
  };
}
const BusinessCMS: FC<IPageProps> = (req) => {
  return <BusinessCMSContainer businessDomain={req.params.businessDomain} />;
};

export default BusinessCMS;
