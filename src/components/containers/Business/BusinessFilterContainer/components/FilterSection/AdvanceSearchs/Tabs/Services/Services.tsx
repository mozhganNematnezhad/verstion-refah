"use client";

import { Toggle } from "@/components/common/Form/Toggle/Toggle";
import { Form, Formik } from "formik";

import React, { useState } from "react";

const Services = () => {
  return (
    <>
      <Toggle name="supplyByPhone" labelText="تلفنی" forSearching />
      <Toggle name="supplyInPerson" labelText="حضوری" forSearching />
      <Toggle name="supplyByInternet" labelText="آنلاین" forSearching />
    </>
  );
};

export { Services };
