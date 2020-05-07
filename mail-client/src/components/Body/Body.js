import React from 'react';
import './Body.scss';

// Styled components, CSS Modules, JSS

class Body extends React.Component {
    render() {
        const { emails } = this.props;

        console.log('Emails in Body', emails);

    const emailCards = emails.map(email => <div className='email__card' key={email.id}>{email.topic}</div>)

        return (
            <>
                <h2>This is body</h2>
                {emailCards}
            </>
        )
    }
}

export default Body;