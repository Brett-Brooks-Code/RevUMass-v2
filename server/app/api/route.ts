export async function GET(req: Request, res: Response) {
  return Response.json('Hello world!', { status: 200 });
}