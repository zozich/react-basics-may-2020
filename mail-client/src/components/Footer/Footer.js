import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    render() {
        const { changeTitle, incrementAge } = this.props;

        return (
            <>
                <h2>This is footer</h2>
                <button onClick={changeTitle}>Change title</button>
                <button onClick={incrementAge}>Increment Age</button>
            </>
        )
    }
}

export default Footer