import React, { PureComponent } from 'react'

class Header extends PureComponent {
    render() {
        const { user, title } = this.props;

        console.log('Header.js this', this)

        return (
            <>
                <h2>{title}</h2>
                <h2>Your name is: {user.name}</h2>
                <h3>Your age is: {user.age}</h3>
            </>
        )
    }
}

export default Header