import { describe, it, expect, vi, afterEach } from "vitest";
import { run } from "../src/cli.js";

describe("--help / --version", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("--help prints usage and exits 0", () => {
    const out = vi.spyOn(process.stdout, "write").mockReturnValue(true);
    const exit = vi
      .spyOn(process, "exit")
      .mockImplementation(() => {
        throw new Error("exit");
      });
    expect(() => run(["--help"])).toThrow("exit");
    expect(exit).toHaveBeenCalledWith(0);
    expect(out).toHaveBeenCalledWith(expect.stringContaining("brick-avatar"));
  });

  it("-h is alias for --help", () => {
    vi.spyOn(process.stdout, "write").mockReturnValue(true);
    const exit = vi
      .spyOn(process, "exit")
      .mockImplementation(() => {
        throw new Error("exit");
      });
    expect(() => run(["-h"])).toThrow("exit");
    expect(exit).toHaveBeenCalledWith(0);
  });

  it("--version prints version and exits 0", () => {
    const out = vi.spyOn(process.stdout, "write").mockReturnValue(true);
    const exit = vi
      .spyOn(process, "exit")
      .mockImplementation(() => {
        throw new Error("exit");
      });
    expect(() => run(["--version"])).toThrow("exit");
    expect(exit).toHaveBeenCalledWith(0);
    expect(out).toHaveBeenCalledWith(expect.stringContaining("0.1.0"));
  });

  it("-v is alias for --version", () => {
    vi.spyOn(process.stdout, "write").mockReturnValue(true);
    const exit = vi
      .spyOn(process, "exit")
      .mockImplementation(() => {
        throw new Error("exit");
      });
    expect(() => run(["-v"])).toThrow("exit");
    expect(exit).toHaveBeenCalledWith(0);
  });
});

describe("SVG output", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("--seed writes SVG to stdout", () => {
    const out = vi.spyOn(process.stdout, "write").mockReturnValue(true);
    run(["--seed", "ahmed"]);
    const written = out.mock.calls[0][0] as string;
    expect(written).toContain("<svg");
    expect(written).toContain("</svg>");
  });

  it("--seed --size outputs correctly dimensioned SVG", () => {
    const out = vi.spyOn(process.stdout, "write").mockReturnValue(true);
    run(["--seed", "ahmed", "--size", "256"]);
    const written = out.mock.calls[0][0] as string;
    expect(written).toContain('width="256"');
    expect(written).toContain('height="256"');
  });

  it("same seed is deterministic", () => {
    const calls: string[] = [];
    vi.spyOn(process.stdout, "write").mockImplementation((s) => {
      calls.push(s as string);
      return true;
    });
    run(["--seed", "determinism-check"]);
    run(["--seed", "determinism-check"]);
    expect(calls[0]).toBe(calls[1]);
  });

  it("different seeds produce different output", () => {
    const calls: string[] = [];
    vi.spyOn(process.stdout, "write").mockImplementation((s) => {
      calls.push(s as string);
      return true;
    });
    run(["--seed", "alice"]);
    run(["--seed", "bob"]);
    expect(calls[0]).not.toBe(calls[1]);
  });
});

describe("error cases", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("missing --seed exits 1", () => {
    vi.spyOn(process.stderr, "write").mockReturnValue(true);
    const exit = vi
      .spyOn(process, "exit")
      .mockImplementation(() => {
        throw new Error("exit");
      });
    expect(() => run([])).toThrow("exit");
    expect(exit).toHaveBeenCalledWith(1);
  });

  it("invalid --size exits 1", () => {
    vi.spyOn(process.stderr, "write").mockReturnValue(true);
    const exit = vi
      .spyOn(process, "exit")
      .mockImplementation(() => {
        throw new Error("exit");
      });
    expect(() => run(["--seed", "x", "--size", "notanumber"])).toThrow("exit");
    expect(exit).toHaveBeenCalledWith(1);
  });

  it("unknown flag exits 1", () => {
    vi.spyOn(process.stderr, "write").mockReturnValue(true);
    const exit = vi
      .spyOn(process, "exit")
      .mockImplementation(() => {
        throw new Error("exit");
      });
    expect(() => run(["--seed", "x", "--unknown"])).toThrow("exit");
    expect(exit).toHaveBeenCalledWith(1);
  });
});
