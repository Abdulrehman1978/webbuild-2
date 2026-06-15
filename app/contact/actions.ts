"use server";

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone: string;
  businessName?: string;
  service: string;
  message: string;
}) {
  console.log("=== TAXZONE V2 CONTACT FORM SUBMISSION ===");
  console.log("Name:", formData.name);
  console.log("Email:", formData.email);
  console.log("Phone:", formData.phone);
  console.log("Business Name:", formData.businessName || "N/A");
  console.log("Service:", formData.service);
  console.log("Message:", formData.message);
  console.log("==========================================");

  // Introduce small delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Taxzone v2 Forms <onboarding@resend.dev>",
          to: "taxzonenavimumbai@gmail.com",
          subject: `[V2 Lead] ${formData.name} - ${formData.service}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
              <h2 style="color: #07080a; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Taxzone v2 Consultation Request</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Phone:</strong> ${formData.phone}</p>
              <p><strong>Business Name:</strong> ${formData.businessName || "N/A"}</p>
              <p><strong>Service Requested:</strong> ${formData.service}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: #f9f9f9; padding: 12px; border-left: 4px solid #10b981; border-radius: 4px; margin-top: 10px;">
                ${formData.message.replace(/\n/g, "<br/>")}
              </div>
              <footer style="margin-top: 20px; font-size: 11px; color: #777; text-align: center;">
                Sent from the Taxzone v2 wealth-tech contact portal.
              </footer>
            </div>
          `,
        }),
      });

      if (res.ok) {
        return {
          success: true,
          message: "Thank you! Your inquiry has been sent successfully. Shamim Sir and the advisor team will call you shortly.",
        };
      }
    } catch (err) {
      console.error("Resend API failed inside webbuild2:", err);
    }
  }

  return {
    success: true,
    message: "Thank you! Inquiry received (Mock Mode - set RESEND_API_KEY to send actual emails).",
  };
}
