import * as calculate from "./calculate";

// performOperation(action, result, value)
test("performOperation properly adds 0+4", () => {
  expect(calculate.performOperation("+", 0, 4)).toBe(4);
});

test("performOperation properly adds 4+0", () => {
  expect(calculate.performOperation("+", 4, 0)).toBe(4);
});

test("performOperation performOperation properly adds 9+5", () => {
  expect(calculate.performOperation("+", 9, 5)).toBe(14);
});

test("performOperation properly adds -9+9", () => {
  expect(calculate.performOperation("+", -9, 9)).toBe(0);
});

test("performOperation properly adds 99999999+1", () => {
  expect(calculate.performOperation("+", 99999999, 1)).toBe(100000000);
});

test("performOperation properly substracts 0-4", () => {
  expect(calculate.performOperation("-", 0, 4)).toBe(-4);
});

test("performOperation properly substracts 9-4", () => {
  expect(calculate.performOperation("-", 9, 4)).toBe(5);
});

test("performOperation properly substracts 9-9", () => {
  expect(calculate.performOperation("-", 9, 9)).toBe(0);
});

test("performOperation properly multiplies 0*4", () => {
  expect(calculate.performOperation("x", 0, 4)).toBe(0);
});

test("performOperation properly multiplies 3*2", () => {
  expect(calculate.performOperation("x", 3, 2)).toBe(6);
});

test("performOperation properly divides 3/2", () => {
  expect(calculate.performOperation("/", 3, 2)).toBe(1.5);
});

test("performOperation properly divides 3/0", () => {
  expect(calculate.performOperation("/", 3, 0)).toBe("NOT A NUMBER");
});

test("performOperation properly divides 3/3", () => {
  expect(calculate.performOperation("/", 3, 3)).toBe(1);
});

//countNumberOfCharactersInNumber(number)
test("countNumberOfCharactersInNumber counts numer of digits in 239048230 properly", () => {
  expect(calculate.countNumberOfCharactersInNumber(239048230)).toBe(9);
});

test("countNumberOfCharactersInNumber counts numer of digits in 123,456 properly", () => {
  expect(calculate.countNumberOfCharactersInNumber(123.456)).toBe(7);
});

test("countNumberOfCharactersInNumber counts numer of digits in -123,456 properly", () => {
  expect(calculate.countNumberOfCharactersInNumber(-123.456)).toBe(8);
});

