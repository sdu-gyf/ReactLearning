import React from 'react';

export default class Compose extends React.Component {
    render() {
        return (
            <div>
                { this.props.children? this.props.children : "外部没有传值进来"}
            </div>
        )
    }
}