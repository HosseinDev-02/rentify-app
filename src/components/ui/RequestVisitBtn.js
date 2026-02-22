"use client";
import React, { useContext } from "react";
import { AdvDetailContext } from "./AdvDetailProvider";
import PrimaryButton from "./buttons/PrimaryButton";

export default function RequestVisitBtn() {
  const {setShowRequestVisit} = useContext(AdvDetailContext)

    return <PrimaryButton onClick={() => setShowRequestVisit(true)} className={"w-full mt-2"} title={"درخواست بازدید"} />;
}
