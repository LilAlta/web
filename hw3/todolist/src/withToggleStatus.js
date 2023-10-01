import React, { Component } from 'react';

function withToggleStatus(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                pending: true,
            };
        }

        toggleStatus = () => {
            this.setState((prevState) => ({
                pending: !prevState.pending,
            }));
        };

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    pending={this.state.pending}
                    toggleStatus={this.toggleStatus}
                />
            );
        }
    };
}

export default withToggleStatus;
