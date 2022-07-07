export type OrderableEntity = {
  id: number;
};

export type ReorderingSchema = ReturnType<typeof MapToReorderSchema>;

export function MapToReorderSchema<OrderingArray extends OrderableEntity[]>(
  orderingArray: OrderingArray,
) {
  return orderingArray.map(({ id }, arrayPosition) => ({
    id,
    order: arrayPosition + 1,
  }));
}
