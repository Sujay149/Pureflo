import { NextRequest, NextResponse } from 'next/server'

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone number
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  return phoneRegex.test(phone) && phone.length >= 10
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, location, tankCapacity, message } = body

    // Validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    if (!phone || !isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Valid phone number is required' },
        { status: 400 }
      )
    }

    if (!location || !location.trim()) {
      return NextResponse.json(
        { error: 'Location is required' },
        { status: 400 }
      )
    }

    if (!tankCapacity || !tankCapacity.trim()) {
      return NextResponse.json(
        { error: 'Tank capacity selection is required' },
        { status: 400 }
      )
    }

    // For now, log the enquiry (since Resend API key setup)
    // In production, this would send via Resend email service
    console.log('New enquiry received:', {
      name,
      email,
      phone,
      location,
      tankCapacity,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Uncomment this when Resend API key is configured
    // const response = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     from: 'Pureflo <noreply@pureflo.com>',
    //     to: 'sales@pureflo.com',
    //     subject: `New Enquiry from ${name}`,
    //     html: `
    //       <h2>New Water Tank Enquiry</h2>
    //       <p><strong>Name:</strong> ${name}</p>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Phone:</strong> ${phone}</p>
    //       <p><strong>Location:</strong> ${location}</p>
    //       <p><strong>Tank Capacity Needed:</strong> ${tankCapacity}</p>
    //       <p><strong>Message:</strong></p>
    //       <p>${message || 'No additional message provided'}</p>
    //     `,
    //   }),
    // })

    // if (!response.ok) {
    //   throw new Error('Failed to send email')
    // }

    // Also send confirmation email to customer
    // await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     from: 'Pureflo <noreply@pureflo.com>',
    //     to: email,
    //     subject: 'We received your enquiry - Pureflo',
    //     html: `
    //       <h2>Thank you for your interest!</h2>
    //       <p>Hi ${name},</p>
    //       <p>We've received your enquiry and will get back to you within 24 hours.</p>
    //       <p>In the meantime, feel free to contact us:</p>
    //       <p>
    //         <strong>Phone:</strong> +1 (555) 123-4567<br/>
    //         <strong>Email:</strong> sales@pureflo.com
    //       </p>
    //       <p>Best regards,<br/>The Pureflo Team</p>
    //     `,
    //   }),
    // })

    return NextResponse.json(
      { message: 'Enquiry submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing enquiry:', error)
    return NextResponse.json(
      { error: 'Failed to process enquiry. Please try again.' },
      { status: 500 }
    )
  }
}
