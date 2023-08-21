"use client";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from "@/styles/user.module.css";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Icon from '@mui/material/Icon';
import Link from "next/link";
// import { useRouter ,usePathname, useSearchParams} from 'next/navigation';
import SnackbarAlert from "@/components/control/SnackbarAlert";
import { useSelector } from "react-redux"; 
import { closeModal } from '@/redux/reducers/alert'; 
import { useDispatch } from 'react-redux'; 

export default function UserLayout({ children }) {
  const alertValue = useSelector((state)=>state.alertReducer)
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch()
  // const router = useRouter();
  // const pathname = usePathname()
  // const searchParams = useSearchParams()
  // const currentUrl = window.location.href
// console.log('  searchParams', searchParams)
// console.log('  pathname', pathname.slice('/'))
console.log('alertValue',alertValue)
  return (
    <>
      <div className={smallScreen ? styles.mobileBox : styles.deskTopBox}>
        <div className={styles.container}>
          <div className={styles.header}>
            {/* <Image
              alt={"bluestone"}
              priority={true}
              src={"/logo2.png"}
              width={360}
              height={90}
            ></Image> */}
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
                  href="https://www.facebook.com/Bluestone.co.th/"
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
                  href="https://www.instagram.com/bluestonethailand/"
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
                  href="https://line.me/ti/p/~@bluestonethailand"
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
                  href="https://www.youtube.com/channel/UCQ3mRpetmm5Ek-LLdTjwaNQ"
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
            <div>
              Don't have an account? <Link href="/user/register">Sign up</Link>
            </div>
            <SnackbarAlert {...alertValue} handleCloseModal={()=>{dispatch(closeModal())}}/>
          </div>
        </div>
      </div>
    </>
  );
}
