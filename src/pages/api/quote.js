
export const POST = async ({ request }) => {
  const data = await request.formData();

  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};
