import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="data:image/jpeg;base64,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" 
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Michael DeGray</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce non orci erat. Pellentesque quam orci, condimentum ut congue ut, 
                        scelerisque id neque. Nam neque mauris, vestibulum quis lorem id, 
                        faucibus scelerisque ex. In sed augue feugiat turpis sollicitudin 
                        condimentum. 
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>1 Phoenix Way City, ST 12125</p>
                        <h5>Phone</h5>
                        <p>(231) 555-1234</p>
                        <h5>Email</h5>
                        <p>someone@somewhere.com</p>
                        <h5>Web</h5>
                        <p>mysite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2014}
                            endYear={2017}
                            schoolName="Western New England University"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce non orci erat. Pellentesque quam orci, condimentum ut congue ut, 
                        scelerisque id neque. Nam neque mauris, vestibulum quis lorem id, 
                        faucibus scelerisque ex. In sed augue feugiat turpis sollicitudin 
                        condimentum."
                        />

                        <Education 
                            startYear={2011}
                            endYear={2014}
                            schoolName="Springfield Technical Community College"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce non orci erat. Pellentesque quam orci, condimentum ut congue ut, 
                        scelerisque id neque. Nam neque mauris, vestibulum quis lorem id, 
                        faucibus scelerisque ex. In sed augue feugiat turpis sollicitudin 
                        condimentum."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience
                            startYear={2017}
                            endYear={2020}
                            jobName="First Job"
                            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce non orci erat. Pellentesque quam orci, condimentum ut congue ut, 
                        scelerisque id neque. Nam neque mauris, vestibulum quis lorem id, 
                        faucibus scelerisque ex. In sed augue feugiat turpis sollicitudin 
                        condimentum."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <Skills 
                            skill="HTML/CSS"
                            progress={100}
                        />
                        <Skills 
                            skill="JavaScript"
                            progress={90}
                        />
                        <Skills 
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills 
                            skill="React"
                            progress={40}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;