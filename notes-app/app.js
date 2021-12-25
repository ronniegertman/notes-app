const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note bosy',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        
    }
})

yargs.command({
    command: 'list',
    describe: 'listing all the notes',
    handler(){
        notes.listNotes()
    }
})    

yargs.command({
    command: 'read',
    describe: 'reading all the notes',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
