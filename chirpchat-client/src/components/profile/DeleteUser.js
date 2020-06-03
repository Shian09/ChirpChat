import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//MUI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

//Redux
import { connect } from "react-redux";
import { deleteUser } from "../../redux/actions/userActions";

const styles = {
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  deleteButton: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
};

class DeleteUser extends Component {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleDeleteUser = () => {
    this.props.deleteUser(this.props.handle);

    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.deleteButton}>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleOpen}
          >
            <span className={classes.textStyle}>Delete Account</span>
          </Button>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Are you sure you want to delete this account?
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>

            <Button
              onClick={this.handleDeleteUser}
              color="secondary"
              component={Link}
              to="/"
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

DeleteUser.propTypes = {
  classes: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
  handle: PropTypes.string.isRequired,
};

export default connect(null, { deleteUser })(withStyles(styles)(DeleteUser));
