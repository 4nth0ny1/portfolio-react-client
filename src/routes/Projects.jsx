import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects() {
    return (
      <main>
        <h2 className='project-header'>Projects</h2>
        <div className="project-card-container">
        <Card className="p-card" sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/crm.jpg"
            src="google.com"
            alt="green iguana"
          />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div">
              Rails CRM
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A unique customer relationship manager (CRM) for sales reps that love to make a lot of calls and keep track of their KPIs.
            </Typography>
          </CardContent>
          <CardActions className="card-links">
            <Button size="small"><a href="https://acsoftware.medium.com/rails-crm-7cadb4d31e09">Blog</a></Button>
            <Button size="small"><a className="project-link" href="https://github.com/4nth0ny1/rails-crm">GitHub</a></Button>
            <Button size="small"><a className="project-link" href="https://rails-crm-ac.herokuapp.com/">Heroku</a></Button>
            <Button size="small"><a className="project-link" href="https://www.loom.com/share/cff177c842c7422f8cf72b70d1da993c">Demo</a></Button>
          </CardActions>
        </Card>

        <Card className="p-card" sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/project.jpg"
            src="google.com"
            alt="green iguana"
          />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div">
              Vanilla JavaScript Project Manager
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An adaptive project management tool allowing users to create & track multiple project ideas from creation to completion. 
            </Typography>
          </CardContent>
          <CardActions className="card-links">
            <Button size="small"><a href="https://acsoftware.medium.com/project-manager-js-ror-project-608d1e82f4a6">Blog</a></Button>
            <Button size="small"><a className="project-link" href="https://github.com/4nth0ny1/jiraclone-frontend">GitHub</a></Button>
            <Button size="small"><a className="project-link" href="https://www.loom.com/share/26568f7f1cef4e538adaab6eefe4ff3f">Demo</a></Button>
          </CardActions>
        </Card>

        <Card className="p-card" sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/reddit.jpg"
            src="google.com"
            alt="green iguana"
          />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div">
              ReactJS Reddit Clone
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A simple take on one of my favorite social media websites, Reddit. 
            </Typography>
          </CardContent>
          <CardActions className="card-links">
            <Button size="small"><a href="https://acsoftware.medium.com/react-redux-rails-reddit-clone-7c9d47907f60">Blog</a></Button>
            <Button size="small"><a className="project-link" href="https://github.com/4nth0ny1/reddit-front-2">GitHub</a></Button>
            <Button size="small"><a className="project-link" href="https://www.loom.com/share/a7b07fc502984e9391d409c0bb7fdc3a">Demo</a></Button>
          </CardActions>
        </Card>

        </div>
      </main>
    );
  }