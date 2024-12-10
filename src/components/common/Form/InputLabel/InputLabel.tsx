import { FC } from "react";

interface IPropType {
  name: string;
  labelText?: string;
  significant?: boolean;
  forSearching?: boolean;
}

const InputLabel: FC<IPropType> = ({
  name,
  labelText,
  significant,
  forSearching,
}): JSX.Element => {
  return (
    <>
      {labelText && (
        <span className="mx-1 block h-auto mb-[6px]">
          <strong className="text-[11px]">{labelText}</strong>

          {significant ? (
            <span className="text-red-500 m-0.5">*</span>
          ) : (
            !forSearching && (
              <span className="text-[11px] text-cyan-700 mx-1">(اختیاری)</span>
            )
          )}
        </span>
      )}
    </>
  );
};

export { InputLabel };
