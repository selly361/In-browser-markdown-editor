export const uuid = () => {
  function* generateId(): any {
    let i = 2;
    while (true) {
      yield i;
      i++;
    }
  }

  let gen = generateId();

  return (): number => {
    let id: number = gen.next().value;
    return id;
  };
};
