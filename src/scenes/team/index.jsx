import { Box, Typography, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataExams } from "../../data/mockData.js"; 
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const ExamPlanning = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "module", headerName: "Module", flex: 1 },
    { field: "groupe", headerName: "Groupe", width: 120 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "heure", headerName: "Heure", width: 120 },
    { field: "salle", headerName: "Salle", width: 120 },
    { field: "enseignant", headerName: "Enseignant", flex: 1 },

    {
      field: "statut",
      headerName: "Statut",
      width: 130,
      renderCell: ({ row: { statut } }) => (
        <Box
          width="90%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.greenAccent[600]}
          borderRadius="4px"
        >
          <CheckCircleOutlineIcon />
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            {statut}
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      {/* Header */}
      <Header 
        title="Planning des Examens" 
        subtitle="Gérer les examens du département" 
      />

      {/* Boutons */}
      <Box display="flex" justifyContent="flex-end" gap="10px" mb="20px">
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<AddIcon />}
          onClick={() => navigate("/ajouter-examen")}

        >
          Ajouter un examen
        </Button>

        <Button 
          variant="outlined" 
          color="secondary" 
          startIcon={<FilterListIcon />}
        >
          Filtrer
        </Button>
      </Box>

      {/* Table des examens */}
      <Box
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataExams} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};

export default ExamPlanning;
