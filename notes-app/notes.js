const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadnotes()
    const duplicateNote = notes.find((notes) =>  notes.title === title)

    if(!duplicateNote)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.white.bgGreen('note added'))
    }
    else{
        console.log(chalk.white.bgRed('note title taken'))
    }
}

const saveNotes = (notes) => {
    noteJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', noteJSON)
}

const loadnotes = () => {
    try{
        const data = fs.readFileSync('notes.json').toString()
        return JSON.parse(data)
    }catch(e){
        return []
    }
}

const removeNote = (title) => {
    const notes = loadnotes()
    const duplicateNotes = notes.filter((notes) => notes.title !== title)

    if(notes.length === duplicateNotes.length){
        console.log(chalk.white.bgRed('No note found'))
        saveNotes(duplicateNotes)
    } else{
        console.log(chalk.white.bgGreen('Note removed'))
        saveNotes(duplicateNotes)
    }
}

const listNotes = () => {
    console.log('Your notes:')
    loadnotes().forEach(note => console.log(note.title))
}

const readNotes = (title) =>{
    const notes = loadnotes()
    const noteToRead = notes.find((note) => note.title == title)
    if(noteToRead){
        console.log(chalk.blue(noteToRead.title))
        console.log(noteToRead.body)
    }
    else{
        console.log(chalk.white.bgRed("This note does not exist"))
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}