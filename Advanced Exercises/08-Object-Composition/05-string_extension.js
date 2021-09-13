(function() {
  String.prototype.ensureStart = function(str) {
    if (!this.startsWith(str))
      return str + this.toString();
    return this.toString();
  }

  String.prototype.ensureEnd = function(str) {
    if (!this.endsWith(str))
      return this.toString() + str;
    return this.toString();
  }

  String.prototype.isEmpty = function() {
    return this.toString().localeCompare("") == 0;
  }

  String.prototype.truncate = function(n) {
    if (n < 4) 
      return '.'.repeat(n);

    if (this.toString().length < n)
      return this.toString();

    let foundedSpace = this.toString().substring(0, n - 2).lastIndexOf(' ');

    if (foundedSpace !== -1) 
      return this.toString().substring(0, foundedSpace) + '...';
    else
      return this.toString().substring(0, n - 3) + '...';
  }

  String.format = function(str, ...params) {
    params.forEach((key, index) => {
      str = str.replace(`{${index}}`, key);
    })

    return str;
  }
})();

