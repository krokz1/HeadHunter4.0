import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { store } from './store/store'
import "@mantine/core/styles.css";
import { VacancyPage } from './pages/VacancyPage/VacancyPage'
import { VacanciesLayout } from './pages/VacanciesLayout/VacanciesLayout'
import { VacanciesList } from './pages/VacanciesList/VacanciesList'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { Layout } from './layouts/Layout'
import { About } from './pages/About/About'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/vacancies" replace />} />
            <Route element={<Layout />}>
              <Route path="/vacancies" element={<VacanciesLayout />}>
                <Route path="moscow" element={<VacanciesList city="1" />} />
                <Route path="petersburg" element={<VacanciesList city="2" />} />
                <Route index element={<Navigate to="moscow" replace />} />
              </Route>
              <Route path="/vacancies/:id" element={<VacancyPage />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </MantineProvider>
    </Provider>
  </React.StrictMode>
)