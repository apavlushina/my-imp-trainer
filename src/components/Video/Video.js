import React from "react";
import {
  Button,
  CssBaseline,
  Paper,
  Grid,
  Box,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Container from "@material-ui/core/Container";
import logo from "../../images/logo.png";
import { Done, ArrowRight, ArrowLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Trophy from '../trophy/Trophy';
import { workouts } from '../../data';


class Video extends React.Component {
  state ={ trophy: false,
  achievement: ''}
  finishWorkout = () => {
    this.setState({
      trophy: true,
      achievement: 'workout'
    })
  };

  
  

  render() {
    const  random =  Math.floor(Math.random() *5);
    

    const { classes } = this.props;
    if(this.state.trophy){
      return <Trophy achievement={this.state.achievement}/>
    } else{
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.logo}>
            <img src={logo} alt="IMP Trainer" />
          </div>
          <Typography
            className={classes.title}
            component="h1"
            variant="h5"
            color="primary"
          >
            {this.props.title || workouts[random].title} 
          </Typography>
          <video
            className={classes.video}
            controls
            autoPlay
            src={this.props.src || workouts[random].videoUrl}
          />
          <Typography className={classes.title} component="p">
           {this.props.title || workouts[random].description} 
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper className={classes.grid}>
                <p>Kcal</p>
                <p>{this.props.calories || workouts[random].calories}</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.grid}>
                <p>Time</p>
                <p>{this.props.time || workouts[random].totalTime*0.0001}</p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.grid}>
                <p>Level</p>
                <p>{this.props.fifficulty || workouts[random].difficulty}</p>
              </Paper>
            </Grid>
          </Grid>
          <Button
            onClick={this.finishWorkout}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            <Done />
            Done!
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/dashboard" variant="body2">
                <ArrowLeft className={classes.arrow} /> My profile
              </Link>
            </Grid>
            <Grid item xs>
              <Link to="/calendar" variant="body2">
                My calendar <ArrowRight className={classes.arrow} />
              </Link>
            </Grid>
          </Grid>
        </div>
        <Box mt={8}></Box>
      </Container>
    );}
  }
}

export default withStyles(styles)(Video);
