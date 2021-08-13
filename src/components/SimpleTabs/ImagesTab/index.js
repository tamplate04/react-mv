import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Fade } from "@material-ui/core";

// Componets
import ActorTab from "../ActorTab";
import SimilarMoviesTab from "../SimilarMoviesTab";
import ImagesTab from "../ImagesTab";
import ActorTabs from "../ActorTab";

// Styles
import { Wrapper, TabsText } from "./ImagesTab.styles";
import { useStyles } from "./ImagesTab.makeStyles"
import "./style.css";


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`sub-simple-tabpanel-${index}`}
      aria-labelledby={`sub-simple-tab-${index}`}
      class="sub-tabpanel"
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a12yProps(index) {
  return {
    id: `sub-simple-tabb-${index}`,
    "sub-aria-controls": `sub-simple-tabpanel-${index}`,
  };
}


export default function ImagesTabs({ movie }) {
  const classes = useStyles();
  const [subValue, setsubValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setsubValue(newValue);
  };

  return (
    <Wrapper>
      <Tabs
        //   orientation="vertical"
        value={subValue}
        onChange={handleChange}
        classes={{
          flexContainer: classes.flexContainer,
          indicator: classes.indicator,
          root: classes.MuiTabs,
        }}
      >
        {/* <TabsContent> */}
        <TabsText>Images</TabsText>
        {/* <TabsBlock> */}
        <Tab
          label="Posters"
          disableRipple
          selected
          classes={{
            wrapper: classes.wrapper,
            root: classes.tabRoot,
            selected: classes.tabSelected,
            textColorInherit: classes.tabTextColorInherit,
          }}
          {...a12yProps(0)}
          onSubmit={(e) => e.preventDefault()}
        />
        <Tab
          label="Backdrops"
          disableRipple
          classes={{
            wrapper: classes.wrapper,
            root: classes.tabRoot,
            selected: classes.tabSelected,
            textColorInherit: classes.tabTextColorInherit,
          }}
          {...a12yProps(1)}
          onSubmit={(e) => e.preventDefault()}
        />
        <Tab
          label="Similar Movies"
          disableRipple
          classes={{
            wrapper: classes.wrapper,
            root: classes.tabRoot,
            selected: classes.tabSelected,
            textColorInherit: classes.tabTextColorInherit,
          }}
          {...a12yProps(2)}
          onSubmit={(e) => e.preventDefault()}
        />
        {/* </TabsBlock> */}
        {/* </TabsContent> */}
      </Tabs>

      <TabPanel value={subValue} index={0}>
        <div>jkhlkjhlkjh</div>
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
          <MovieFullTab videoFull={movie.videoFull} />
         </TabPanel> */}
      <TabPanel value={subValue} index={1}>
        <div>jkhlkjhlkjh</div>
      </TabPanel>
      <TabPanel value={subValue} index={2}>
        <ActorTabs movie={movie} />
      </TabPanel>
    </Wrapper>
  );
}
