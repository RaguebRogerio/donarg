import React from 'react'
import { ModalComponent } from '../Modal'
import {Grid,Typography, Chip, TextField, Button} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
const ModalVerPublicacionNoPropia = (props) => {

    return (
    <ModalComponent abrir={props.abrirModal} width={1500} height={600}>
        <>
            <Grid container direction="row" justifyContent="flex-start"  sx={{ width: 1600, height: 600}}>
                <Grid item xs={12} md={3} lg={3} style={{display: 'flex', alignItems: 'center', justifyContent:"center"}}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_930232-MLA51524289912_092022-V.jpg"  style={{width: "400px", height: "600px", borderRadius:"25px", border:"2px solid "}}/>
                </Grid>
                <Grid item xs={7} md={7} lg={7}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item xs={12} md={12} lg={12} style={{textAlign: 'center'}}>
                            <Typography variant="h3" gutterBottom component="div">
                                <b>Libros de Warren Buffet y Ryan Holiday</b>
                            </Typography>        
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} sx={{marginLeft:"3%"}}>
                            <Typography variant="h6" gutterBottom component="div">
                            Warren Edward Buffett es un inversor y empresario estadounidense. Es considerado uno de los más grandes inversores del mundo, ​​ además de ser el mayor accionista, presidente y director ejecutivo de Berkshire Hathaway
                            </Typography>        
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} sx={{marginLeft:"3%"}}>
                            <Typography variant="h6" gutterBottom component="div">
                                <b>Indque que items desea solicitar y su cantidad</b>
                            </Typography>        
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} sx={{marginLeft:"3%"}}>
                            <Grid container direction="row" spacing={1} alignItems="center">
                                <Grid item xs={4} md={4} lg={4}>
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                        <Grid item>
                                            <Typography variant="h7" gutterBottom component="div">
                                                El tao 
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <AddIcon/>
                                        </Grid>
                                        <Grid item>
                                            <Chip label="0" variant="outlined" />
                                        </Grid>
                                        <Grid item>
                                            <HorizontalRuleIcon/>
                                        </Grid>
                                    </Grid>                                
                                </Grid>
                                <Grid item xs={4} md={4} lg={4}>
                                    <Grid container direction="row" spacing={1} alignItems="center">
                                            <Grid item>
                                                <Typography variant="h7" gutterBottom component="div">
                                                    El ego es el enemigo
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <AddIcon/>
                                            </Grid>
                                            <Grid item>
                                                <Chip label="0" variant="outlined" />
                                            </Grid>
                                            <Grid item>
                                                <HorizontalRuleIcon/>
                                            </Grid>
                                        </Grid> 
                                </Grid>
                            </Grid>                            
                        </Grid>

                        <Grid item  xs={12} md={12} lg={12} sx={{marginLeft:"3%"}}>
                            <Typography variant="h6" gutterBottom component="div">
                                <b>Cuentale al donante por que mereces esto</b>
                            </Typography>
                        </Grid>
                        <Grid item  xs={12} md={12} lg={12} sx={{marginLeft:"3%"}}>
                            <TextField
                            id="descripcionOrganizacion"
                            label="Describe tu organización"
                            multiline
                            maxRows={15}
                            fullWidth
                            rows={4}
                            />
                        </Grid>
                        <Grid item  xs={12} md={12} lg={12} sx={{marginLeft:"3%", marginTop:"2%"}}>
                            <Button fullWidth variant="contained" size="lg" onClick={() =>{ }}>Agregar</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={1} lg={1} style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Grid container direction="column" justifyContent="space-between" alignItems="flex-end">
                        <Grid item>
                            <CloseIcon sx={{cursor:"pointer"}} onClick={()=>{props.closeModal(false)}}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    </ModalComponent>
  )
}
export default ModalVerPublicacionNoPropia;