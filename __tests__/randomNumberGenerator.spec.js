import { shallowMount } from '@vue/test-utils'
import RandomNumberGenerator from '../src/components/RandomNumberGenerator.vue'
import 'jest'

var wrapper = null

beforeEach(() => {
    wrapper = shallowMount(RandomNumberGenerator);
});

afterEach(() => {
    wrapper.destroy();
});


describe("RandomNumberGenerator", () => {
    it("it renders number-test", () => {
        var wrapper = shallowMount(RandomNumberGenerator);
        const numberTest = wrapper.findAll(".random-number-generator");

        expect(numberTest.length).toBe(1);
    });
});