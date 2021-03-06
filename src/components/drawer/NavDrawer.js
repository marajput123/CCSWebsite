import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  ListItemIcon,
} from "@material-ui/core";
import { drawerStyles } from "./styles";
import { MenuRounded, Close, ExpandLess, ExpandMore } from "@material-ui/icons";
import logoSvg from "../../static/svg/logo.svg";

const data = [
  { title: "ABOUT", url: "about", subList: [] },

  {
    title: "PROJECTS",
    url: "projects",
    subList: [
      { title: "Project 1", url: "projects", subList: [] },
      { title: "Project 2", url: "projects", subList: [] },
      { title: "Project 3", url: "projects", subList: [] },
    ],
  },
  {
    title: "SERVICES",
    url: "services",
    subList: [
      { title: "Service 1", url: "service", subList: [] },
      { title: "Service 2", url: "service", subList: [] },
    ],
  },
  { title: "CONTACT", url: "contact", subList: [] },
];

const DrawerList = () => {
  const classes = drawerStyles();
  const [currentTab, setCurrentTab] = useState(null);

  const onHandleRoute = (url) => {};

  const onHandleTab = (tab) => {
    setCurrentTab(currentTab === tab ? null : tab);
  };

  const renderSubList = (subList, parent) => {
    return (
      <Collapse in={currentTab === parent.url} timeout={400} unmountOnExit>
        <List className={classes.subListStyle}>
          {subList.map((item) => {
            return (
              <React.Fragment key={subList.title}>
                <ListItem
                  className={classes.subListPadding}
                  button
                  onClick={(e) => onHandleRoute(item.url)}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              </React.Fragment>
            );
          })}
        </List>
      </Collapse>
    );
  };

  const renderList = () => {
    return data.map((item) => {
      return (
        <React.Fragment key={item.title}>
          <ListItem
            button
            onClick={(e) =>
              item.subList.length > 0 ? onHandleTab(item.url) : onHandleRoute()
            }
          >
            <ListItemText primary={item.title} />
            {item.subList.length > 0 ? (
              <ListItemIcon className={classes.listIcon}>
                {currentTab === item.url ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            ) : null}
          </ListItem>
          {item.subList.length > 0 ? renderSubList(item.subList, item) : null}
          <Divider />
        </React.Fragment>
      );
    });
  };

  return <>{renderList()}</>;
};

const NavDrawer = () => {
  const classes = drawerStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton onClick={(e) => setIsOpen(true)}>
        <MenuRounded />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={isOpen}
        onClose={(e) => setIsOpen(false)}
        className={classes.drawerRoot}
      >
        <List>
          <div className={classes.headerContainer}>
            <IconButton onClick={(e) => setIsOpen(false)}>
              <Close />
            </IconButton>
            <img src={logoSvg} className={classes.drawerImage} />
          </div>
          <Divider />

          {/* List goes here */}
          <DrawerList />
          {/* List ends here */}
        </List>
      </Drawer>
    </>
  );
};

export default NavDrawer;
