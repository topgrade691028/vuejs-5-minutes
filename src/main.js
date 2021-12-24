import { createApp } from "vue";
import StoryblokVue from "@storyblok/vue";
import StoryblokJS from "storyblok-js-client";
import App from "./App.vue";
import Grid from "./components/Grid.vue";
import Page from "./components/Page.vue";
import Teaser from "./components/Teaser.vue";
import Feature from "./components/Feature.vue";

const storyApi = new StoryblokJS({
  accessToken: "9I0NMaGJZQaJQ4Qzmm5cHwtt"
});

const app = createApp(App);

app.use(StoryblokVue);

app.component("Grid", Grid);
app.component("Page", Page);
app.component("Teaser", Teaser);
app.component("Feature", Feature);

app.provide("storyApi", storyApi);

app.mount("#app");
