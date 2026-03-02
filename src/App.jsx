// src/App.jsx
import React, { useState } from 'react';
import ContentCard from './ContentCard';
import './App.css';

import imgRunBts120 from './assets/image/runbts-120.webp';
import imgMma2018 from './assets/image/mma-2018.jpg';
import imgBurnStage from './assets/image/burn-the-stage.webp';
import imgRunBts33 from './assets/image/runbts-33.webp';
import imgMma2019 from './assets/image/mma-2019.jpg';
import imgBringSoul from './assets/image/bring-the-soul.jpeg';
import imgBtsBomb from './assets/image/btsbomb.jpg';
import imgMusicBankDna from './assets/image/musicbank-dna.jpg';
import imgBreakSilence from './assets/image/break-the-silence.jpg';
import imgRunBts131 from './assets/image/runbts-131.jpg';

function App() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'Variety Show', 'Performance', 'Documentary'];

  const btsContent = [
    { id: 1, title: 'Run BTS! Ep 120 - Reply BTS Village', tag: 'Variety Show', date: '00:36:19', desc: 'BTS Village: Joseon Dynasty Part 1', image: imgRunBts120, watchLink: 'https://www.youtube.com/watch?v=gi1iLPjvXBw', learnLink: 'https://www.reddit.com/r/bangtan/comments/kdkgvy/201215_run_bts_2020_ep120/'},
    { id: 2, title: 'MMA 2018 IDOL Stage', tag: 'Performance', date: '00:06:42', desc: 'High-energy stage with iconic choreography', image: imgMma2018, watchLink: 'https://youtu.be/9NZW0Utv2jg?si=V1X4W6dqKFnS9h8v', learnLink: 'https://www.reddit.com/r/bangtan/comments/a25yuv/bts_melon_music_awards_2018_performance/'},
    { id: 3, title: 'Burn the Stage: The Movie', tag: 'Documentary', date: '01:24:00', desc: 'Following the 300-day journey of the BTS sold out world tour', image: imgBurnStage, watchLink: 'https://www.imdb.com/title/tt9151704/', learnLink: 'https://en.wikipedia.org/wiki/Burn_the_Stage:_The_Movie'},
    { id: 4, title: 'Run BTS! Ep 33 - Photo Challenge', tag: 'Variety Show', date: '00:25:18', desc: 'BTS tests their agility and fears in an obstacle course', image: imgRunBts33, watchLink: 'https://youtu.be/on_ZvxjJRl4?si=5WRIw0li8sFsEHQ8', learnLink: 'https://www.reddit.com/r/bangtan/comments/7m7fo5/171226_run_bts_ep_33/'},
    { id: 5, title: 'MMA 2019 Full Live Stage', tag: 'Performance', date: '00:37:08', desc: 'Legendary 37-minute stage performance', image: imgMma2019, watchLink:'https://youtu.be/b9cG4DzpL_c?si=EC35fvBW_OuFqq80' , learnLink:'https://www.billboard.com/music/music-news/bts-performance-2019-melon-music-awards-8545107/'},
    { id: 6, title: "Bring the Soul : The Movie", tag: "Documentary", date: "01:45:00", desc: "An authentic glimpse into BTS's world away from the stage", image: imgBringSoul, watchLink:'https://www.imdb.com/title/tt10545076/' , learnLink:'https://bts.fandom.com/wiki/Bring_The_Soul:_The_Movie'},
    { id: 7, title: "Bangtan Bomb 150216 : j-hope vs 95z", tag: "Variety Show", date: "00:01:24", desc: "J-Hope interacts with the 95 liners (V and Jimin) in a playful, chaotic, and energetic chemistry.", image: imgBtsBomb, watchLink:'https://youtu.be/30OTTR5quIY?si=vVHDYE56snbntkCw' , learnLink:'https://www.reddit.com/r/bangtan/comments/4r01s1/your_favorite_video_of_bts/'},
    { id: 8, title: "Music Bank - DNA Comeback" , tag :"Performance" , date :"00:03:49" , desc :"Epic comeback stage for the Love Yourself Her era" , image: imgMusicBankDna , watchLink :'https://youtu.be/skqW8gbXx6g?si=uNztItuzbp14PNkA' , learnLink :'https://www.btslyrictranslations.com/post/__dna'},
    { id: 9, title: 'Break the Silence: The Movie', tag: 'Documentary', date: '01:30:00', desc: "Sequel to the previous documentary, further showcasing the band's vulnerable emotional side", image: imgBreakSilence, watchLink:'https://www.imdb.com/title/tt12850582/' , learnLink:'https://en.wikipedia.org/wiki/Break_the_Silence:_The_Movie'},
    { id: 10, title: "Run BTS! Ep 131 - Return of the Titanic", tag: "Variety Show", date: "00:33:53", desc: "BTS Members in a swimming pool challenge", image: imgRunBts131, watchLink:'https://youtu.be/WVwm4HEl3es?si=8a3WlDdBgDca0PWw' , learnLink:'https://www.reddit.com/r/bangtan/comments/lw05m1/210302_run_bts_2021_ep131/'}
  ];

  const filteredContent = activeFilter === 'All' ? btsContent : btsContent.filter(item => item.tag === activeFilter);

  return (
    <div className="app-container">
      <header className='site-header'>
        <h1>BTS Content Club</h1>
        <p>Your community watchboard for viewing BTS contents and legendary performances.</p>
      </header>

      <div className="filter-container">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <main className="card-grid" key={activeFilter}>
        {filteredContent.map((item) => (
          <ContentCard
            key={item.id}
            title={item.title}
            tag={item.tag}
            dateOrDuration={item.date}
            description={item.desc}
            image={item.image}
            watchLink={item.watchLink}
            learnLink={item.learnLink}
          />
        ))}
      </main>
    </div>
  );
}

export default App;