import { describe, expect, it } from "bun:test";
import { getBundledAgent } from "@oh-my-pi/pi-coding-agent/task/agents";

describe("bundled agent parsing", () => {
	it("lets reviewer inherit thinking effort from its model role", () => {
		const reviewer = getBundledAgent("reviewer");

		expect(reviewer).toBeDefined();
		expect(reviewer?.source).toBe("bundled");
		expect(reviewer?.model).toEqual(["pi/slow"]);
		expect(reviewer?.thinkingLevel).toBeUndefined();
	});

	it("lets plan inherit thinking effort from its model role", () => {
		const plan = getBundledAgent("plan");

		expect(plan).toBeDefined();
		expect(plan?.source).toBe("bundled");
		expect(plan?.model).toEqual(["pi/plan", "pi/slow"]);
		expect(plan?.thinkingLevel).toBeUndefined();
	});
});
