import DataUriParser from "datauri/parser.js"

import path from "path";

const getDataUri = (file) => {
    const parser = new DataUriParser();
    //console.log("b4");
    const extName = path.extname(file.originalname).toString();
    //console.log("after");
    return parser.format(extName, file.buffer);
}

export default getDataUri;