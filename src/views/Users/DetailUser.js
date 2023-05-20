import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class DetailUser extends React.Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    let id = this.props.match.params.id;
    let res = await axios.get(`https://reqres.in/api/users/${id}`);
    this.setState({
      user: res.data.data,
    });
  }

  handleBack = () => {
    this.props.history.push("/users");
  };

  render() {
    let user = this.state.user;
    let isUserEmpty = Object.keys(user).length === 0;
    return (
      <>
        {!isUserEmpty && (
          <>
            <div>
              name: {user.first_name} - {user.last_name}
            </div>
            <div>email: {user.email}</div>
            <div>
              <img alt="" src={user.avatar}></img>
            </div>
            <div>
              <button type="button" onClick={() => this.handleBack()}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
