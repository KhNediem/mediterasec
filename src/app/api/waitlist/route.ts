import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, role, message } = await request.json()

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Create Supabase client with service role key for admin access
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    console.log('[v0] Attempting to insert:', { name, email, company, role })

    // Insert into waitlist table
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          name,
          email,
          company,
          role,
          message,
        },
      ])
      .select()

    if (error) {
      console.error('[v0] Supabase error:', error)
      return NextResponse.json(
        { error: `Failed to join waitlist: ${error.message}` },
        { status: 500 }
      )
    }

    console.log('[v0] Waitlist signup successful:', data)

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist',
        data,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[v0] API error:', error)
    return NextResponse.json(
      { error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}
