"use client";

import React from "react";
import Navbar from "@/components/user-management/Navbar";
import SnackbarAlert from "@/components/control/SnackbarAlert";
import { useSelector } from "react-redux";
import {closeModal } from '@/redux/reducers/alert'
import { useDispatch } from 'react-redux'; 
import Progress from "@/components/control/Progress";
import { closeProgress } from "@/redux/reducers/progress";

export default function UsermanagementLayout({ children }) {
  const alertValue = useSelector((state) => state.alertReducer);
  const openProgress = useSelector(
    (state) => state.progressReducer.openProgress
  );
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      {children}
      <Progress open={openProgress} onClose={()=>dispatch(closeProgress())}/>
      <SnackbarAlert
        {...alertValue}
        handleCloseModal={() => {
          dispatch(closeModal());
        }}
      />
    </>
  );
}
