import * as postmark from "postmark";

export const POST = async ({ request, redirect }) => {
  const client = new postmark.ServerClient(import.meta.env.POSTMARK_TOKEN);
  const data = await request.json();

  client.sendEmail({
    "From": "Local Muscle Movers <holz@localmusclemovers.com>",
    "To": `${data.email}, holz@localmusclemovers.com, info@brem.io`,
    "Subject": "Join Local Muscle Movers",
    "HtmlBody": `
      Thank you for your interest in Local Muscle Movers! We have received your information and will be in touch shortly.<br>
      <br>
      Your Information:<br>
      Name: ${data.firstName} ${data.lastName}<br>
      Email: ${data.email}<br>
      Phone: ${data.phoneNumber}<br>
      <br>
      Location of interest:<br>
      ${data.location}<br>
      <br>
      Additional Move Information:<br>
      ${data.additionalInfo}<br>
    `,
    "MessageStream": "outbound"
  })

  return redirect("/join");
};
