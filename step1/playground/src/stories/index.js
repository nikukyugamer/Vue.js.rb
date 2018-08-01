import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import MyButton from "./Button.vue";
import MyState from "./State.vue";
import MyMonsters from "./Monsters.vue";
import MyArticleList from "./ArticleList.vue";

storiesOf("Button", module)
  .add("first button", () => ({
    components: { MyButton },
    template: '<my-button>Chick</my-button>'
  }));

storiesOf("1.3", module)
  .add("lifecycle", () => ({
    components: { MyState },
    template: '<my-state></my-state>'
  }));
storiesOf("1.4", module)
  .add("monsters", () => ({
    components: { MyMonsters },
    template: '<my-monsters></my-monsters>'
  }));
storiesOf("1.5", module)
  .add("article-list", () => ({
    components: { MyArticleList },
    template: '<my-article-list></my-article-list>'
  }));
