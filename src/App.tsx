import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { routes } from './routers'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ element: Element, path }, i) => {
                    return (
                        <Route
                            key={i}
                            path={path}
                            element={
                                <Suspense fallback={<>...</>}>
                                    <Element />
                                </Suspense>
                            }
                        />
                    )
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default App
