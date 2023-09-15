export type Order = {
  id: number;
  userId: number;
  productIds?: { id: number }[]
};

export type OrderService = {
  id: number;
  userId: number;
  productIds: number[] | undefined;
};
