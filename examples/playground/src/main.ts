import { createApp, h } from "chibivue";

const app = createApp({
  render() {
    return h("div", { id: "my-app" }, [
      h("p", { style: "color: red; font-weight: bold" }, ["hello world!"]),
      h(
        "button",
        {
          onClick() {
            alert("hello chibivue!");
          },
        },
        ["click me"]
      ),
    ]);
  },
});

app.mount("#app");
