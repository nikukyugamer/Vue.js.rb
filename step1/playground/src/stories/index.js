import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import MyButton from "./Button.vue";

storiesOf("Button", module)
  .add("first button", () => ({
    components: { MyButton },
    template: '<my-button>Chick</my-button>'
  }));
