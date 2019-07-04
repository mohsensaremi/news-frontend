import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';

class RelayServerResponseProvider extends Component {
    static propTypes = {
        relayServerResponse: PropTypes.object.isRequired,
    };

    static childContextTypes = {
        relayServerResponse: PropTypes.object.isRequired,
    };

    getChildContext() {
        const {relayServerResponse} = this.props;
        return {relayServerResponse}
    }

    render() {
        return Children.only(this.props.children)
    }
}

export default RelayServerResponseProvider
