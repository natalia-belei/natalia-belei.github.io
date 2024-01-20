import NavButton from '@/app/_shared-components/NavButton';
import { PropTypes } from 'prop-types';

const ProjectsNavBar = ({ prevId, nextId }) => {
    return (
        <div className="flex flex-row justify-between 
            md:my-6 sm:my-4">
            <span>
                {prevId && <NavButton href={`/projects/${prevId}`} fullLabel='← PREVIOUS PROJECT' xsLabel='← PREV' />}
            </span>
            <span>
                {nextId && <NavButton href={`/projects/${nextId}`} fullLabel='NEXT PROJECT →' xsLabel='NEXT →' />}
            </span>
        </div>
    )
}

ProjectsNavBar.propTypes = {
    prevId: PropTypes.number,
    nextId: PropTypes.number,
};

export default ProjectsNavBar;