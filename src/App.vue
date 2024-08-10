<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { ContactShadows, OrbitControls } from '@tresjs/cientos';
import TheHeader from './components/TheHeader.vue';
import BaseColors from './components/BaseColors.vue';
import CushionColors from './components/CushionColors.vue';
import Headphones from './components/Headphones.vue';
import Description from './components/Description.vue';
</script>

<template>
  <TheHeader />
  <main class="relative mx-auto container h-screen flex items-center">
    <div class="w-full grid grid-cols-1 sm:grid-cols-2">
      <section class="min-h-600px">
        <TresCanvas alpha id="canvas">
          <TresPerspectiveCamera :position="[0,0,10]" />
          <OrbitControls />
          <Suspense>
            <Headphones />
          </Suspense>
          <ContactShadows
            :opacity="0.2"
            :blur="3"
            :position="[0, -2, 0]" 
          />
          <TresAmbientLight :args="['#fff', 1]" />
          <TresDirectionalLight :intensity="2" :position="[4,4,4]" />
          <TresDirectionalLight :intensity="1" :position="[-4,-4,-4]" />
        </TresCanvas>
      </section>
      <aside class="ml-16">
        <Description />
        <BaseColors />
        <CushionColors />
        <div class="italic">Elevate your audio experience with the SoundWave Pro X1—where style meets exceptional sound. Order yours today and rediscover your favorite music in a whole new way!</div>
      </aside>
    </div>
  </main>
</template>
