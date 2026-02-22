"use client";
import React from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

export default function MyCalendar() {
    return (
        <div className="z-50" style={{ direction: "rtl" }}>
            <Calendar
                className=""
                weekDays={weekDays}
                calendar={persian}
                locale={persian_fa}
               showOtherDays
            />
        </div>
    );
}
