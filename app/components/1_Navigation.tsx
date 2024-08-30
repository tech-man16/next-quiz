"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "../icons/icons";


const Navigation = (props: any) => {

    return (
        <>
            <Input isClearable type="text" endContent={<SearchIcon />} value={""} className="p-2" />
        </>
    )
}

export default Navigation;
