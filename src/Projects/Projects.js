import React from 'react';
import Project from './Project/Project.js';
import './Projects.css';

export default function Projects() {
  return (
    <div className='ProjectsContainer'>
        <div className="titles">
            <h3>Our Latest Projects</h3>
            <p>Here is our latest projects. You'll love them!</p>
        </div>
        <div className="imgs">
            <Project title="Project X" img="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1443890484047-5eaa67d1d630-1-1024x714.jpg"/>
            <Project title="Project X" img="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1443890484047-5eaa67d1d630-1-1024x714.jpg"/>
            <Project title="Project X" img="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1443890484047-5eaa67d1d630-1-1024x714.jpg"/>
            <Project title="Project X" img="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1443890484047-5eaa67d1d630-1-1024x714.jpg"/>
        </div>
    </div>
  )
}