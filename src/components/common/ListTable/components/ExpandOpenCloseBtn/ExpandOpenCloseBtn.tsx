// base
import { FC, useState } from "react";

// components
import { FullButton } from "@/components/common/Form/FullButton/FullButton";

// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

// core
import { bttonTypeEnum } from "@/core/enums/button.enum";

interface IPropType {
  dataSource: {}[];
}

interface IHookReturn {
  expandedRowKeys: string[];
  setExpandedRowKeys: React.Dispatch<React.SetStateAction<string[]>>;
  collectAllRowKeys: (data: any[]) => string[];
  handleOpenAll: () => void;
  handleCloseAll: () => void;
}

// Hook
const useExpandedRowKeys = ({ dataSource }: IPropType): IHookReturn => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);

  const collectAllRowKeys = (data: any[], keys: any[] = []) => {
    data.forEach((item) => {
      keys.push(item.key);

      if (item.children) {
        collectAllRowKeys(item.children, keys);
      }
    });

    return keys;
  };

  const handleOpenAll = () => {
    const allRowKeys = collectAllRowKeys(dataSource);
    setExpandedRowKeys(allRowKeys);
  };

  const handleCloseAll = () => {
    setExpandedRowKeys([]);
  };

  return {
    expandedRowKeys,
    setExpandedRowKeys,
    collectAllRowKeys,
    handleOpenAll,
    handleCloseAll,
  };
};

// JSX component
const ExpandOpenCloseBtn: FC<IPropType> = ({ dataSource }) => {
  const { handleOpenAll, handleCloseAll } = useExpandedRowKeys({ dataSource });

  return (
    <section className="mb-4">
      <FullButton
        btnText="باز کردن همه"
        type={bttonTypeEnum.button}
        icon={<FontAwesomeIcon icon={faPlusCircle} />}
        onClick={handleOpenAll}
        isClearAble
        clearBtnText="بستن همه"
        clearOnClick={handleCloseAll}
        clearIcon={<FontAwesomeIcon icon={faMinusCircle} />}
      />
    </section>
  );
};

export { ExpandOpenCloseBtn, useExpandedRowKeys };
