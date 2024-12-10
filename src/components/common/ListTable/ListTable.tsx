"use client";

//base
import { FC, ReactNode } from "react";

//lib
import { Empty, Table } from "antd";
import {
  ExpandOpenCloseBtn,
  useExpandedRowKeys,
} from "./components/ExpandOpenCloseBtn/ExpandOpenCloseBtn";

interface IPropType {
  //main
  dataSource: {}[];
  columns: any;
  isLoading?: boolean;

  //expandAble
  expandable?: boolean;
  indentSize?: number;
  customeExpand?: boolean;
  childrenColumnName?: string;
  expandedRowRender?: (record: any) => React.ReactNode;
  defaultExpandAllRows?: boolean;
  openCloseAll?: boolean;
  expandRowByClick?: boolean;

  //rowSelection
  rowSelection?: boolean;
  rowSelectionType?: "checkbox" | "radio";
  onChangeRowSelection?: (selectedRows: any) => void;

  //pagination
  totalNumber: number;
  page?: number;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  pageSize?: number;
  setPageSize?: React.Dispatch<React.SetStateAction<number>>;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onShowSizeChange?: (currentPage: number, size: number) => void;

  //helper
  diffrentId?: string;
  tableTitle?: ReactNode;
  tableFooter?: ReactNode;
}

const ListTable: FC<IPropType> = ({
  //main
  dataSource,
  columns,
  isLoading,

  //expandable
  expandable = false,
  indentSize,
  customeExpand,
  childrenColumnName = "children",
  expandedRowRender,
  defaultExpandAllRows,
  openCloseAll = false,
  expandRowByClick = true,

  //rowSelection
  rowSelection,
  rowSelectionType = "checkbox",
  onChangeRowSelection,

  //pagination
  totalNumber,
  page = 1,
  setPage,
  pageSize = 25,
  setPageSize,
  onPaginationChange,
  onShowSizeChange,

  //helper
  diffrentId,
  tableTitle,
  tableFooter,
}) => {
  //openCloseAll Hook
  const { expandedRowKeys, setExpandedRowKeys } = useExpandedRowKeys({
    dataSource,
  });

  return (
    <section className="w-full mt-4">
      {/* --- select/diselect All --- */}
      {openCloseAll && <ExpandOpenCloseBtn dataSource={dataSource} />}

      {/*--- listTable && expandable && row selection && pagination --- */}
      <Table
        rowKey={(record: any) => (record?.id ? record?.id : record?.key)}
        dataSource={dataSource}
        columns={[
          {
            title: "ردیف",
            align: "center",
            width: 70,
            render: (_, record, index) => (
              <span>{(page - 1) * pageSize + (index + 1)}</span>
            ),
            hidden: expandable,
          },

          ...columns,

          {
            width: 70,
            align: "center",
            title: "شناسه",
            dataIndex: diffrentId || "id",
          },
        ]}
        rowSelection={
          rowSelection
            ? {
                checkStrictly: false,
                columnWidth: 40,
                type: rowSelectionType,
                onChange(selectedRowKeys, selectedRows, info) {
                  onChangeRowSelection
                    ? onChangeRowSelection(selectedRows)
                    : undefined;
                },
              }
            : undefined
        }
        expandable={{
          showExpandColumn: expandable,
          indentSize: indentSize || 20,
          expandRowByClick: expandRowByClick,

          //custome render in expand
          childrenColumnName: customeExpand ? "NOTALLOWED" : childrenColumnName,
          expandIconColumnIndex: 0,
          rowExpandable: (record) => {
            return (
              !!record[childrenColumnName] &&
              record[childrenColumnName].length > 0
            );
          },
          expandedRowRender: expandedRowRender,

          //open and close all
          defaultExpandAllRows,
          expandedRowKeys,
          onExpandedRowsChange: (keys: any) => setExpandedRowKeys(keys),
        }}
        bordered={!customeExpand}
        loading={isLoading}
        scroll={
          typeof window !== "undefined" && window.innerWidth < 700
            ? { x: 1000 }
            : undefined
        }
        size={expandable ? "middle" : "small"}
        title={tableTitle ? () => tableTitle : undefined}
        footer={tableFooter ? () => tableFooter : undefined}
        pagination={{
          size: "default",
          style: { direction: "ltr" },
          position: ["bottomCenter"],
          responsive: true,
          hideOnSinglePage: true,
          showTotal: () => (
            <span className="bg-blue-600 text-white py-1 px-4 rounded-lg text-md">
              مجموع داده ها : {totalNumber}
            </span>
          ),

          total: totalNumber,
          defaultCurrent: page,
          pageSize: pageSize ? pageSize : undefined,
          onChange(page, pageSize) {
            setPage && setPage(page);
            onPaginationChange && onPaginationChange(page, pageSize);
          },

          onShowSizeChange: (currentPage: number, size: number) => {
            setPage && setPage(currentPage);
            setPageSize && setPageSize(size);
            onShowSizeChange && onShowSizeChange(currentPage, size);
          },

          totalBoundaryShowSizeChanger: 1,
          // showQuickJumper: true,
          // showPrevNextJumpers: true,
          // showLessItems: true,
        }}
        locale={{
          emptyText() {
            return (
              <Empty
                className="w-1/4 h-1/4 mx-auto text-xs py-1"
                description="داده ای یافت نشد"
              />
            );
          },
        }}
      />
    </section>
  );
};

export { ListTable };
