function extensibleObject() {
  return {
    __proto__: Object.getPrototypeOf(this),
    extend: function(template) {
      for (const key in template) {
        if (typeof template[key] === 'function')
          this.__proto__[key] = template[key];

        else
          this[key] = template[key];
      }
    }
  }
}

let obj = extensibleObject();
obj.extend({
  extensionMethod: function () {},
  extensionProperty: 'someString'
});
console.log(obj);