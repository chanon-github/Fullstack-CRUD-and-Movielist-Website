'use client'
// import Sidebar from "@/components/Sidebar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Header from "@/components/user-management/HeaderList";
import ListView from "@/components/user-management/list/ListContainer";
import { useEffect,useState } from "react";
import * as ServiceWeb from '@/service/serviceWeb'
export default function UserManagementMain() {
    const [dataCustomers, setData] = useState([])
    useEffect(() => {
  
        const dataFetch = async () => {
            const response = await ServiceWeb.getAllCustomers();
            if(response?.isInvalidToken){
                setData([])
                // navigate("/");
    
            }else{
                setData(response)
            }
        };
        dataFetch();

      }, [])

      const drawerWidth = 240;
      const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
        ({ theme, open }) => ({
          // height: "100vh",
          // backgroundColor: "#ffffff",
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
            <Header></Header>
            <ListView dataCustomers={dataCustomers}></ListView>
          </Main>
        </Box>
        // <></>
      );
}
