import React, {Component} from "react"
import PropTypes from 'prop-types';

const withRelayServerResponse = (key) => (WrappedComponent) => {
    return class WithRelayServerResponse extends Component {
        static contextTypes = {
            relayServerResponse: PropTypes.object.isRequired,
        };

        render() {

            if (this.context.relayServerResponse&&!this.data) {
                if (typeof key === 'function') {
                    this.data = key(this.context.relayServerResponse, this.props);
                } else {
                    this.data = this.context.relayServerResponse[key];
                }
            }

            return (
                <WrappedComponent {...this.props} relayServerResponse={this.data}/>
            )
        }
    }
};

export default withRelayServerResponse
