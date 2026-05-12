const fs=require("fs")
const chalk=require("chalk")

const loadNotes=()=>{
    try{ 
        const dataBuffer=fs.readFileSync("notes.json")
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){ return [] }
}

const addNote =(title,body)=>{
    const notes =loadNotes()
    const duplicateNotes=notes.find((note) => note.title === title)
    
    if (!duplicateNotes){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green("not eklendi"))
        }
    else{
        console.log(chalk.bgRed("not basligi mevcut"))
    }
   
}
const saveNotes=(notes)=>{
    const noteJSON=JSON.stringify(notes)
    fs.writeFileSync("notes.json",noteJSON)
}


const removeNote =(title)=>{
    const notes = loadNotes()
    const kalanNotlar = notes.filter((note) => note.title !== title)
    
    if (notes.length > kalanNotlar.length) {
        console.log(chalk.blue("Not silindi"))
        saveNotes(kalanNotlar)
    } else {
        console.log(chalk.red("Silinecek not bulunamadi"))
    }
   
}
const listNotes=()=>{
    const notes=loadNotes()
    if(notes.length<1){ return console.log("Listelenecek veri bulunamadı") }
    notes.forEach(element => {console.log(chalk.blue(`Baslik: ${element.title}\n İcerik: ${element.body}`))
   });

}

const readNote = (title)=>{
    const notes=loadNotes();
    const findNote=notes.find((note) =>  note.title === title)
    
    if (findNote){
       console.log(chalk.inverse(`Baslik: ${findNote.title}\nİcerik: ${findNote.body}`));}
       
    else{
        console.log(chalk.red("Not basliğindan bulunamadi"))
    }

}

module.exports={
    loadNotes:loadNotes,
    addNote: addNote,
    removeNotes:removeNote,
    listNotes:listNotes,
    readNote:readNote
}
