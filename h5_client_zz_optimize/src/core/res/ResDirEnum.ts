let RES_RESOURCE = `resource/`;
let CFG_DIR = `${RES_RESOURCE}cfg/`;
let RES_DIR = `${RES_RESOURCE}res/`;
let MP3_DIR = `${RES_RESOURCE}sound/`;

class ResPath{

    public static GetUrilPath(dir:string, id:any, replacePostfix:boolean, postfix:string):string
    {
        if(replacePostfix)id = id.replace("_png", "");
        return `${dir}${id}.${postfix}`;
    }
    
}