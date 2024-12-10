"use client";

import React, { FC } from "react";
import { Form, Formik } from "formik";
import { AddSection } from "../EditInfoContainer/AddSection/AddSection";
import { FavoritesList } from "./components/FavoritesList/FavoritesList";

const FavoritesContainer: FC = () => {
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
            <AddSection
              isLoading={false}
              mapIsLoading={false}
              setFieldValue={setFieldValue}
              defaultCenter={null}
            />
            <FavoritesList />
          </Form>
        )}
      </Formik>
    </>
  );
};

export { FavoritesContainer };
