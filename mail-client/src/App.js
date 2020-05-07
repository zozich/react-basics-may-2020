import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import Loading from './components/Loading/Loading';

class App extends React.Component {
  // constructor (props) {
  //   super(props);

  //   this.state = {}
  // }

  state = {
    currentUser: {
      name: 'Andrew',
      age: 32
    },
    title: 'Hello from my React app',
    emails: []
  }

  changeTitle = () => {
    this.setState({ title: 'New title' });
  }

  incrementAge = () => {
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        age: this.state.currentUser.age + 2
      }
    })
  }

  componentDidMount() {
    console.log('componentDidMount in App.js');

    axios.get('/emails')
      .then(res => {
        setTimeout(() => {
          this.setState({ emails: res.data })
        }, 2000);
      })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate in App.js');
  }

  render() {
    const { currentUser, title, emails } = this.state;

    if (emails.length === 0) {
      return <Loading />
    }

    return (
      <div className="App">
        <Header user={currentUser} title={title} />
        <Body emails={emails} />
        <Footer changeTitle={this.changeTitle} incrementAge={this.incrementAge} />
      </div>
    );
  }
}

export default App;
