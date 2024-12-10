import { FC } from "react";
import { Field } from "formik";
import { Upload } from "antd";
import { InputLabel } from "../InputLabel/InputLabel";
import { FullErrorMessage } from "../FullErrorMessage/FullErrorMessage";

interface IPropType {
  name: string;
  labelText?: string;
  placeholder?: string;
  value?: any;
  disabled?: boolean;
  autoFocus?: boolean;
  clearable?: boolean;

  onChange?: (val: string) => void;
  className?: string;
  significant?: boolean;
  forSearching?: boolean;
}

const FileUploader: FC<IPropType> = ({
  name,
  labelText,
  placeholder,
  value,
  disabled,
  autoFocus,
  clearable,
  onChange,
  className,
  significant = true,
  forSearching,
}) => {
  return (
    <>
      <InputLabel
        name={name}
        labelText={labelText}
        significant={significant}
        forSearching={forSearching}
      />

      {/* =========== input ======== */}
      <Field name={name} value={value}>
        {({ form: { setFieldValue }, meta }: any) => (
          <>
            {/* <ImgCrop rotationSlide> */}
            <Upload
              name={name}
              type="drag"
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="text"
              className="block"
              // accept=""
              capture
              // directory
              // defaultFileList={}
              disabled={disabled}
              // maxCount={}
              // multiple
              // onRemove={}
              showUploadList
              // value={meta.value}
              onChange={(param) => {
                console.log(param);
              }}
            >
              بارگذاری
            </Upload>
            {/* </ImgCrop> */}

            {/* =========== FullErrorMessage ======== */}
            <FullErrorMessage name={name} />
          </>
        )}
      </Field>
    </>
  );
};

export { FileUploader };
