//"use server";
//import path from "path";
const handle = (e: any) => {
    e.preventdefault();
    console.log(e.target.value);
}

const search = async () => {
    //const url = process.env.VERCEL_URL != undefined ? process.env.VERCEL_URL : 'http://localhost:3000'
    const req = await fetch("./app/server-actions/getdata", {
        method: "Post",
        body: ""
    })
    const res = await req.json();
    if(res.status==200)
        return res.data;
    return res.message ;
}

export { handle, search }
