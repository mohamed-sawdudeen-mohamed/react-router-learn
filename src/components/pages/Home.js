import React from 'react';

class Home extends React.Component {
  state = {
    userId: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userId } = this.state;
    const { history } = this.props;
    history.push(`/usr/${userId}/no-name`);
  };

  render() {
    const { userId } = this.state;
    return (
      <div>
        <h1>This is the Home page...</h1>
        <form onSubmit={this.handleSubmit}>
          <label>User ID</label>
          <input
            value={userId}
            onChange={(e) => {
              this.setState({ userId: e.target.value });
            }}
            type="text"
          />
          <input type="submit" value="GO" />
        </form>
      </div>
    );
  }
}

export default Home;
