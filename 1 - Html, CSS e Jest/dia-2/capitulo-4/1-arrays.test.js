// Substituia RESPOSTA pela resposta correta

describe("Arrays", function () {
  it("should create arrays", function () {
    var emptyArray = [];
    expect(emptyArray.length).toEqual(0);

    var multiTypeArray = [0, 1, "two", function () {
        return 3;
      }, {
        value1: 4,
        value2: 5
      },
      [6, 7]
    ];
    expect(multiTypeArray[0]).toEqual(0);
    expect(multiTypeArray[2]).toEqual("two");
    expect(multiTypeArray[3]()).toEqual(3);
    expect(multiTypeArray[4].value1).toEqual(4);
    expect(multiTypeArray[4]["value2"]).toEqual(5);
    expect(multiTypeArray[5][0]).toEqual(6);
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3); //Adiciona um item no array na ultima posição
    expect(array).toEqual([1,2,3]);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toEqual(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toEqual(6);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toEqual(10);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toEqual(5);
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(["peanut"]);
    expect(array.slice(0, 2)).toEqual( ["peanut", "butter"]);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(["and", "jelly"]);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual([]);
    expect(array.slice(5, 1)).toEqual([]);
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual([1, 2, 3]);

    var poppedValue = array.pop();
    expect(poppedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3); //Adiciona como primeiro elemento
    expect(array).toEqual([3, 1, 2]);

    var shiftedValue = array.shift(); //Retira o primeiro valor
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  });
});