// Mock localStorage
const localStorageMock = (() => {
    let store = {};
    return {
      getItem: jest.fn((key) => store[key]),
      setItem: jest.fn((key, value) => {
        store[key] = value.toString();
      }),
      clear: jest.fn(() => {
        store = {};
      }),
      removeItem: jest.fn((key) => {
        delete store[key];
      }),
    };
  })();
  
  Object.defineProperty(global, "localStorage", {
    value: localStorageMock,
  });
  
  beforeEach(() => {
    // Reset the store before each test
    localStorageMock.clear();
    jest.clearAllMocks();
  });
  
  // calculateResult(screen)
  test("calculateResult should properly calculate 123+3 and store the result in localStorage", () => {
    const screen = { innerHTML: "3" };
    const result = "123";
    const action = "+";
    const isSubmitted = "false";
  
    // Initialize localStorage without tracking
    localStorageMock.setItem("result", result);
    localStorageMock.setItem("action", action);
    localStorageMock.setItem("isSubmitted", isSubmitted);
  
    // Clear mock history to start tracking fresh
    jest.clearAllMocks();
  
    // Act
    calculate.calculateResult(screen);

    // Assert localStorage interactions
    expect(localStorage.setItem).toHaveBeenCalledWith("isSubmitted", "true");
    expect(localStorage.setItem).toHaveBeenCalledWith("result", 126);
  
    // Verify the screen value is updated correctly
    expect(screen.innerHTML).toBe(126);
  });

  test("calculateResult should properly calculate 123-3 and store the result in localStorage", () => {
    const screen = { innerHTML: "3" };
    const result = "123";
    const action = "-";
    const isSubmitted = "false";
  
    // Initialize localStorage without tracking
    localStorageMock.setItem("result", result);
    localStorageMock.setItem("action", action);
    localStorageMock.setItem("isSubmitted", isSubmitted);
  
    // Clear mock history to start tracking fresh
    jest.clearAllMocks();
  
    // Act
    calculate.calculateResult(screen);

    // Assert localStorage interactions
    expect(localStorage.setItem).toHaveBeenCalledWith("isSubmitted", "true");
    expect(localStorage.setItem).toHaveBeenCalledWith("result", 120);
  
    // Verify the screen value is updated correctly
    expect(screen.innerHTML).toBe(120);
  });

  test("calculateResult should properly calculate 12x3 and store the result in localStorage", () => {
    const screen = { innerHTML: "3" };
    const result = "12";
    const action = "x";
    const isSubmitted = "false";
  
    // Initialize localStorage without tracking
    localStorageMock.setItem("result", result);
    localStorageMock.setItem("action", action);
    localStorageMock.setItem("isSubmitted", isSubmitted);
  
    // Clear mock history to start tracking fresh
    jest.clearAllMocks();
  
    // Act
    calculate.calculateResult(screen);

    // Assert localStorage interactions
    expect(localStorage.setItem).toHaveBeenCalledWith("isSubmitted", "true");
    expect(localStorage.setItem).toHaveBeenCalledWith("result", 36);
  
    // Verify the screen value is updated correctly
    expect(screen.innerHTML).toBe(36);
  });

  test("calculateResult should properly calculate 12x3 and store the result in localStorage", () => {
    const screen = { innerHTML: "3" };
    const result = "12";
    const action = "/";
    const isSubmitted = "false";
  
    // Initialize localStorage without tracking
    localStorageMock.setItem("result", result);
    localStorageMock.setItem("action", action);
    localStorageMock.setItem("isSubmitted", isSubmitted);
  
    // Clear mock history to start tracking fresh
    jest.clearAllMocks();
  
    // Act
    calculate.calculateResult(screen);

    // Assert localStorage interactions
    expect(localStorage.setItem).toHaveBeenCalledWith("isSubmitted", "true");
    expect(localStorage.setItem).toHaveBeenCalledWith("result", 4);
  
    // Verify the screen value is updated correctly
    expect(screen.innerHTML).toBe(4);
  });

  test("calculateResult should not change the result if isSubmitted is true", () => {
    const screen = { innerHTML: "3" };
    const result = "123";
    const action = "+";
    const isSubmitted = "true";
  
    // Initialize localStorage without tracking
    localStorageMock.setItem("result", result);
    localStorageMock.setItem("action", action);
    localStorageMock.setItem("isSubmitted", isSubmitted);
  
    // Clear mock history to start tracking fresh
    jest.clearAllMocks();
  
    // Act
    calculate.calculateResult(screen);

    // Assert localStorage interactions
    expect(localStorage.setItem).toHaveBeenCalledWith("isSubmitted", "true");
    expect(localStorage.setItem).toHaveBeenCalledWith("result", 3);
  
    // Verify the screen value is updated correctly
    expect(screen.innerHTML).toBe(3);
  });


  test("calculateResult should properly calculate 12/0 and store the result (NOT A NUMBER) in localStorage", () => {
    const screen = { innerHTML: "0" };
    const result = "12";
    const action = "/";
    const isSubmitted = "false";
  
    // Initialize localStorage without tracking
    localStorageMock.setItem("result", result);
    localStorageMock.setItem("action", action);
    localStorageMock.setItem("isSubmitted", isSubmitted);
  
    // Clear mock history to start tracking fresh
    jest.clearAllMocks();
  
    // Act
    calculate.calculateResult(screen);

    // Assert localStorage interactions
    expect(localStorage.setItem).toHaveBeenCalledWith("isSubmitted", "true");
    expect(localStorage.setItem).toHaveBeenCalledWith("result", "NOT A NUMBER");
  
    // Verify the screen value is updated correctly
    expect(screen.innerHTML).toBe("NOT A NUMBER");
  });