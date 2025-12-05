import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import AjouterExamen from "./scenes/add-exam";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

// 🔵 NOUVELLES PAGES
import ListeEnseignants from "./scenes/ens/listEnseignant";
import AjouterEnseignant from "./scenes/ens/ajouterEnseignant";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/enseignants" element={<ListeEnseignants />} />
              <Route path="/ajouterEnseignant" element={<AjouterEnseignant />} />
              <Route path="/team" element={<Team />} />
              
              <Route path="/ajouter-examen" element={<AjouterExamen />} />
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
