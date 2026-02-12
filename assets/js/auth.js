import { supabase } from "./supabase.js";

async function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const errorEl = document.getElementById("error");

    errorEl.innerText = "";

    if (!username || !password) {
        errorEl.innerText = "Please enter both username and password";
        return;
    }

    try {
        console.log("LOOKING USER:", username);

        const { data, error } = await supabase
            .from("users")
            .select("email")
            .eq("username", username)
            .single();

        if (error || !data) {
            errorEl.innerText = "Username not found";
            return;
        }

        const { error: loginError } = await supabase.auth.signInWithPassword({
            email: data.email,
            password
        });

        if (loginError) throw loginError;

        window.location.href = "dashboard.html";

    } catch (err) {
        errorEl.innerText = err.message;
    }
}

window.login = login;
