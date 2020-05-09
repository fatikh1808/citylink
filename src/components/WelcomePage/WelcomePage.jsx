import React from "react";
import BreadcrumbsComponent from "../Breadcrumbs";

export default function WelcomePage() {
    return (
        <div>
            <div className={'breadcrumbs'}>
                <BreadcrumbsComponent/>
            </div>
            Welcome page
        </div>
    )
}