import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Emmanuel Nwaeke</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer currently working at Mindrift! In May
                    of 2026 I graduated from Northumbria University
                    with my M.Sc. in Cyber Security.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:emmanuelemmzy77@gmail.com">
                        emmanuelemmzy77@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I have had a curiosity about how things
                    worked. This naturally led me to become absolutely obsessed
                    with Lego and I fell in love with building things. In
                    elementary school, I joined the Lego Robotics team at my
                    local middle school, which was my first real exposure to
                    programming. In 2014, I attended middle
                    school, high school, and college in Nigeria.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming more seriously in high school,
                    initially learning how to scrape and interact with websites.
                    I went on to do a ton of passion projects, many of them with
                    one of my closest friends,{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/toluwanimi-oderinde/"
                    >
                        Toluwanimi Oderinde
                    </a>
                    . We worked on many projects together, including chat bots,
                    multiple game projects, apps, and more. One of these
                    projects is viewable on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    In 2020, I got accepted into Babcock University to study Software Engineering. 
                    It was my first choice
                    and I was absolutely ecstatic to be going to such a great
                    university. At the end of my first year, I got an
                    internship working for a startup, primarily focusing
                    on frontend work. I continued to work on and off
                    for about a year and a half, until the start of my senior
                    year when I decided to focus on other opportunities.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. The more tangible
                            hobbies I have are{' '}
                            <Link to="/projects/music">Music Production</Link>{' '}
                            and creating{' '}
                            <Link to="/projects/art">Digital Art</Link>. You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are working out, cooking, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                        <p>
                            In college, I was an active member in the Google Developer Student Clubs Babcock University Chapter and held multiple positions in
                            the chapter. I met a lot of amazing people through
                            the club and thoroughly enjoyed the community.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2022
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    :) {' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    >
                        hidden
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:emmanuelemmzy77@gmail.com">
                        emmanuelemmzy77@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
