const { LayoutRouterContext } = require("next/dist/shared/lib/app-router-context.shared-runtime");
const { useContext, useRef } = require("react");
import PropTypes from 'prop-types';

const FrozenRouter = (props) => {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}

FrozenRouter.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FrozenRouter;