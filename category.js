'use strict';

class Category {
    constructor(id) {
      this.id = id;
      this.fillChild();
    }

    static create(categoryList) {
      this.list = Array.isArray(categoryList) ? categoryList : [];
      const rootElement = this.findRoot();

      const result = [];
      for (let root of rootElement) {
        const node = new Category(root)
        result.push(node)
      }

      return result;
    }

    fillChild() {
      const childs = Category.list.filter(cat => cat.parent === this.id);

      this.child = childs.map(child => new Category(child.id));
    }

    static findRoot(cats) {
      const setOfId = new Set(this.list.flatMap(cat => cat.id))
      const rootIds = this.list.filter(cat => !setOfId.has(cat.parent))
        .map(cat => cat.parent)

      return new Set(rootIds)
    }
  }

  module.exports = Category