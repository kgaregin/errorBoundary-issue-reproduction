import * as React from "react";

export class BuggedComponent extends React.Component {
    render() {
        throw Error('im dead');
    }
}