export default class ProgrammerError extends Error {
  constructor(message: string, module: string, component: string) {
    super(`${message}\nIn Module: ${module}\nIn Component: ${component}`);

    this.name = 'ProgrammerError';
  }
}

export function objectsNeededForComparison(obj1: unknown, obj2: unknown) {
  return new ProgrammerError(
    `both values must be objects in order to get their difference. Obj1: ${JSON.stringify(
      obj1,
    )}\nObj2: ${JSON.stringify(obj2)}`,
    'shared utils',
    'getDiff',
  );
}
