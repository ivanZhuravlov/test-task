function get(obj, path, defaultValue) {
  const keys = path.split('.');
  let value = obj;

  for (let key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
      continue
    }
    return defaultValue;
  }

  return value;
}

const obj = { 
  a: { 
    b: { 
      c: 'd' 
    },
    e: 'f'
  }
};

console.log(get(obj, 'a.b'))
console.log(get(obj, 'a.b.c'))
console.log(get(obj, 'a.e'))
console.log(get(obj, 'x.x.e'))
console.log(get(obj, 'a.x.e', true))
console.log(get(obj, 'a.x.e', 'My default value'))