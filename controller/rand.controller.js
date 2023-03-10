const {rand} = require("../model/rand.model");

exports.rand = (req, res, next) => {
    let g = [[]];
    let gn=0;
    for(let r of rand()){
        if(g[gn].length >= 4){
            g[++gn] = [];
        }
        g[gn].push(r);
    }
    res.status(200).json(g);
}