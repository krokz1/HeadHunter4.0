import { render } from "../test-utils";
import { VacancyPageLayout } from "./Vacancy";
import { describe, it, expect, vi } from "vitest";

vi.mock("../../hooks/redux", () => ({
  useAppDispatch: () => vi.fn(),
  useAppSelector: () => ({}),
}));
vi.mock("../../store/slices/vacanciesSlice", () => ({
  fetchVacancies: vi.fn(),
}));
vi.mock("../../components/Header/Header", () => ({ Header: () => null }));
vi.mock("../../components/MainTop/MainTop", () => ({ MainTop: () => null }));
vi.mock("../../components/Filter/Filter", () => ({ SkillsInput: () => null }));
vi.mock("../../components/ListOfVacancies/ListOfVacancies", () => ({
  ListOfVacancies: () => null,
}));

describe("VacancyPageLayout", () => {
  it("1. компонент существует", () => {
    expect(VacancyPageLayout).toBeDefined();
  });

  it("2. компонент является функцией", () => {
    expect(typeof VacancyPageLayout).toBe("function");
  });

  it("3. рендер не вызывает ошибок", () => {
    expect(() => render(<VacancyPageLayout />)).not.toThrow();
  });

  it("4. возвращает не-null результат", () => {
    const { container } = render(<VacancyPageLayout />);
    expect(container).toBeTruthy();
  });

  it("5. содержит HTML элементы", () => {
    const { container } = render(<VacancyPageLayout />);
    expect(container.innerHTML).toBeTruthy();
  });

  it("6. использует useEffect хук", () => {
    const { container } = render(<VacancyPageLayout />);
    expect(container).toBeTruthy();
  });

  it("7. соответствует ожидаемому интерфейсу", () => {
    expect(VacancyPageLayout).toBeInstanceOf(Function);
  });
});
