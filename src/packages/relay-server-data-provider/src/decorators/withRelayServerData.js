import React, {Component} from "react"
import PropTypes from 'prop-types';

const withRelayServerData = (key) => (WrappedComponent) => {
    return class WithRelayServerData extends Component {
        static contextTypes = {
            relayServerData: PropTypes.object.isRequired,
        };

        render() {

            if (this.context.relayServerData&&!this.data) {
                if (typeof key === 'function') {
                    this.data = key(this.context.relayServerData, this.props);
                } else {
                    this.data = this.context.relayServerData[key];
                }
            }

            return (
                <WrappedComponent {...this.props} relayServerData={this.data}/>
            )
        }
    }
};

export default withRelayServerData
