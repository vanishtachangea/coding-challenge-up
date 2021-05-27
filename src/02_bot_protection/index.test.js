const subject = require(".");

describe("Bot protection", () => {
  it("should detect bot from logged actions", () => {
    const actions = [
      "left",
      "right",
      "fire",
      "jump",
      "fire",
      "back",
      "forward",
      "forward",
      "jump",
      "fire",
      "back",
      "left",
      "left",
      "right",
    ];
    expect(subject.botProtection(actions)).toEqual(true);
  });
  it("should return false if no repeated patterns are found", () => {
    const actions = [
      "left",
      "right",
      "fire",
      "jump",
      "fire",
      "back",
      "forward",
      "forward",
      "jump",
      "fire2",
      "back",
      "left",
      "left",
      "right",
    ];
    expect(subject.botProtection(actions)).toEqual(false);
  });
});
