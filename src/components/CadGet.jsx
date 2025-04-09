import React from 'react';
import Grid from '@mui/material/Grid'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CadGet = () => {
  return (
    <div>
      <Grid container spacing={3} justifyContent="center">
       <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="lizard.jpg"
    
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="butterfly.avif"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                butterfly
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Butterflies are beautiful, flying insects with large scaly wings. 
              They are known for their vibrant colors and patterns, 
              and they play a vital role in pollination.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="catter.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                catterpillar
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Caterpillars are the larval stage of butterflies and moths. They are known for their segmented bodies and voracious appetite for leaves. Caterpillars undergo
               metamorphosis to transform into beautiful butterflies or moths.
               </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default CadGet;