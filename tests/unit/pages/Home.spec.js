import { shallowMount } from "@vue/test-utils";
import Home from "@/pages/Home.vue";

describe("Pages/Home", () => {
  it("Should render the page name", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.text()).toBe("Home");
  });
});
