const str: string = 'hello';
const num: number = 13;
const b: boolean = true;
const n: null = null;

const arr: string[] = ['hye', 'typescript'];
const a: any[] = [true, 3, 'me'];

const user: {
  name?: string;
  pseudo: string;
  [key: string]: string;
} = {
  // name: 'usr1',
  pseudo: 'paulh-afk',
  city: 'Paris',
};

const date: Date = new Date();

// eslint-disable-next-line no-console
console.log({
  str,
  num,
  b,
  n,
  arr,
  a,
  user,
  date,
});
