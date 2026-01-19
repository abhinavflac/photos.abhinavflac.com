import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import RootLayout from './layouts/RootLayout';
import FullViewPage from './pages/FullViewPage';
import GridViewPage from './pages/GridViewPage';
import PhotoPage from './pages/PhotoPage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <Routes>
                    <Route path="/" element={<RootLayout />}>
                        <Route index element={<FullViewPage />} />
                        <Route path="grid" element={<GridViewPage />} />
                        <Route path="p/:photoId" element={<PhotoPage />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
