import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Scream from "../components/scream/Scream";
import StaticProfile from "../components/profile/StaticProfile";
import ScreamSkeleton from "../util/ScreamSkeleton";
import ProfileSkeleton from "../util/ProfileSkeleton";
import DeleteUser from "../components/profile/DeleteUser";

//MUI
import Grid from "@material-ui/core/Grid";

//Redux Stuff
import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";

class user extends Component {
  state = {
    profile: null,
    screamIdParam: null,
  };

  componentDidMount() {
    const handle = this.props.match.params.handle;
    const screamId = this.props.match.params.screamId;
    if (screamId) this.setState({ screamIdParam: screamId });
    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({ profile: res.data.user });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { screams, loading } = this.props.data;
    const { authenticated, userHandle } = this.props;
    const { screamIdParam } = this.state;
    const handle = this.props.match.params.handle;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteUser handle={handle} />
      ) : null;

    const screamsMarkUp = loading ? (
      <p>
        <ScreamSkeleton />
      </p>
    ) : screams === null ? (
      <p>No screams from this user</p>
    ) : !screamIdParam ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      screams.map((scream) => {
        if (scream.screamId !== screamIdParam)
          return <Scream key={scream.screamId} scream={scream} />;
        else return <Scream key={scream.screamId} scream={scream} openDialog />;
      })
    );

    return (
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          {screamsMarkUp}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.profile === null ? (
            <p>
              <ProfileSkeleton />
            </p>
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
          <div>{deleteButton}</div>
        </Grid>
      </Grid>
    );
  }
}

user.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  userHandle: PropTypes.object.isRequired,
  authenticated: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  userHandle: state.user.credentials.handle,
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { getUserData })(user);
