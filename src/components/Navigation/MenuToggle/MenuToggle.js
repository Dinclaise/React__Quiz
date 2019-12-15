import React from 'react';
import cls from './MenuToggle.module.css';


const MenuToggle = props => {
    const clsMenu = [
        cls.MenuToggle,
        'fa'
    ]

    if (props.isOpen) {
        clsMenu.push('fa-times');
        clsMenu.push(cls.open);
    } else {
        clsMenu.push('fa-bars');
    }

    return(
        <i className={clsMenu.join(' ')} 
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle