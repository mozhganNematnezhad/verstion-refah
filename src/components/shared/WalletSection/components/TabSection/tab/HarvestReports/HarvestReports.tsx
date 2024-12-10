import { ListTable } from "@/components/common/ListTable/ListTable";
import { Columns } from "../TransactionHistory/Columns/Columns";

const HarvestReports = () => {
  return (
    <section>
      <section
        className="bg-gradient-to-tr from-slate-50 to-slate-100 
          rounded-lg font-bold text-lg p-1 px-2"
      >
        گزارشات برداشت
      </section>
      <ListTable
        dataSource={[]}
        columns={Columns()}
        isLoading={false}
        totalNumber={0}
      />
    </section>
  );
};

export { HarvestReports };
