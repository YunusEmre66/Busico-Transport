export default function helloNamed() {
    return "Hello named export!";
 }

 let ders="Bugün kü ders Modüler Yapı";
 let sayim=10;

export{
    ders as myLesson,
    sayim
}


  //export default helloNamed();