ob.data
{ppoItemStandard: Array(2), ppoItemTCAP: Array(1), ppoItemDealer: Array(2)}
ppoItemDealer: (2) [{…}, {…}]
ppoItemStandard: (2) [{…}, {…}]
ppoItemTCAP: [{…}]

var typeTable = [];---push element on array
typeTable.push(ob.data.ppoItemDealer);
typeTable.push(ob.data.ppoItemStandard);
typeTable.push(ob.data.ppoItemTCAP);
    
Object.keys(ob.data)[i]------find first object
Object.keys(ob.data).length------count object
