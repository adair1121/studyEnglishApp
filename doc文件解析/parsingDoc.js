
const xlsxparse =  require("node-xlsx");
const glob = require('glob');
const docFile = process.argv.slice(2)[0];
const xlsFile = process.argv.slice(2)[1];
const textract = require('textract');
const fs = require('fs');

if(!docFile){
    console.log("请输入.doc文件");
    return;
}
if(!xlsFile){
    console.log("请输入xls文件");
    return;
}
let listData = xlsxparse.parse(xlsFile); //读取excel;
let docDataObj = {};

textract.fromFileWithPath(docFile,(err,text)=>{
    if(err){
        console.log(err);
        return;
    }
    let arr = text.split(" ")
    let curIndex = 1;
    
    for(let i = 0;i<arr.length;i++){
        if(arr[i].indexOf("第")!=-1 && arr[i].indexOf("关")!=-1){
            let index1 = arr[i].indexOf("第");
            let index2 = arr[i].indexOf("关");
            curIndex = arr[i].substring(index1+1,index2);
            docDataObj[curIndex] = []
            continue;
        }
        docDataObj[curIndex].push([arr[i],arr[i+1]]);
        i+=1;
    }
    //-------手动修改------
    //初始化所以值  最后一行空白行数
    let initIndex = 5;
    //当前的年级版本
    let grade = 1;
    //---------------
    
    let id = 0;
    let level = 0;
    for(let key in docDataObj){
        level = Number(key);
        for(var i = 0;i<docDataObj[key].length;i++){
             id+=1;
             listData[0].data[initIndex] = [id,grade,docDataObj[key][i][0],docDataObj[key][i][1],level];
             initIndex += 1;
        }
    }
})

setTimeout(() => {
    var buffer = xlsxparse.build(listData);
    let index1 = xlsFile.lastIndexOf("/");
    let new_path = xlsFile.substring(0,index1)+"/5.xls"
    console.log(new_path)
    fs.writeFile(new_path, buffer, function (err)
        {
            if (err)
                throw err;
            console.log('Write to xls has finished');
        }
    );
}, 1000);


