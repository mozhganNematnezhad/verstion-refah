//base
import { FC, useState } from "react";

//lib
import { Divider, Modal } from "antd";
import { FaCogs } from "react-icons/fa";
import { Form, Formik } from "formik";

//componenets
import { Rules } from "../BenefitCustomerModal/Rules/Rules";
import { AuthInputs } from "./components/AuthInputs/AuthInputs";
import { UnAuthBtn } from "./components/UnAuthBtn/UnAuthBtn";

//core
import { ISetBusinessByUserValues } from "@/core/types/formikValues/landing/SetBusinessByUser/SetBusinessByUser.values";
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { UserRoles } from "@/core/enums/user-role.enum";
import { useSetBusinessByUser } from "@/core/services/api/client/Business.api";
import { ISetBusinessByUserPayload } from "@/core/types/payload/GetBusinesses.payload";
import { showToast } from "@/core/utils/show-toast.utils";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { refreshAuthData } from "@/core/hooks/refreshAuthData.hook";

interface IPropType {
  isOpen: boolean;
  toggleModal: () => void;
  //!type rememind
  setRefetch: (value: any) => void;
}
const RegisterBusinessModal: FC<IPropType> = ({
  isOpen,
  toggleModal,
  setRefetch,
}) => {
  const [initialValues] = useState<ISetBusinessByUserValues>({
    supplyByPhone: false,
    membershipType: null,
    isRealBusiness: true,
    title: "",
    category: null,
    licenseNumber: "",
    domainName: "",
    postalCode: "",
    minDiscount: 0,
    maxDiscount: 0,
    province: null,
    county: null,
    cityOrVillageId: null,
    address: "",
    lat: 0,
    lng: 0,
  });

  //auth context
  const { token, role, setTokenState, setRefreshTokenState, setRoleState } =
    useUserAuth();

  //check role
  const hasSellerRole = role && role.includes(UserRoles.Seller);

  //api
  const setMutation = useSetBusinessByUser();

  //setMutation
  const onSubmit = (values: ISetBusinessByUserValues) => {
    const Payload: ISetBusinessByUserPayload = {
      title: values.title,
      membershipType: Number(values.membershipType?.value),
      categoryId: values.category?.value,
      supplyInPerson: true,
      supplyByPhone: values.supplyByPhone,
      supplyByInternet: true,
      licenseNumber: values.licenseNumber,
      postalCode: values.postalCode,
      cityOrVillageId: values.cityOrVillageId?.value, //!cityOrVillageId
      address: values.address,
      domainName: values.domainName,
    };

    setMutation.mutate(Payload, {
      onSuccess: async () => {
        showToast(
          [
            "با موفقیت ثبت شد ، لطفا وارد پنل عرضه کننده خود شوید و مدارک را بارگذاری کنید",
          ],
          toastTypes.success
        );

        if (!hasSellerRole) {
          const { accessToken, refreshToken, role } = await refreshAuthData();

          //save in context
          setTokenState(accessToken);
          setRefreshTokenState(refreshToken);
          setRoleState(role);
        }

        setRefetch((val: boolean) => !val);
        toggleModal();
      },
    });
  };

  return (
    <>
      <Modal
        title="بهره مندی از خدمات مشتریان"
        open={isOpen}
        onCancel={toggleModal}
        className="!w-full lg:!w-[95%] mx-auto lg:px-8"
        footer={false}
        zIndex={50000}
      >
        <>
          <Formik
            initialValues={initialValues}
            enableReinitialize
            // validationSchema={}
            onSubmit={onSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
                <Rules />

                <Divider orientation="center" plain>
                  <section className="flex justify-center items-center gap-x-2">
                    <FaCogs size={18} className="text-blue-600" />
                    <span className="mt-1">ثبت کسب و کار در شهرک</span>
                  </section>
                </Divider>

                {token ? (
                  <AuthInputs
                    setFieldValue={setFieldValue}
                    isLoading={setMutation.isLoading}
                  />
                ) : (
                  <UnAuthBtn />
                )}
              </Form>
            )}
          </Formik>
        </>
      </Modal>
    </>
  );
};

export { RegisterBusinessModal };
