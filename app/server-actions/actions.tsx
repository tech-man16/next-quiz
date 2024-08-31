//"use server";
import path from "path";
const handle = (e: any) => {
    e.preventdefault();
    console.log(e.target.value);
}

const search = async () => {
    //const url = process.env.VERCEL_URL != undefined ? process.env.VERCEL_URL : 'http://localhost:3000'
    try {
        const req = await fetch(path.join(process.cwd(), "/server-actions/getdata"), {
            method: "Post",
            body: ""
        })
        const res = await req.json();
        if(res.status==200)
            return res.data;
        return res.message ;
    } catch(e) {
        return ["error"] ;
    }
}

export { handle, search }
