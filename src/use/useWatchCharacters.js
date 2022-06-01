import { watch } from "vue"

export function useWatchCharacters(valueToWatch, maxChars = 100){
  watch(valueToWatch, (newValue) => {
    console.log(newValue);
    if (newValue.length === maxChars) {
      alert(`Only ${maxChars} characters allowed gosh darnit!`)
    }
  })
}