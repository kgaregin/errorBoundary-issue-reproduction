import * as React from "react";
import {render} from "react-dom";
import {ErrorBoundary} from "./ErrorBoundary";
import {BuggedComponent} from "./BuggedComponent"

render(
    <ErrorBoundary>
        <BuggedComponent/>
    </ErrorBoundary>,
    document.getElementById("root")
);