import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
  "https://mdzqwuictohywpoxxupo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kenF3dWljdG9oeXdwb3h4dXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MTU0MDYsImV4cCI6MjA4NjQ5MTQwNn0.joaXXJhJFavXgsy6fUBSABI0SL8GMkhSI9Hd2iqAGb8"
);
