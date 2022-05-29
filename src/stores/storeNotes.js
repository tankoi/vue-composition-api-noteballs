import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ut ea neque deleniti hic, soluta itaque, mollitia quae amet voluptatem harum quis praesentium sed recusandae quaerat quibusdam fugiat unde. Laudantium!'
        },
        {
          id: 'id2',
          content: 'This is a shorter note! Woo!'
        }
      ]
    }
  },
  actions: {
    addNote(newNote) {
      let currentDate = new Date().getTime()
      let id = currentDate.toString()
      let note = {
        id,
        content: newNote
      }

      this.notes.unshift(note)
    },
    deleteNote(id) {
      this.notes = this.notes.filter(note => note.id != id)
    },
    updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id === id )
      this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(
          note => note.id === id)[0]
            .content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })

      return count
    }
  }
})