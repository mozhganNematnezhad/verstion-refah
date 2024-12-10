"use client";

import { TextInput } from "@/components/common/Form/TextInput/TextInput";
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const NormalSearch = () => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div className="relative">
      <TextInput
        className=""
        name="title"
        forSearching
        labelText="عنوان کسب و کار"
        placeholder="لطفا عنوان کسب و کار را وارد کنید"
        customPlaceHolder
      />

      {searchText && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex justify-between items-center w-20">
          <TiDeleteOutline
            size={24}
            color={"red"}
            onClick={() => setSearchText("")}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export { NormalSearch };
