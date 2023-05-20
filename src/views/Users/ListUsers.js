import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class ListUsers extends React.Component {
  state = {
    listUsers: [],
  };
  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      this.setState({
        listUsers: res && res.data && res.data.data ? res.data.data : [],
      });
    });
  }

  handleDetailUser = (user) => {
    this.props.history.push(`/users/${user.id}`);
  };

  render() {
    let listUsers = this.state.listUsers;
    return (
      <div className="list-users-containter">
        <div className="title">Fetch all list users</div>
        <div className="list-users-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => {
                    this.handleDetailUser(item);
                  }}
                >
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUsers);
