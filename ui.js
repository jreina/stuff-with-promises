function Element(selector) {
  this.element = selector;
  this.children = [];
  this.append = element => this.children.push(element);
  this.compile = () => {
    const tags = this.element.split('></');
    const children = this.children.map(x => x.compile()).join('\n');
    return tags.length === 2
      ? `${tags[0]}>\n${children}\n</${tags[1]}`
      : this.element;
  };
}

const ctr = selector => new Element(selector);

module.exports = ctr;
