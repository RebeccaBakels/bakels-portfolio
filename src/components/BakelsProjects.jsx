import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function BakelsProjects() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <img
          className="projects-header"
          src="assets/long_projects.png"
          alt="square that says projects, check my github for more!"
        ></img>
        <br />
        <br />
        <br />
        <div className="card-group">
          <Card
            style={{ backgroundColor: "#ff6859a6", marginTop: "10px" }}
            className={classes.root}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="assets/sen_dev_duck.png"
                title="preview of senior dev duckie website"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Senior Dev Duckie
                  <p className="sub-title">Full-Stack</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Born from the classic Rubber Duckie method in software
                  engineering. Your Senior Dev Duckie will let you record your
                  coding block problem and play it back to help you solve your
                  block.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://senior-dev-duckie.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                App Demo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/RebeccaBakels/senior-dev-duckie"
                target="_blank"
                rel="noreferrer"
              >
                Frontend Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/RebeccaBakels/api-senior-dev-duckie"
                target="_blank"
                rel="noreferrer"
              >
                API Repo
              </Button>
            </CardActions>
          </Card>
          <Card
            style={{ backgroundColor: "#ff9659ad", marginTop: "10px" }}
            className={classes.root}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="assets/to_do_too.png"
                title="preview of To Do Too website"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  To-Do Too!
                  <p className="sub-title">Full-Stack</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A To-Do app made in React, Firestore, Express, and Node to
                  keep track of daily tasks. You can add, delete, and mark items
                  on your list as complete. Each list is specific to the user.{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://to-do-too-rb.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                App Demo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/RebeccaBakels/ToDo-Too"
                target="_blank"
                rel="noreferrer"
              >
                Frontend Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/RebeccaBakels/todo-too-api"
                target="_blank"
                rel="noreferrer"
              >
                API Repo
              </Button>
            </CardActions>
          </Card>
          <Card
            style={{ backgroundColor: "#f9b95aa6", marginTop: "10px" }}
            className={classes.root}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="assets/time_tracker.png"
                title="preview of time tracker website"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Time Tracker
                  <p className="sub-title">Full-Stack</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Time Tracker is an app that helps you keep track of the time
                  spend on each project or task to get a better idea of how
                  you're splitting up your day and even billable hours for a
                  client!{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://tracker-rb-web.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                App Demo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/RebeccaBakels/time-tracker-web"
                target="_blank"
                rel="noreferrer"
              >
                Frontend Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/RebeccaBakels/time-tracker-api"
                target="_blank"
                rel="noreferrer"
              >
                API Repo
              </Button>
            </CardActions>
          </Card>
          <Card
            style={{ backgroundColor: "#f9d95aa6", marginTop: "10px" }}
            className={classes.root}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="assets/splash_corgis.png"
                title="preview of corgis in paradise game"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Corgis in ParadICE
                  <p className="sub-title">Unity</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Corgis in Paradise is a adorable game made in Unity 3D and written in C#. You are a corgi knight, exploring your apartment kingdom, to find all the hidden treasures AKA ice cubes!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://corgisinparadicegamev3.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                App Demo
              </Button>
            </CardActions>
          </Card>
          <Card
            style={{ backgroundColor: "#ff6859a6", marginTop: "10px" }}
            className={classes.root}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="assets/beth.png"
                title="preview of corgis in paradise game"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Beth Wagmeister 
                  <p className="sub-title">Frontend</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Website built in a day for Beth Wagmeister, ASL interpreter and advocate for the deaf and hard of hearing, with Developer Michelle Bakels as part of a challenge to build 10 programs in 10 days.  
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://coding-with-sisterhood.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                App Demo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/michellebakels/coding-with-sisterhood"
                target="_blank"
                rel="noreferrer"
              >
                Frontend Repo
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BakelsProjects;
