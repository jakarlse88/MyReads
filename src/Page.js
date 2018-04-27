/* From
 * http://blog.scottlogic.com/2017/05/24/creating-semantic-components-in-angular-and-react.html 
 */

import React, { Fragment } from 'react';
import './page.css';

export function Page({ children }) {
    return (
        <Fragment>
            {children} 
        </Fragment>
    ) 
}

export function Header({ title }) {
    return (
        <Fragment>
            <header className="site-header">
                <h1>{title}</h1>
            </header>
        </Fragment>
    )
}

export function Body({ children }) {
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export function Footer({ content }) {
    return (
        <Fragment>
            <footer className="site-footer">
                <p>{content}</p>
            </footer>
        </Fragment>
    )
}