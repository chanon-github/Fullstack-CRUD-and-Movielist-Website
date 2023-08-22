"use client";
// import Sidebar from "@/components/Sidebar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Header from "@/components/user-management/HeaderList";
import ListView from "@/components/user-management/list/ListContainer";
import CardView from "@/components/user-management/card/CardContainer";
import { useEffect, useState } from "react";
import * as ServiceWeb from "@/service/serviceWeb";
import { closeProgress, openProgress } from "@/redux/reducers/progress";
import { useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function UserManagementMain() {
  const [dataCustomers, setData] = useState([]);
  const dispatch = useDispatch();

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    dispatch(openProgress());

    const response = await ServiceWeb.getAllCustomers();
    if (response?.isInvalidToken) {
      setData([]);
      // navigate("/");
    } else {
      setData(response);
    }
    dispatch(closeProgress());
  };
  const drawerWidth = 240;
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <Main open={true}>
        <DrawerHeader />
        {/* <Header onChangeView={changeView}></Header> */}
        <Header dataListFetch={dataFetch}></Header>
        {smallScreen ? (
          <CardView dataCustomers={dataCustomers} dataListFetch={dataFetch} />
        ) : (
          <ListView
            dataCustomers={dataCustomers}
            dataListFetch={dataFetch}
          ></ListView>
        )}
      </Main>
    </Box>
  );
}
