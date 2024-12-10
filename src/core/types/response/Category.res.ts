export interface GetProductCategoriesHierarchical {
  id: number;
  title: string;
  parentId: number;
  picture: string;
  children: string[];
}
