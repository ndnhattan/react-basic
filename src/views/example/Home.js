import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.addUserRedux();
  };

  render() {
    let listUsers = this.props.dataRedux;

    return (
      <div>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <div key={item.id}>
                {index + 1} - {item.name}{" "}
                <span onClick={() => this.handleDeleteUser(item)}>x</span>
              </div>
            );
          })}
        <button onClick={() => this.handleCreateUser()}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
