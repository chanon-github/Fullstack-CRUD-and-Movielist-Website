"use client";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from "@/styles/user.module.css";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import SnackbarAlert from "@/components/control/SnackbarAlert";
import { useSelector } from "react-redux";
import { closeModal } from "@/redux/reducers/alert";
import { useDispatch } from "react-redux";
import * as Constant from "@/constants/Constant";
import Progress from "@/components/control/Progress";
import { closeProgress } from "@/redux/reducers/progress";

export default function UserLayout({ children }) {
  const alertValue = useSelector((state) => state.alertReducer);
  const currentPageValue = useSelector(
    (state) => state.currentPageReducer.currentPage
  );
  const openProgress = useSelector(
    (state) => state.progressReducer.openProgress
  );
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const { currentPageTxt } = Constant;

  const renderFooterTxT = () => {

    switch(currentPageValue) {
      case currentPageTxt.LOGIN:
        return (
          <div>
            Don't have an account? <Link href="/user/register">Sign up</Link>
          </div>
          
        );
  
      case currentPageTxt.FORGOTPWD:
        console.log('test')
        return (
          <div>
            Return to <Link href="/user/login">Sing in</Link>
          </div>
          
        );
      case currentPageTxt.REGISTER:
      return (
        <div>
          Do you have aleady account? <Link href="/user/login">Sign in</Link>
        </div>
        
      );
      default:
        return (
          <></>
          
        );
    }

  
  };

  return (<>
    <div className={smallScreen ? styles.hideBackground :styles.boxContainer}></div>
      <div className={smallScreen ? styles.mobileBox : styles.deskTopBox }>
        <div className={styles.container}>
          <div className={styles.header}>
            <AccountCircleIcon color="primary" sx={{ fontSize: 150 }} />
          </div>
          {children}
          <Divider
            style={{ marginTop: "40px", marginBottom: "10px" }}
          ></Divider>
          <div className={styles.footer}>
            <div>
              <label>Contract Us</label>
            </div>
            <div className={styles.logoContainer}>
              <div className="logo">
                <a
                  // href="https://www.facebook.com/Bluestone.co.th/"
                  target="_blank"
                >
                  <Image
                    alt={"facebook"}
                    src={"/icons-facebook.png"}
                    width={50}
                    height={50}
                  ></Image>
                </a>
              </div>
              <div className="logo">
                <a
                  // href="https://www.instagram.com/bluestonethailand/"
                  target="_blank"
                >
                  <Image
                    alt={"ig"}
                    src={"/icons-ig.png"}
                    width={50}
                    height={50}
                  ></Image>
                </a>
              </div>
              <div className="logo">
                <a
                  // href="https://line.me/ti/p/~@bluestonethailand"
                  target="_blank"
                >
                  <Image
                    alt={"line"}
                    src={"/icons-line.png"}
                    width={50}
                    height={50}
                  ></Image>
                </a>
              </div>
              <div className="logo">
                <a
                  // href="https://www.youtube.com/channel/UCQ3mRpetmm5Ek-LLdTjwaNQ"
                  target="_blank"
                >
                  <Image
                    alt={"youtube"}
                    src={"/icons-youtube.png"}
                    width={50}
                    height={50}
                  ></Image>
                </a>
              </div>
            </div>
            {renderFooterTxT()}

            <SnackbarAlert
              {...alertValue}
              handleCloseModal={() => {
                dispatch(closeModal());
              }}
            />
            <Progress open={openProgress} onClose={()=>dispatch(closeProgress())}/>
          </div>
        </div>
      </div>
   {/* </div> */}
    </>
  );
}
