import React, {Component} from 'react';
import cls from './Drawer.module.css';
import Backdrop from './../../UI/Backdrop/Backdrop';
import {NavLink} from 'react-router-dom';



class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks(links) {
        return links.map((link, index) => {
            return(
                <li key={index}>
                    <NavLink 
                        to={link.to}
                        exact={link.exact}
                        activeClassName={cls.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {

        const clsNav = [cls.Drawer];

        if (!this.props.isOpen) {
            clsNav.push(cls.close);
        } 

        const links = [
            {to: '/', label: 'List', exact: true}
        ]

        console.log('AUth', this.props.isAuthenticated)

        if (this.props.isAuthenticated) {
            links.push({to: '/quiz-creator', label: 'Create Test', exact: false})
            links.push({to: '/logout', label: 'Exit', exact: false})
        } else {
            links.push({to: '/auth', label: 'Authorization', exact: false})
        }

        return(
            <React.Fragment>
                <nav className={clsNav.join(' ')}>
                    <ul>
                        {this.renderLinks(links) }
                    </ul>
                </nav>

               { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null } 
            </React.Fragment>
        )
    }
}

export default Drawer;