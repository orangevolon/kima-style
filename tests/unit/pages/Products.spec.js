import { shallowMount } from "@vue/test-utils";
import Products from "@/pages/Products";

describe("Pages/Products", () => {
  it("Should render the page name", () => {
    const wrapper = shallowMount(Products);
    expect(wrapper.text()).toBe("Products");
  });
});
