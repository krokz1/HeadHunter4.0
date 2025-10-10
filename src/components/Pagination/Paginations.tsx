import { Pagination, Group } from "@mantine/core";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { setPage, fetchVacancies } from "../../store/slices/vacanciesSlice";

export function Paginations() {
  const dispatch = useAppDispatch();
  const { page, total, searchParams } = useAppSelector(
    (state) => state.vacancies
  );

  const totalPages = Math.ceil(total / 10);

  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage));
    dispatch(
      fetchVacancies({
        ...searchParams,
        page: newPage,
        per_page: 10,
      })
    );
  };

  if (totalPages <= 1) return null;

  return (
    <Pagination.Root
      total={totalPages}
      value={page}
      onChange={handlePageChange}
    >
      <Group gap={5} justify="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}
