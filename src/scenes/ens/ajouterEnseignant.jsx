import React, { useState } from "react";
import { Box, Typography, Button, TextField, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

export default function AjouterEnseignant({ enseignantInitial, onBack }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [formData, setFormData] = useState(
    enseignantInitial || { nom: "", prenom: "", email: "", grade: "" }
  );

  const isEdit = Boolean(enseignantInitial);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      (isEdit ? "Enseignant modifié : " : "Enseignant ajouté : ") +
        JSON.stringify(formData)
    );
    onBack();
  }

  return (
    <Box p={4} sx={{ minHeight: "80vh" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          p: 3,
          borderRadius: 2,
          backgroundColor: colors.primary[400], // légère couleur pour le formulaire
          boxShadow: 1,
        }}
      >
        <Typography variant="h3" mb={3} color={colors.grey[100]}>
          {isEdit ? "Modifier" : "Ajouter"} un enseignant
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: colors.grey[100] } }}
            InputProps={{ style: { color: colors.grey[100] } }}
          />
          <TextField
            fullWidth
            label="Prénom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: colors.grey[100] } }}
            InputProps={{ style: { color: colors.grey[100] } }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: colors.grey[100] } }}
            InputProps={{ style: { color: colors.grey[100] } }}
          />
          <TextField
            select
            fullWidth
            label="Grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: colors.grey[100] } }}
            InputProps={{ style: { color: colors.grey[100] } }}
          >
            <MenuItem value="">Choisir le grade</MenuItem>
            <MenuItem value="Professeur">Professeur</MenuItem>
            <MenuItem value="Maître de conférences">Maître de conférences</MenuItem>
            <MenuItem value="Assistant">Assistant</MenuItem>
          </TextField>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 2 }}
          >
            {isEdit ? "Modifier" : "Ajouter"}
          </Button>

          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
            onClick={onBack}
          >
            Retour
          </Button>
        </form>
      </Box>
    </Box>
  );
}
