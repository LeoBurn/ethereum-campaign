const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

//remove build directory
const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);

//read the Campaing contract
const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath,'utf8');
//Compile the contracts
const output = solc.compile(source).contracts;
//Create a folder
fs.ensureDir(buildPath);

for(let contract in output)
{
    fs.outputJsonSync(
        path.resolve(buildPath,contract.replace(':','')+ '.json'),
        output[contract]
    );
}