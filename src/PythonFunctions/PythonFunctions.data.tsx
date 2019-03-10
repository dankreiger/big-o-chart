export interface CaseScenario {
  worst: PythonFn[];
  average?: PythonFn[];
}

export interface PythonFn {
  name: string;
  complexity: string;
}

export const Lists: CaseScenario[] = [{
  worst: [
    { name: 'index', complexity: 'O(1)' },
    { name: 'store', complexity: 'O(1)' },
    { name: 'length', complexity: 'O(1)' },
    { name: 'append', complexity: 'O(1)' },
    { name: '==', complexity: 'O(n)' },
    { name: 'remove', complexity: 'O(n)' },
    { name: 'copy', complexity: 'O(n)' },
    { name: 'reverse', complexity: 'O(n)' },
    { name: 'iteration', complexity: 'O(n)' },
    { name: 'in list', complexity: 'O(n)' },
  ]
}]

export const Dictionaries: CaseScenario[] = [{
  worst: [
    { name: 'index', complexity: 'O(n)' },
    { name: 'store', complexity: 'O(n)' },
    { name: 'length', complexity: 'O(n)' },
    { name: 'delete', complexity: 'O(n)' },
    { name: 'iteration', complexity: 'O(n)' },
  ],
  average: [
    { name: 'index', complexity: 'O(1)' },
    { name: 'store', complexity: 'O(1)' },
    { name: 'length', complexity: 'O(1)' },
    { name: 'delete', complexity: 'O(1)' },
    { name: 'iteration', complexity: 'O(1)' },
  ]
}]