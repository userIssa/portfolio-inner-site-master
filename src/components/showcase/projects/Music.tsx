import React, { useState } from 'react';

import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';

import { MusicPlayer } from '../../general';

// Audio files (must NOT be above imports)
const house = '/media/audio/house_master.mp3';
const edge = '/media/audio/edge_unmastered.mp3';
const dnb = '/media/audio/break.mp3';
const dnbDrums = '/media/audio/dnb_drop_drums.mp3';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = () => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Music & Sound</h1>
            <h3>Ventures</h3>

            <br />

            <div className="text-block">
                <p>
                    Music has been a passion of mine for my whole life. When I
                    was 15 years old, I downloaded FL Studio and started to
                    produce my own music.
                </p>

                <br />

                <p>
                    I don’t release most of my music publicly because I focus
                    more on the creative process than publishing finished work.
                </p>

                <br />

                <p>
                    Below are some selected projects I’m proud of.
                </p>
            </div>

            <br />
            <h2>Exploring house</h2>

            <p>
                In 2020 I experimented heavily with house music inspired by
                artists like Malaa and Chris Lake.
            </p>

            <br />

            <MusicPlayer
                src={house}
                title="Timeless"
                subtitle="Henry Heffernan - 2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />

            <div className="captioned-image">
                <img src={houseProject} alt="House project screenshot" />
                <p>
                    <sub>
                        <b>Figure 1:</b> Project file for “Timeless”
                    </sub>
                </p>
            </div>

            <br />

            <h2>Mid-Tempo</h2>

            <p>
                I later explored darker mid-tempo sounds with more aggressive
                bass design.
            </p>

            <br />

            <MusicPlayer
                src={edge}
                title="Edge [W.I.P.]"
                subtitle="Henry Heffernan - 2021"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />

            <h2>Drum & Bass</h2>

            <p>
                Drum & Bass has always been a core influence in my production
                style.
            </p>

            <br />

            <MusicPlayer
                src={dnb}
                title="Break [Demo]"
                subtitle="2019/2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />

            <MusicPlayer
                src={dnbDrums}
                title="Break [Drums + Sub]"
                subtitle="2019/2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />

            <div className="captioned-image">
                <img src={dnbDrumsProject} alt="DnB drums breakdown" />
                <p>
                    <sub>
                        <b>Figure 2:</b> Drum layering analysis
                    </sub>
                </p>
            </div>

            <br />

            <h2>The Future</h2>

            <p>
                I plan to release more music publicly as my style matures and
                becomes more consistent.
            </p>
        </div>
    );
};

export default MusicProjects;