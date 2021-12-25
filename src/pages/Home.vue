<script setup>
import { inject, ref } from "vue";
import useStoryBridge from "../composables/useStoryBridge";

const storyApi = inject("storyApi");
const { data } = await storyApi.get("cdn/stories/home", {
  version: "draft"
});

const story = ref(null);
story.value = data.story;

useStoryBridge(story.value.id, (evStory) => (story.value = evStory));
</script>

<template>
  <Page
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
  />
</template>
