export const uuid = () => {
  function* generateId() {
    let i = 2;
    while (true) {
      yield i;
      i++;
    }
  }

  let gen = generateId();

  return () => {
    let id = gen.next().value;
    return id;
  };
};
