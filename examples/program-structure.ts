// -- Functions --

// Example of creating a function to handle the greeting

let person: string;

person = 'Alice';
console.log(`Hi, ${person}`);
person = 'Bob';
console.log(`Hey, ${person}`);
person = 'Carol';
console.log(`Hello, ${person}`);

function formatGreeting(name: string): string {
  return `Hello, ${name}`;
}

console.log(formatGreeting('Alice'));
console.log(formatGreeting('Bob'));
console.log(formatGreeting('Carol'));

// Example of function that works with objects

const genericObject = {
  name: 'Bob',
};

const anotherObject = {
  nome: 'Charlie',
};

interface Vector2D {
  x: number;
  y: number;
}

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

const aVector2D: Vector2D = {
  x: 0,
  y: 0,
};

const bVector2D: Vector2D = {
  x: 3,
  y: 4,
};

const aVector3D: Vector3D = {
  x: 1,
  y: 1,
  z: 0,
};

const bVector3D: Vector3D = {
  x: 5,
  y: 5,
  z: 1,
};

console.log(`adding two vectors: ${add(aVector2D, bVector2D)}`);
console.log(`adding two vectors: ${add(aVector3D, bVector3D)}`); // <-- why does this work?

function add(a: Vector2D, b: Vector2D): Vector2D {
  return { x: a.x + b.x, y: a.y + b.y };
}

// Additional examples

interface UploadEvent {
  type: 'upload';
  filename: string;
  contents: string;
}

interface DownloadEvent {
  type: 'download';
  filename: string;
}

type AppEvent = UploadEvent | DownloadEvent;

function handleEvent(e: AppEvent): void {
  switch (e.type) {
    case 'download':
      // e is type of DownloadEvent
      console.log(`downloading contents of ${e.filename}...`);
      break;
    case 'upload':
      console.log(`uploading "${e.contents}" for ${e.filename}...`);
      break;
    default:
      throw new Error('Unknown event type: ', e);
  }
}
