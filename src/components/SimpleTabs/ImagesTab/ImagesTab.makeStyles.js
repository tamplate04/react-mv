import { makeStyles } from "@material-ui/core/styles";


export  const useStyles = makeStyles((theme) => ({
  indicator: {
    display: "none",
  },
  flexContainer: {
    flexDirection: "column",
    textAlign: "left",
    color: "#fff",
  },
  wrapper: {
    position: "relative",
    alignItems: "flex-start",

    transition: "all 0.3s ease-in-out",
    "&:hover": {
      opacity: "1",
    },
  },
  tabRoot: {
    padding: "15px",
  },
  MuiTabs: {
    boxShadow: "-1px 0px 17px 0px #2aa1c2",
    borderRadius: "8px",
    height: "100%",
    maxHeight: "250px",
    maxWidth: "256px",
    width: "100%",
  },
  tabTextColorInherit: {
    position: "relative",
    background: "#020916",
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    opacity: ".7",
  },
  tabSelected: {
    opacity: "1",
    "&::before": {
      position: "absolute",
      content: "' '",
      background:
        "linear-gradient(180deg, rgb(9 36 53) 24%, rgba(2,9,22,1) 100%)",

      width: "100%",
      display: "inline-block",
      height: "100%",
      animation: "animateOpacityImage .5s",
    },
  },
}));
