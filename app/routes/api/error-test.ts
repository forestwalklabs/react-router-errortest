export async function action({ request }: { request: Request }) {
  console.log("About to return an error response. Can it be centrally logged?");

  return Response.json(
    { error: "Intentional Error - How can this be centrally logged?" },
    { status: 500 }
  );
}
