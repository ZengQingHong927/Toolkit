// 根據該目錄，讀取目錄下所有的文件並輸出
// 修正該路徑path.resolve()
// 判斷該路徑是否存在fs.access(fs.constants.F_OK)
// 遍歷該文件夾
// 判斷該路徑是文件還是文件夾，如果是文件則輸出，若是文件夾，則讀取子文件夾，如果時文件夾則調用自己
const fs = require('fs');
const path = require('path');
const inputPath = path.resolve(process.argv[2]);

function fetchFile(dir){
    try {
        fs.accessSync(dir,fs.constants.F_OK);
        let stat = fs.statSync(dir);
        // console.log(stat);
        if (stat.isFile()) {
            console.log(dir)
        }else if(stat.isDirectory()) {
            let files = fs.readdirSync(dir);
            // console.log(files)
            files.forEach(element => {
                fetchFile(path.join(dir,element));
            });
        }
    
    } catch (error) {
        console.log('File is not found')
    }    
}
fetchFile(inputPath);