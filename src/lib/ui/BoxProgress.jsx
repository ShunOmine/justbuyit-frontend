import React from 'react'
import {makeStyles} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from 'clsx';
import Button from '@material-ui/core/Button'
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    color: "white",
    borderRadius: 30,
    padding: "9px 30px",
    letterSpacing: 1,
    boxShadow: "0 0 25px rgba(0, 0, 0, .15)",
    textTransform: "unset",
    '&:hover': {
      backgroundColor: green[500],
      boxShadow: "0 0 25px rgba(0, 0, 0, .15)",
    },
  },
  buttonDefault: {
    backgroundColor: "#333",
    borderRadius: 30,
    padding: "9px 30px",
    boxShadow: "0 0 25px rgba(0, 0, 0, .15)",
    letterSpacing: 1,
    textTransform: "unset",
    '&:hover': {
      backgroundColor: "#333",
      boxShadow: "0 0 25px rgba(0, 0, 0, .15)",
    },
  },
  buttonProgress: {
    color: "primary",
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));


function BoxProgress() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
    [classes.buttonDefault]: !success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
          type="submit"
        >
          {success ? <CheckIcon /> : null} {success ? "Success" : "Accept terms"}
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
}

export default BoxProgress
