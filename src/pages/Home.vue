<script setup>
import { inject, ref } from "vue";

const story = ref(null);

const storyApi = inject("storyApi");
const { data } = await storyApi.get("cdn/stories/home", {
  version: "draft"
});

story.value = data.story;
</script>

<template>
  <Page
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
  />
</template>
