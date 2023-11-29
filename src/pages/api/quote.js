export const prerender = false;
import * as postmark from "postmark";

export const POST = async ({ request, redirect }) => {
  const client = new postmark.ServerClient(import.meta.env.POSTMARK_TOKEN);
  const data = await request.json();


  const req = await fetch("https://api.smartmoving.com/api/leads/from-provider/v2?providerKey=2f400089-28bf-46c7-8a17-adfd01096041", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  client.sendEmail({
    "From": "Local Muscle Movers <holz@localmusclemovers.com>",
    "To": `${data.email}, holz@localmusclemovers.com, info@brem.io`,
    "Subject": "Local Muscle Movers Quote",
    "HtmlBody": `
      Thank you for your interest in Local Muscle Movers! We have received your quote request and will be in touch shortly.<br>
      <br>
      Move Details:<br>
      <br>
      Name: ${data.firstName} ${data.lastName}<br>
      Email: ${data.email}<br>
      Phone: ${data.phoneNumber}<br>
      Desired Date: ${data.moveDate}<br>
      Flexibility: ${data.flexibility}<br>
      Move Size: ${data.moveSize}<br>
      Service Type: ${data.moveType}<br>
      <br>
      <br>
      Origin Details:<br>
      <br>
      ${data.originStreet},<br>
      ${data.originCity}, ${data.originState} ${data.originZip}<br>
      <br>
      Basement: ${data.originFloorBasement ? "Yes" : "No"}<br>
      First Floor: ${data.originFloorFirst ? "Yes" : "No"}<br>
      Second Floor: ${data.originFloorSecond ? "Yes" : "No"}<br>
      Third Floor: ${data.originFloorThird ? "Yes" : "No"}<br>
      Fourth Floor: ${data.originFloorFourth ? "Yes" : "No"}<br>
      Elevator: ${data.originFloorElevator ? "Yes" : "No"}<br>
      Distance: ${data.originDistance}<br>
      <br>
      <br>
      Destination Details:<br>
      <br>
      ${data.destinationStreet},<br>
      ${data.destinationCity}, ${data.destinationState} ${data.destinationZip}<br>
      <br>
      Basement: ${data.destFloorBasement ? "Yes" : "No"}<br>
      First Floor: ${data.destFloorFirst ? "Yes" : "No"}<br>
      Second Floor: ${data.destFloorSecond ? "Yes" : "No"}<br>
      Third Floor: ${data.destFloorThird ? "Yes" : "No"}<br>
      Fourth Floor: ${data.destFloorFourth ? "Yes" : "No"}<br>
      Elevator: ${data.destFloorElevator ? "Yes" : "No"}<br>
      Distance: ${data.destDistance}<br>
      <br>
      <br>
      Location Notes:<br>
      <br>
      ${data.locationNotes}<br>
      <br>
      Additional Notes:<br>
      <br>
      Preferred Contact Method: ${data.preferredContact}<br>
      Include Mi-Box portable storage: ${data.includeMiBox}<br>
      Disassembly or Reassembly: ${data.assemblyRequired}<br>
      Parking/Access Point/Hallway/Stairwell Obsticles: ${data.accessObsticles}<br>
      200+ lb Items: ${data.weightThreshold}<br>
      Accurate Inventory Assurance: ${data.inventoryAccuracy}<br>
      <br>
      Additional Move Information:<br>
      ${data.additionalInfo}<br>
    `,
    "MessageStream": "outbound"
  })

  return redirect("/quote-thank-you", 302)
};
