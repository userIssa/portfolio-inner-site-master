import React from 'react';

import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Music & Sound</h1>
            <h3>Ventures</h3>

            <br />

            <div className="text-block">
                <p>
                    Music has been a core part of my creative journey. I started producing at a young age and
                    have spent years experimenting with different genres and techniques.
                </p>

                <br />

                <p>
                    While I don’t actively release music publicly, I enjoy the process of creating and refining
                    ideas. Below are a few highlights from my work.
                </p>
            </div>

            <br />

            <h2>Exploring House</h2>

            <p>
                During one phase, I focused heavily on house music — experimenting with groove, rhythm, and
                melodic structure inspired by artists in the space.
            </p>

            <br />

            <div className="captioned-image">
                <img src={houseProject} alt="House project screenshot" />
                <p>
                    <sub>
                        <b>Figure 1:</b> Project file showing arrangement and layering
                    </sub>
                </p>
            </div>

            <p><i>Audio preview removed to improve performance.</i></p>

            <br />

            <h2>Mid-Tempo Exploration</h2>

            <p>
                I also explored darker mid-tempo styles, focusing on bass design and atmospheric tension.
            </p>

            <p><i>Audio preview removed to improve performance.</i></p>

            <br />

            <h2>Drum & Bass</h2>

            <p>
                Drum & Bass has always been a recurring influence in my production style. I enjoy working on
                drum layering, rhythm complexity, and energetic compositions.
            </p>

            <br />

            <div className="captioned-image">
                <img src={dnbDrumsProject} alt="Drum and bass project breakdown" />
                <p>
                    <sub>
                        <b>Figure 2:</b> Drum layering and structure breakdown
                    </sub>
                </p>
            </div>

            <p><i>Audio preview removed to improve performance.</i></p>

            <br />

            <h2>The Future</h2>

            <p>
                I plan to continue creating music and refining my style. Eventually, I aim to release selected
                works publicly once I’m fully satisfied with their quality and direction.
            </p>

            <br />
        </div>
    );
};

export default MusicProjects;