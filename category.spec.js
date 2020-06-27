'use strict';

const Category = require('./category');

let categtyInput = [
    { id: 1, parent: 0 },
    { id: 2, parent: 1 },
    { id: 3, parent: 2 },
    { id: 4, parent: 3 },
    { id: 5, parent: 3 },
    { id: 6, parent: 2 },
    { id: 7, parent: 1 },
    { id: 8, parent: 0 },
    { id: 9, parent: 0 },
    { id: 10, parent: 4 },
    { id: 11, parent: 10 },
    { id: 12, parent: 8 },
    { id: 13, parent: 2 },
    { id: 14, parent: 8 },
  ];

describe("Category Test", () => {
  test("it should return object with tree structure", () => {
    const categoryTree = Category.create(categtyInput);
    expect(Array.isArray(categoryTree)).toBe(true);
    expect(categoryTree.length).toBe(1);
    expect(categoryTree[0]).toHaveProperty('id');
    expect(categoryTree[0]).toHaveProperty('child');
  });

  test("it should return array of object with tree structure", () => {
    categtyInput.push({ id: 15, parent: 22 })
    const categoryTree = Category.create(categtyInput);
    expect(Array.isArray(categoryTree)).toBe(true);
    expect(categoryTree.length).toBe(2);
    expect(categoryTree[0]).toHaveProperty('id');
    expect(categoryTree[0]).toHaveProperty('child');
    expect(categoryTree[1]).toHaveProperty('id');
    expect(categoryTree[1]).toHaveProperty('child');
  });

  test("it should return emty array", () => {
    const categoryTree = Category.create('something data');
    expect(Array.isArray(categoryTree)).toBe(true);
    expect(categoryTree.length).toBe(0);
  });
});