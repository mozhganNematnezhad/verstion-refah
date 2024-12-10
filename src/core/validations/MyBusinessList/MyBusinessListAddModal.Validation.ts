import * as Yup from "yup";

export const MyBusinessListAddModalValidation = Yup.object().shape({
  // isRealBusiness: Yup.object()
  //   .shape({
  //     Label: Yup.string(),
  //     value: Yup.number(),
  //   })
  //   .required("لطفا یک گزینه را انتخاب کنید")
  //   .typeError("لطفا یک گزینه را انتخاب کنید"),

  title: Yup.string()
    .required("این فیلد الزامی است")
    .typeError("لطفا فیلد را درست پر کنید"),

  categoryId: Yup.object()
    .shape({
      Label: Yup.string(),
      value: Yup.number(),
    })
    .required("لطفا یک گزینه را انتخاب کنید")
    .typeError("لطفا یک گزینه را انتخاب کنید"),

  licenseNumber: Yup.string()
    .required("این فیلد الزامی است")
    .typeError("لطفا فیلد را درست پر کنید"),

  postalCode: Yup.string()
    .required("این فیلد الزامی است")
    .matches(/^\d{10}$/, "کد پستی باید 10 رقم باشد")
    .typeError("لطفا فیلد را درست پر کنید"),

  // minDiscount: Yup.number()
  //   .required("این فیلد الزامی است")
  //   .typeError("لطفا فیلد را درست پر کنید"),

  // maxDiscount: Yup.number()
  //   .required("این فیلد الزامی است")
  //   .typeError("لطفا فیلد را درست پر کنید"),

  province: Yup.object()
    .shape({
      Label: Yup.string(),
      value: Yup.number(),
    })
    .required("لطفا یک گزینه را انتخاب کنید")
    .typeError("لطفا یک گزینه را انتخاب کنید"),

  county: Yup.object()
    .shape({
      Label: Yup.string(),
      value: Yup.number(),
    })
    .required("لطفا یک گزینه را انتخاب کنید")
    .typeError("لطفا یک گزینه را انتخاب کنید"),

  cityOrVillage: Yup.object()
    .shape({
      Label: Yup.string(),
      value: Yup.number(),
    })
    .required("لطفا یک گزینه را انتخاب کنید")
    .typeError("لطفا یک گزینه را انتخاب کنید"),

  address: Yup.string()
    .required("این فیلد الزامی است")
    .typeError("لطفا فیلد را درست پر کنید"),

    domainName: Yup.string()
    .required("این فیلد الزامی است")
    .typeError("لطفا فیلد را درست پر کنید"),

});
