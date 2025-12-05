import React, { useState } from "react";
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom"; // ⚠️ IMPORT DE Link
import { tokens } from "../../theme.js"; 
export default function ListeEnseignants({ onAdd, onEdit }) {
  const [search, setSearch] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const enseignants = [
    { id: 1, nom: "Benali", prenom: "Sara", email: "sara@gmail.com", grade: "Professeur" },
    { id: 2, nom: "Karim", prenom: "Yanis", email: "yanis@gmail.com", grade: "Assistant" },
  ];

  const filtered = enseignants.filter((e) =>
    `${e.nom} ${e.prenom}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3, backgroundColor: theme.palette.background.default, minHeight: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h2" color={theme.palette.secondary.main}>
          Liste des Enseignants
        </Typography>
        <Button 
        variant="contained" 
        color="secondary" 
        component={Link} 
        to="/ajouterEnseignant"
        sx={{ mb: 3 }}
      >
        Ajouter un Enseignant
      </Button>
      </Box>

      <TextField
        variant="outlined"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        sx={{ mb: 3, bgcolor: theme.palette.background.paper }}
      />

      <TableContainer component={Paper} sx={{ bgcolor: theme.palette.background.paper }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Prénom</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((e) => (
              <TableRow key={e.id}>
                <TableCell>{e.nom}</TableCell>
                <TableCell>{e.prenom}</TableCell>
                <TableCell>{e.email}</TableCell>
                <TableCell>{e.grade}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" onClick={() => onEdit(e)}>
                    Modifier
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
