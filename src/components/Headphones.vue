<script setup lang="ts">
import { Levioso, Html } from '@tresjs/cientos';
import { useGLTF } from '@tresjs/cientos'
import { useState } from '../composables/state';
import { watch } from 'vue';

const { nodes, materials } = await useGLTF('/models/headphones/headphones.gltf', { draco: true })

const model = nodes['Headphones_7']

const { selectedBaseColor, selectedCushionColor } = useState()

watch(selectedBaseColor, (color)=> {
  materials.Base.color.set(color)
})

watch(selectedCushionColor, (color) => {
  materials.Cush.color.set(color)
})

</script>

<template>
  <Levioso :speed="4">
    <Html
      transform
      :position="[2.4, 0, 2]"
    >
      <span class="bg-gray-700 font-bold text-light text-xs p-0.5 rounded">
        299.99 €
      </span>
    </Html>
    <primitive :object="model" />
  </Levioso>
</template>