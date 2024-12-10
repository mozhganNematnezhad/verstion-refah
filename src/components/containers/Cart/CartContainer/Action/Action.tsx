//base
import { FC, useState } from "react";
import { useRouter } from "next/navigation";

//lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHammer, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

//components
import { DeleteModal } from "./DeleteModal/DeleteModal";
import { IBusinessProductDeatils } from "@/core/types/response/Product.res";
import { FullButton } from "@/components/common/Form/FullButton/FullButton";
import { bttonTypeEnum } from "@/core/enums/button.enum";

//core

interface IPropType {
  original: IBusinessProductDeatils;
}

const Action: FC<IPropType> = ({ original }) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  //router
  const { push } = useRouter();

  return (
    <section className="flex justify-center items-center gap-1">
      {/* --- modals --- */}
      {showDeleteModal && (
        <DeleteModal
          isOpen={showDeleteModal}
          toggleModal={() => setShowDeleteModal(false)}
          rowId={Number(original.id)}
        />
      )}

      {/* --- Button --- */}
      <FullButton
        btnText="حذف"
        type={bttonTypeEnum.button}
        size="small"
        className="!text-xs !bg-red-700 hover:!bg-red-500 !py-1"
        icon={<FontAwesomeIcon icon={faTrashAlt} />}
        onClick={() => setShowDeleteModal(true)}
      />

      <FullButton
        btnText="مشاهده محصول"
        type={bttonTypeEnum.button}
        size="small"
        className="!text-xs !py-1"
        icon={<FontAwesomeIcon icon={faEye} />}
        onClick={() =>
          push(`/business/${original.business.domainName}/${original.id}`)
        }
      />
    </section>
  );
};

export { Action };
