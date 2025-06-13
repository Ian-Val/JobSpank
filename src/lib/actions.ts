import { redirect } from "next/navigation"
import { supabase } from "./supabaseClient"

export async function addEmail(formData: FormData): Promise<{ message: string }> {
    'use server'
    const email = formData.get('email') as string;

    // Validate email format using regex
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        console.error('Invalid email format');
        return { message: 'Invalid email format' };
    }

    const { data, error } = await supabase
        .from('Emails')
        .insert([{ email_address: email }]);

    if (error) {
        if (error.code === '23505') {
            console.error(`Email "${email}" is already in use.`);
        } else {
            console.error('Database error:', error);
        }
        return { message: 'Database error' };
    }
    return { message: 'Success' }
}