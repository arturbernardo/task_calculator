import TaskAdapter from '../src/adapters/task_adapter';
import TaskDao from '../src/repositories/task_dao';
import MathService from '../src/services/math_service';

const mockAdapter: jest.Mocked<TaskAdapter> = {
  getTask: jest.fn(),
  postSolution: jest.fn()
};

const mockDao: jest.Mocked<TaskDao> = {
  save: jest.fn(),
  findAll: jest.fn(),
};

describe('Add Int', () => {
  it('should return 16 from addition', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"1", operation: "addition", left: 14, right: 2});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(16);
    })
  });
});

describe('Add negative Int', () => {
  it('should return 2 from addition', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"1", operation: "addition", left: 14, right: -12});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(2);
    })
  });
});

describe('Add decimal', () => {
  it('should return 11.9 from subtraction', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "addition", left: 1.1, right: 10.8});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(11.9);
    })
  });
});

describe('Add negative decimal', () => {
  it('should return -9.7 from subtraction', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "addition", left: 1.1, right: -10.8});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result.toFixed(1)).toBe("-9.7");
    })
  });
});

describe('Subtract Int', () => {
  it('should return -10 from subtraction', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "subtraction", left: 1, right: 11});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(-10);
    })
  });
});

describe('Subtract negaive Int', () => {
  it('should return 12 from subtraction', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "subtraction", left: 1, right: -11});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(12);
    })
  });
});

describe('Subtract negaive Decimal', () => {
  it('should return 13.77 from subtraction', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "subtraction", left: 1.78, right: -11.99});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(13.77);
    })
  });
})

describe('Multiply Int', () => {
  it('should return 4 from multiplication', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "multiplication", left: 2, right: 2});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(4);
    })
  });
});

describe('Multiply negativa Int', () => {
  it('should return 4 from multiplication', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "multiplication", left: -2, right: 2});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(-4);
    })
  });
});

describe('Multiply Decimal', () => {
  it('should return -4.41 from multiplication', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "multiplication", left: -2.1, right: 2.1});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(-4.41);
    })
  });
});

describe('Remainder', () => {
  it('should return remainder -4.41', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "remainder", left: -2.1, right: 1});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result.toFixed(1)).toBe("-0.1");
    })
  });
});

describe('Remainder', () => {
  it('should return remainder 0', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "remainder", left: 2.1, right: 2.1});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(0);
    })
  });
});

describe('Divide by ZERO', () => {
  it('It is a singularity that occurs inside a black hole', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "division", left: 10, right: 0});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(Infinity);
    })
  });
});

describe('Divide ZERO', () => {
  it('Should return zero', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "division", left: 0, right: 103});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(0);
    })
  });
});

describe('Divide Decimals', () => {
  it('Should return zero', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "division", left: 23423.1, right: 75757.5});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(0.30918522918522917);
    })
  });
});