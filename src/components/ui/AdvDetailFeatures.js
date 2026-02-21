"use client";
import React, { useContext } from "react";
import FloorPlanProgressBar from "./FloorPlanProgressBar";
import { AdvDetailContext } from "./AdvDetailProvider";

export default function AdvDetailFeatures() {
    const { featuresType } = useContext(AdvDetailContext);
    return (
        <>
            {featuresType === "recreational" ? (
                <div className="flex flex-col gap-6 mt-10">
                    <FloorPlanProgressBar
                        title={"پارک"}
                        value={60}
                        rate={"6.0"}
                    />
                    <FloorPlanProgressBar
                        title={"فروشگاه"}
                        value={76}
                        rate={"7.6"}
                    />
                    <FloorPlanProgressBar
                        title={"رستوران"}
                        value={46}
                        rate={"4.6"}
                    />
                    <FloorPlanProgressBar
                        title={"کافه"}
                        value={64}
                        rate={"6.4"}
                    />
                </div>
            ) : (
                <div className="flex flex-col gap-6 mt-10">
                    <FloorPlanProgressBar
                        title={"مترو"}
                        value={43}
                        rate={"4.3"}
                    />
                    <FloorPlanProgressBar
                        title={"اسیستگاه اتوبوس"}
                        value={56}
                        rate={"5.6"}
                    />
                    <FloorPlanProgressBar
                        title={"قطار"}
                        value={74}
                        rate={"7.4"}
                    />
                    <FloorPlanProgressBar
                        title={"استگاه BRT"}
                        value={83}
                        rate={"8.3"}
                    />
                </div>
            )}
        </>
    );
}
