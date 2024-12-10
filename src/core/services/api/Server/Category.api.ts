import { authConfig } from "@/configs/auth.cf";

export const GetBusinessCategoriesHierarchical = async () => {
  const response = await fetch(
    authConfig.base_url + `/api/Category/GetBusinessCategoriesHierarchical`,
    {
      next: { revalidate: 10 * 24 * 60 * 60 * 60 * 1000 },
    }
  );

  return await response.json();
};
