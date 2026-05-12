const yargs = require("yargs");
const notes=require("./scripts")


yargs.command({
    command: "ekle",
    describe:"Yeni not eklendi",
    builder:{
        title:{
             describe:"not başlığı",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Notun içeriği",
            demandOption:true,
            type:"string"
        }
    },
    handler : function(argv){
        notes.addNote(argv.title,argv.body)
        
    }
})



yargs.command({
    command:"sil",
    describe:"Not silindi",
    builder:{
        title:{
            describe:"not başlığı",
            demandOption:true,
            type:'string'
        }},
    handler : function(argv){
        notes.removeNotes(argv.title)
        
    }

})

yargs.command({
    command:"list",
    describe:"Notları listeleme",
    handler : ()=>{
       notes.listNotes()
    }

})
yargs.command({
    command:"oku",
    describe:"Basligi verilen notu okuma",
    builder:{
        title:{
            describe:"not başlığı",
            demandOption:true,
            type:'string'
        }},
    handler : (argv)=>{
       notes.readNote(argv.title)
    }

})

yargs.parse()
