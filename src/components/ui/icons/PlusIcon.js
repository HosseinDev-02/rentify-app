import React from "react";

export default function PlusIcon(props) {
    return (
        <svg
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 13.3333V0H7.33333V13.3333H6Z"
                fill={props.color || "currentColor"}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.3333 7.33333H0V6H13.3333V7.33333Z"
                fill={props.color || "currentColor"}
            />
        </svg>
    );
}
