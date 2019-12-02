export type FakeRequestResolver<T> = (
  resolve: (value?: T | PromiseLike<T>) => void,
  reject: (reason?: any) => void
) => () => void;

/**
 * Выполняет фунцию через случайный промежуток времени (500-2000мс), имитируя работу сервера
 * @param {FakeRequestResolver} callback - функцию, которую нужно выполнить позже
 */
export function fakeRequest<T>(callback: FakeRequestResolver<T>) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(callback(resolve, reject), Math.floor(Math.random() * 1501) + 500);
  });
}