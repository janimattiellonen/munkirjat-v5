import { createClient } from '@supabase/supabase-js'

export async function getBooks() {

  const supabaseUrl = process.env.SUPABASE_URL!
  const supabaseKey = process.env.SUPABASE_KEY!

  const supabase = createClient(supabaseUrl, supabaseKey)

  let { data, error } = await supabase
    .from('books')
    .select('id, title, authors_books(author_id, book_id, authors(first_name, last_name))')

  console.info(`data: ${JSON.stringify(data,null,2)}`)
  console.info(`error: ${JSON.stringify(error,null,2)}`)


  return data || []
}
