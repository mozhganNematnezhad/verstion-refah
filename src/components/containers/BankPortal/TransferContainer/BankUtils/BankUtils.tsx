//base
import { FC, useEffect, useRef } from "react";

interface IPropType {
  bankToken: string;
}
const BankUtils: FC<IPropType> = ({ bankToken }) => {
  //ref
  const formRef = useRef<HTMLFormElement>(null);

  //redirect to bank protal
  useEffect(() => {
    if (formRef.current) {
      formRef.current.submit();
    }
  }, []);

  return (
    <form
      ref={formRef}
      name="forms"
      action="https://sep.shaparak.ir/OnlinePG/OnlinePG"
      method="post"
    >
      <input type="hidden" name="Token" value={bankToken} />
      <input name="GetMethod" type="text" value="true" />
    </form>
  );
};

export { BankUtils };
