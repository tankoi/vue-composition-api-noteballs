<template>
  <div class="notes">
    <add-edit-note
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </add-edit-note>
    <note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes';

/*
  store
*/
const storeNotes = useStoreNotes()

/*
  notes
*/
const newNote = ref('')
const addEditNoteRef = ref(null)
const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

</script>