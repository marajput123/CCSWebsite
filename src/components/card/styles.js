import { makeStyles } from "@material-ui/core";

export const cardStyles = makeStyles((theme) => ({
  paperRoot: {
    maxWidth: "330px",
    width: "300%",
    height: "590px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  cardStyle: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 10px 10px 10px",
  },
  cardTitle: {
    margin: "20px 0px 25px 0px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    "& h5": {
      fontWeight: "300",
      position: "relative",
      display: "flex",
      justifyContent: "center",
    },
    "& span": {
      position: "absolute",
      bottom: "-16px",
    },
  },
  underlineStyle: {
    width: "50%",
    position: "absolute",
    height: "100%",
    top: "0px",
    border: "0px 0px 1px 0px solid black",
    borderBottom: "2px solid #9fbc95",
  },
  cardBody: {
    width: "100%",
  },
  bodyHeading: {
    maxHeight: "100px",
    minHeight: "100px",
    "& p": {
      fontWeight: "300",
      textAlign: "center",
      fontSize: ".90rem",
      padding: "0px 25px",
    },
  },
  bodyContent: {
    display: "flex",
    padding: "7px 10px 0px 10px",
    "& h6": {
      fontWeight: "400",
      lineHeight: "20px",
      fontSize: ".9rem",
    },
    "& svg": {
      fontSize: "15px",
      paddingRight: "10px",
      paddingTop: "2px",
    },
  },
  cardAction: {
    position: "absolute",
    bottom: "15px",
  },
  buttonStyle: (props) => ({
    backgroundColor: props.color,
    width: "200px",
    borderRadius: "30px",
    color: "white",
    boxShadow: ` 0 14px 28px ${props.color}50, 0 10px 10px ${props.color}20`,
    "& span > a": {
      color: "white",
      textDecoration: "none",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: props.color,
    },
  }),
  cardFeatures: {
    marginTop: "10px",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export const tooltipStyles = makeStyles(() => ({
  tooltipRoot: {
    "& svg": {
      padding: "2px 0px 0px 3px",
    },
    "& div": {
      top: "-10px !important",
      width: "90px !important",
      left: "-20px !important",
      fontSize: "10px !important",
    },
  },
}));
