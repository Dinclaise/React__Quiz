import React, {Component} from 'react';
import cls from './Drawer.module.css';
import Backdrop from './../../UI/Backdrop/Backdrop';


const links = [
    1, 2, 3 
]

class Drawer extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return(
                <li key={index}>
                    <a>Links {link}</a>
                </li>
            )
        })
    }

    render() {

        const clsNav = [cls.Drawer];

        if (!this.props.isOpen) {
            clsNav.push(cls.close);
        } 

        return(
            <React.Fragment>
                <nav className={clsNav.join(' ')}>
                    <ul>
                        {this.renderLinks() }
                    </ul>
                </nav>

               { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null } 
            </React.Fragment>
        )
    }
}

export default Drawer;