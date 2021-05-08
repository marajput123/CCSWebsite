import React from "react";
import covid from "../../static/svg/PriceTag-Cvd.svg";
import vax from "../../static/svg/PriceTag-Vax.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  imgRoot: {
    position: "absolute",
    top: "-1px",
    right: "10px",
    width: "70px",
  },
}));

const PriceTag = (props) => {
  const classes = useStyles();
  const renderTag = (tag) => {
    if (tag === "VAX") {
      return vax;
    }
    if (tag === "COVID") {
      return covid;
    }
  };
  return <img src={renderTag(props.tag)} className={classes.imgRoot} />;
};

export default PriceTag;
