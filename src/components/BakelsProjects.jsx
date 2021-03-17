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
              >
                App Demo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/RebeccaBakels/senior-dev-duckie"
              >
                Frontend Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/RebeccaBakels/api-senior-dev-duckie"
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
              >
                App Demo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/RebeccaBakels/ToDo-Too"
              >
                Frontend Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/RebeccaBakels/todo-too-api"
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
                image="assets/time_tracker.png"
                title="preview of time tracker website"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Time Tracker
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
              >
                App Demo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/RebeccaBakels/time-tracker-web"
              >
                Frontend Repo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/RebeccaBakels/time-tracker-api"
              >
                API Repo
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BakelsProjects;
