import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Mindrift</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://mindrift.ai/'}
                        >
                            <h4>www.mindrift.ai</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>AI Tutor, Multilingual Projects</h3>
                        <b>
                            <p>2025 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    •Reviewed multilingual tutoring outputs to improve clarity, correctness, and reasoning quality across languages.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Flagged translation errors, cultural mismatches, and ambiguous explanations, then proposed corrected responses.
                        </p>
                    </li>
                    <li>
                        <p>
                            Evaluated model answers against guidelines and provided structured feedback to reduce bias and inconsistency.
                        </p>
                    </li>
                    <li>
                        <p>
                            •Helped adapt technical explanations so meaning stays accurate across languages rather than being literal translations.
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Paddle Company</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://paddle.com/'}
                        >
                            <h4>www.paddle.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer</h3>
                        <b>
                            <p>Winter 2024 - Summer 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    •Led development of internal web tools that reduced manual reporting time by 40% by automating workflows with web applications and reusable components.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Managed the project and team members by conducting
                            bi-weekly stand-ups.
                        </p>
                    </li>
                    <li>
                        <p>
                            •Improved application reliability, cutting recurring production issues by 25% by adding monitoring, analysing incident trends, and fixing root causes.
                        </p>
                    </li>
                    <li>
                        <p>
                            •Collaborated with product and design teams to deliver features 20% faster by breaking work into smaller tasks and improving handover between teams
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented bracket generation utilities which
                            employ gray code for proper team seeding and
                            placement.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Dufil Prima Foods Plc</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://dufil.com/'}
                        >
                            <h4>www.dufil.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>System Administrator and Network Engineer </h3>
                        <b>
                            <p>Winter 2022 - Summer 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Applied problem solving and technical skills to operate
                    large equipment such as rain machines, fog machines, small
                    explosives and general rigging with a professional crew of
                    50+ people.
                </p>
                <br />
                <h3 style={styles.indent}>Screen Credits:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• Oderinde Tolu</p>
                        <p>
                            [{' '}
                            <a
                                href="https://tolu-oderinde-portfolio.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Ray Donovan: The Movie</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/titles/3508117/ray-donovan-the-movie"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Hightown</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.starz.com/us/en/series/hightown/57463"
                                target="_blank"
                                rel="noreferrer"
                            >
                                STARZ
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Bull</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.cbs.com/shows/bull/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CBS
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• At Home with Amy Sedaris</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.trutv.com/shows/at-home-with-amy-sedaris"
                                target="_blank"
                                rel="noreferrer"
                            >
                                truTV
                            </a>{' '}
                            ]
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
