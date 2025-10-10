import type { VacanciesSearchParams } from "../types/index";

export const fetchVacanciesAPI = async (params: VacanciesSearchParams) => {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      if (Array.isArray(value)) {
        value.forEach((item) => queryParams.append(key, item));
      } else {
        queryParams.append(key, value.toString());
      }
    }
  });

  const response = await fetch(`https://api.hh.ru/vacancies?${queryParams}`);

  if (!response.ok) {
    throw new Error("Ошибка сети");
  }

  return await response.json();
};
