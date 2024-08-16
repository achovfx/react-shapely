import React from 'react';
import HomeItem from './HomeItem/HomeItem';
import './Home.css';

export default function Home() {
  return (
    <div className='home-container'>
        <HomeItem title="SEO Friendly" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies." btnText="Read More" img="./images/macbook.png" />
        <HomeItem dir="rtl" title="Portfolio Section" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum." btnText="SEE IT IN ACTION" img="./images/macbook2.png" />
    </div>
  )
}
