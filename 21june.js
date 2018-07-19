var db;
function openDB(){
var DBopenRequest=window.indexedDB.open("Khol ja sim sim");
console.log(`DBOpenRequest`,Object.assign(DBopenRequest));
DBopenRequest.onsuccess=function (e){
db=DBopenRequest.result;
console.log(`db`,db);
};

}
openDB();
