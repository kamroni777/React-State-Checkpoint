import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate software developer with 5 years of experience in building web applications.",
        imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
        profession: "Senior Software Engineer"
      },
      shows: false,
      mountTime: new Date(),
      timeSinceMount: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const seconds = Math.floor((new Date() - this.state.mountTime) / 1000);
      this.setState({ timeSinceMount: seconds });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({ shows: !prevState.shows }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>Profile Toggle App</h1>
        
        <button onClick={this.toggleShow} className="toggle-btn">
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        <div className="time-counter">
          Component mounted {timeSinceMount} seconds ago
        </div>

        {shows && (
          <div className="profile-card">
            <img src={imgSrc} alt={fullName} className="profile-img" />
            <h2>{fullName}</h2>
            <h3>{profession}</h3>
            <p>{bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;