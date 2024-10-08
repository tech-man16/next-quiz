"use client";
import React, { useEffect, useState } from "react";
import { handle, search } from "@/app/server-actions/actions";
import { RadioGroup, Radio, Button } from "@nextui-org/react";

const QnScreen = (props: any) => {
    const qns = { 1: "a\n    b", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g" }
    const [data, updateData] :any = useState();     
    
    useEffect(() => {
        (async () => {
            const data = await search();
            return data;
        })()
            .then((data) => {
                data.forEach((qns: any, ind: number) => {
                    if (qns.codeblock != undefined) {
                        data[ind].codeblock = data[ind].codeblock.replaceAll(" ", "\xa0")
                    }
                })
                updateData(data)
            });
    }, []);
    
    return (
        <section className="flex flex-col flex-1 overflow-auto h-full mx-auto max-w-7xl py-8 px-6">        
            {
                data != undefined && (
                    <>
                        {
                            data.map((val:any, ind:number) => {
                                return (
                                    <RadioGroup key={ind} label={ind + 1 + ') ' + val.qn} className="flex my-2" >
                                        {
                                            val.codeblock != undefined && (
                                                <> {val.codeblock.split('\n').map((line: any,ind:number) => <p key={ind} >{line} </p>)} </>
                                            )
                                        }
                                        {Array.isArray(val.options) && (
                                            val.options.map((options: any, ind: number) => {
                                                return <Radio key={ind} value={options} className="flex text-amber-400 my-1" >
                                                    <span className="text-white w-full"> {options} </span>
                                                </Radio>
                                            })

                                        )}
                                    </RadioGroup>
                                )
                                return (
                                    <RadioGroup key={ind} label={ind + 1 + ') ' + val.qn} className="flex my-2" >
                                        {val["options"].map((val: any, ind: number) => {
                                            return <Radio key={ind} value={val} className="flex text-amber-400 my-1" >
                                                <span className="text-white w-full"> {val} </span>
                                            </Radio>
                                        })}
                                    </RadioGroup>
                                )
                            })
                        }
                        <button onClick={handle}> Show </button>
                    </>
                )
             }
        </section>
    )
}

export default QnScreen;
