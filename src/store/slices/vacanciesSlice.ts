import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchVacanciesAPI } from "../../services/api";
import type { IVacancy, VacanciesSearchParams } from "../../types/index";

export const fetchVacancies = createAsyncThunk(
  "vacancies/fetchVacancies",
  async (searchParams: VacanciesSearchParams) => {
    const response = await fetchVacanciesAPI(searchParams);
    return response;
  }
);

interface VacanciesState {
  items: IVacancy[];
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  searchParams: VacanciesSearchParams;
}

const initialState: VacanciesState = {
  items: [],
  loading: false,
  error: null,
  total: 0,
  page: 1,
  searchParams: {
    industry: "7",
    professional_role: "96",
    per_page: 10,
  },
};

const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearchParams: (state, action: PayloadAction<VacanciesSearchParams>) => {
      state.searchParams = { ...state.searchParams, ...action.payload };
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVacancies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.found;
      })
      .addCase(fetchVacancies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка при загрузке вакансий";
      });
  },
});

export const { setPage, setSearchParams } = vacanciesSlice.actions;
export default vacanciesSlice.reducer;
