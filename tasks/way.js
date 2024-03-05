let ways = {}

function addWay(trainId, wayName){
    if(ways[trainId]){
        ways[trainId].push(wayName)
    }
    else{
        ways[trainId] = [wayName]
    }
    ways[trainId].sort()
}

addWay(123,"Д7");
addWay(123,"А3");
addWay(720,"1П");
addWay(108,"А9");
addWay(123,"А1");
addWay(108,"А1");
addWay(720,"3П");

console.log(ways)