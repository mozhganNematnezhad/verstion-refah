"use client";

import React, { FC, useState } from "react";
import { Form, Formik } from "formik";

import { BankCardList } from "./components/BankCardList/BankCardList";
import { AddSection } from "./components/AddSection/AddSection";

const BankCardsContainer: FC = () => {
  const [bankCardData, setbankCardData] = useState([]);

  return (
    <>
      <Formik
        initialValues={{}}
        enableReinitialize
        // validationSchema={{}}
        onSubmit={(values) => console.log(values)}
      >
        {({ setFieldValue }) => (
          <Form>
            <AddSection />
            <BankCardList />
          </Form>
        )}
      </Formik>
    </>
  );
};

export { BankCardsContainer };
