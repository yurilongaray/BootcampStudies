function sempreUm(x) {
  return 1;
}

// REVISAR
describe("aprendendo a escrever testes com jest, sempreUm", function () {
  it("sempreUm deve retornar 1 quando recebe 3 como argumento", function () {
    expect(sempreUm(3)).toEqual(1);
  });

  it("sempreUm deve retornar 1 quando recebe 2 como argumento", function () {
    expect(sempreUm(2)).toEqual(1); //Retornará erro
  });

  it("sempreUm deve retornar 1 quando recebe 1 como argumento", function () {
    expect(sempreUm(1)).toEqual(1); //Retornará erro
  });
});

function hello(name) {
  return "Hello, " + name + "!"
}

describe("hello", function () {
  it("deve retornar Hello, desenvolvedor!", function () {
    expect(hello("desenvolvedor")).toEqual("Hello, desenvolvedor!");
  });

  it("deve retornar Hello, Mochileiro!", function () {
    expect(hello("Mochileiro")).toEqual("Hello, Mochileiro!");
  });

  it("deve retornar Hello, cientista!", function () {
    expect(hello("cientista")).toEqual("Hello, cientista!");
  });
});
