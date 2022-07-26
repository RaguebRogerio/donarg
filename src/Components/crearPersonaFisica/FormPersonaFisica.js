import React from 'react'
import { Grid,TextField, Typography, Button } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './FormPersoaFisica.css'
import { useNavigate  } from 'react-router-dom'

export const FormPersonaFisica = () => {
  const navigate = useNavigate();
  return (
    <div class="divMayor">
      <Grid container spacing={2} direction="column">
        <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h7" gutterBottom component="div">
              <b>Tú información</b>
            </Typography>        
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField id="nombre" label="Nombre" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField id="email" label="Email" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField id="telefono" label="Teléfono" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField id="edad" label="Edad" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h7" gutterBottom component="div">
            <b>Tú Dirección</b>
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField id="calle" label="Calle" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={1} direction="row">
              <Grid item xs={4} md={4} lg={4}>
                <TextField id="numero" label="Número" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <TextField id="piso" label="Piso" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={4} md={4} lg={4}>
                <TextField id="departamento" label="Departamento" variant="outlined" fullWidth />
              </Grid>
          </Grid>
        </Grid>
        
      </Grid>
      <div style={{marginTop:"4%"}}>
        <Button fullWidth variant="contained" size="lg"  onClick={() =>{navigate('/crearUsuarioImagen')}}>LISTO <SendOutlinedIcon/></Button>
      </div>
    </div>
  )
}
