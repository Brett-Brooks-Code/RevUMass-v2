export async function GET(req: Request) {
  return Response.json('Hello world!', { status: 200 });
}