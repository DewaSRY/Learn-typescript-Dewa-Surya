// import { describe, it } from "vitest";

/**
 *
 */
export default class RandomApp {
  public static getRandomOperation(lengthNumber: number) {
    if (lengthNumber < 0) throw new Error("Please insert number bigger then 1");

    return Math.round(Math.random() * lengthNumber - 1);
  }

  public static getArrOfNumbers(
    lengthNumber: number,
    excludeNum: number,
    amount: number = 4
  ) {
    let arr = [];
    for (let num = 0; num < amount; num++) {
      let ranNumber = RandomApp.getRandomOperation(lengthNumber);
      if (ranNumber === excludeNum || ranNumber <= 0) {
        num--;
        continue;
      }
      arr.push(ranNumber);
    }
    return arr;
  }

  public static shuffle<T>(arrOfElement: T[]) {
    let currentIndex = arrOfElement.length,
      randomIndex;
    while (currentIndex > 0) {
      randomIndex = RandomApp.getRandomOperation(currentIndex);
      randomIndex = Math.abs(randomIndex);
      currentIndex--;
      RandomApp.swap(arrOfElement, currentIndex, randomIndex);
    }
    return arrOfElement;
  }
  private static swap<T>(elArr: T[], indexOne: number, indexTwo: number) {
    [elArr[indexOne], elArr[indexTwo]] = [elArr[indexTwo], elArr[indexOne]];
  }
}
