import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';

class RelayServerDataProvider extends Component {
    static propTypes = {
        relayServerData: PropTypes.object.isRequired,
    };

    static childContextTypes = {
        relayServerData: PropTypes.object.isRequired,
    };

    getChildContext() {
        const {relayServerData} = this.props;
        return {relayServerData}
    }

    render() {
        return Children.only(this.props.children)
    }
}

export default RelayServerDataProvider
