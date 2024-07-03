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
  it('should return 16 from addition', async () => {
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
  it('should return 11.9 from subtraction', async () => {
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
      expect(data.left).toBe(1);
      expect(data.right).toBe(11);
      expect(data.result).toBe(-10);
    })
  });
});

describe('Subtract Negaive Int', () => {
  it('should return -10 from subtraction', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "subtraction", left: 1, right: -11});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(12);
    })
  });
});

describe('Subtract Negaive Decimal', () => {
  it('should return -10 from subtraction', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "subtraction", left: 1.78, right: -11.99});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(13.77);
    })
  });
})

describe('Subtract Negaive Decimal', () => {
  it('should return -10 from subtraction', async () => {
    mockAdapter.getTask.mockResolvedValue({id:"2", operation: "subtraction", left: 1.78, right: -11.99});

    const mathematicService = new MathService(mockDao, mockAdapter);

    mathematicService.calculateAndVerify().then(data => {
      expect(data.result).toBe(13.77);
    })
  });
});
