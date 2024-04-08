const text = 'Lorem ipsum dolor sit amet, consectetur adip';

const encoder = new TextEncoder();

const data = encoder.encode(text);

Deno.writeFile('message.txt', data).then(() => {
  console.log("Wrote to file.")
})

Deno.serve((_req) => new Response("Hello, deno!"))