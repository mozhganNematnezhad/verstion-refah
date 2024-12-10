import { authConfig } from "@/configs/auth.cf";

//GetAllProvincesForDropDown
export const GetAllProvinces = async () => {
  const response = await fetch(
    authConfig.base_url + `/api/Location/GetAllProvincesForDropDown`,
    {
      next: { revalidate: 1 },
    }
  );

  return await response.json();
};
