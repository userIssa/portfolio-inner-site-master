import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [projectsExpanded, setProjectsExpanded] = useState(false);
    const [isHome, setIsHome] = useState(false);

    const goToContact = () => {
        navigate('/contact');
    };

    useEffect(() => {
        setProjectsExpanded(location.pathname.includes('/projects'));
        setIsHome(location.pathname === '/');
    }, [location.pathname]);

    if (isHome) return null;

    return (
        <div style={styles.navbar}>
            <div style={styles.header}>
                <h1 style={styles.headerText}>Henry</h1>
                <h1 style={styles.headerText}>Heffernan</h1>
                <h3 style={styles.headerShowcase}>Showcase '22</h3>
            </div>

            <div style={styles.links}>
                <Link to="/" style={styles.link}>HOME</Link>
                <Link to="/about" style={styles.link}>ABOUT</Link>
                <Link to="/experience" style={styles.link}>EXPERIENCE</Link>

                <Link
                    to="/projects"
                    style={{
                        ...styles.link,
                        ...(projectsExpanded ? styles.expandedLink : {})
                    }}
                >
                    PROJECTS
                </Link>

                {projectsExpanded && (
                    <div style={styles.insetLinks}>
                        <Link to="/projects/software" style={styles.insetLink}>
                            SOFTWARE
                        </Link>
                        <Link to="/projects/music" style={styles.insetLink}>
                            MUSIC
                        </Link>
                        <Link to="/projects/art" style={styles.insetLink}>
                            ART
                        </Link>
                    </div>
                )}

                <Link to="/contact" style={styles.link}>CONTACT</Link>
            </div>

            <div style={styles.spacer} />

            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                {/* Optional image */}
                {/* <img src={forHire} style={styles.image} alt="" /> */}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    navbar: {
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'column',
        marginBottom: 64,
    },
    headerText: {
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 12,
    },
    link: {
        marginBottom: 32,
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
    },
    expandedLink: {
        marginBottom: 16,
    },
    insetLinks: {
        flexDirection: 'column',
        marginLeft: 32,
        marginBottom: 16,
    },
    insetLink: {
        marginBottom: 8,
        textDecoration: 'none',
        color: 'inherit',
    },
    links: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    spacer: {
        flex: 1,
    },
    forHireContainer: {
        cursor: 'pointer',
        width: '100%',
    },
    image: {
        width: '80%',
    },
};

export default VerticalNavbar;