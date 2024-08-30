import React from "react";
const TrackScreen = (props: any) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    return (
        <section className="flex-col">
            <div className="grid grid-cols-5 m-2">
                {
                    arr.map((val) => (
                        <li className="flex justify-center items-center border-2 h-[50px] w-[50px] hover:bg-sky-400" key={val}> {val} </li>
                    ))
                }
            </div>
            <div className="flex flex-col border-2">

            </div>
        </section>
    )
}
export default TrackScreen;
