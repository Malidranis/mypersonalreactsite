import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0}
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', 
                        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTJhHRH4bHHcHjk9FzDeF22aLq5NPJ5foOlQ&usqp=CAU) center / cover'}}>CSS Project #1</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce non orci erat. Pellentesque quam orci, condimentum ut congue ut, 
                        scelerisque id neque. Nam neque mauris, vestibulum quis lorem id, 
                        faucibus scelerisque ex. In sed augue feugiat turpis sollicitudin 
                        condimentum.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', 
                        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTJhHRH4bHHcHjk9FzDeF22aLq5NPJ5foOlQ&usqp=CAU) center / cover'}}>CSS Project #2</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce non orci erat. Pellentesque quam orci, condimentum ut congue ut, 
                        scelerisque id neque. Nam neque mauris, vestibulum quis lorem id, 
                        faucibus scelerisque ex. In sed augue feugiat turpis sollicitudin 
                        condimentum.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', 
                        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTJhHRH4bHHcHjk9FzDeF22aLq5NPJ5foOlQ&usqp=CAU) center / cover'}}>CSS Project #3</CardTitle>
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce non orci erat. Pellentesque quam orci, condimentum ut congue ut, 
                        scelerisque id neque. Nam neque mauris, vestibulum quis lorem id, 
                        faucibus scelerisque ex. In sed augue feugiat turpis sollicitudin 
                        condimentum.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
                
            );
        }else if(this.state.activeTab === 1){
            return(
                <div><h1>This is React</h1></div>
            );
        }else if(this.state.activeTab === 2){
            return(
                <div><h1 style={{textAlign: 'center'}}>Under Construction, come back soon!</h1></div>
            );
        }
    }    

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>CSS</Tab>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>                    
               
            </div>    
        );
    }
}

export default Projects;