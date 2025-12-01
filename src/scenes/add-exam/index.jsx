import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useTheme } from "@mui/material/styles";

export default function AjouterExamen() {
  const theme = useTheme();

  const [form, setForm] = useState({
    titre: "",
    module: "",
    enseignant: "",
    salle: "",
    date: "",
    heure: "",
    duree: "",
    annee: "" // nouveau champ
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Examen créé :", form);
    alert("Examen ajouté avec succès !");
  };

  return (
    <Box p={4}>
      
      {/* TITRE */}
      <Typography
        variant="h4"
        mb={3}
        fontWeight="bold"
        color={theme.palette.text.primary}
      >
      </Typography>

      {/* BOUTONS */}
      <Box mb={4} display="flex" gap={2}>
       

        
      </Box>

      {/* FORMULAIRE */}
      <Card
        sx={{
          maxWidth: 900,
          boxShadow: theme.shadows[3],
          backgroundColor: theme.palette.background.paper
        }}
      >
        <CardContent>
          <Grid container spacing={3}>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Titre de l'examen"
                name="titre"
                value={form.titre}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Module"
                name="module"
                value={form.module}
                onChange={handleChange}
              >
                <MenuItem value="Maths">Maths</MenuItem>
                <MenuItem value="Informatique">Informatique</MenuItem>
                <MenuItem value="Réseaux">Réseaux</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Enseignant"
                name="enseignant"
                value={form.enseignant}
                onChange={handleChange}
              >
                <MenuItem value="Mme Benali">Mme Benali</MenuItem>
                <MenuItem value="Mr Haddad">Mr Haddad</MenuItem>
                <MenuItem value="Mme Larbi">Mme Larbi</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Salle"
                name="salle"
                value={form.salle}
                onChange={handleChange}
              >
                <MenuItem value="Salle 1">Salle 1</MenuItem>
                <MenuItem value="Salle 2">Salle 2</MenuItem>
                <MenuItem value="Salle 3">Salle 3</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                type="date"
                label="Date"
                name="date"
                InputLabelProps={{ shrink: true }}
                value={form.date}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                type="time"
                label="Heure"
                name="heure"
                InputLabelProps={{ shrink: true }}
                value={form.heure}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Durée (en minutes)"
                name="duree"
                value={form.duree}
                onChange={handleChange}
              />
            </Grid>

            {/* NOUVEAU CHAMP ANNÉE */}
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Année</InputLabel>
                <Select
                  name="annee"
                  value={form.annee}
                  onChange={handleChange}
                  label="Année"
                >
                  <MenuItem value="1ère année">1ère année</MenuItem>
                  <MenuItem value="2ème année">2ème année</MenuItem>
                  <MenuItem value="3ème année">3ème année</MenuItem>
                  <MenuItem value="Master 1">Master 1</MenuItem>
                  <MenuItem value="Master 2">Master 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
  variant="contained"
  size="large"
  fullWidth
  onClick={handleSubmit}
  sx={{
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark, // MUI calculera automatiquement
    },
  }}
>
  Créer l'examen
</Button>

            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
