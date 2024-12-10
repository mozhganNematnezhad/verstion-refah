"use client";

import { Toggle } from "@/components/common/Form/Toggle/Toggle";
import { Form, Formik } from "formik";

import React, { useState } from "react";

const Services = () => {
  return (
    <>
      <Toggle name="Call" labelText="تلفنی" forSearching />
      <Toggle name="InPerson" labelText="حضوری" forSearching />
      <Toggle name="Online" labelText="آنلاین" forSearching />
    </>
  );
};

export { Services };
