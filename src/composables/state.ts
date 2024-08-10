import { reactive, toRefs } from 'vue'

const state = reactive({
  baseColors: ['#903345', '#F2D3AC', '#F2F2F2', '#3b3635'],
  selectedBaseColor: '#903345',
  cushionColors: ['#e5abb6', '#F2F2F2', '#795548', '#050505'],
  selectedCushionColor: '#F2F2F2'
})

export function useState() {
  return {
    ...toRefs(state)
  }
}