import React from 'react';
import { ReactVideo } from 'reactjs-media';
import Intro from '../../assets/intro.mp4';
import Poster from '../../assets/poster.jpg';

const Video = () => {
  return (
    <div>
      <ReactVideo src={Intro} poster={Poster} primaryColor="black" />
    </div>
  );
};

export default Video;
