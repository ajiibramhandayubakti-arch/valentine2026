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
        console.log("🔍 Looking up username:", username);

        // Cari user berdasarkan username
        const { data, error } = await supabase
            .from("users")
            .select("email")
            .eq("username", username)
            .single();

        if (error || !data) {
            console.warn("❌ Username not found");
            errorEl.innerText = "Username not found";
            return;
        }

        console.log("✅ Found user, signing in with email:", data.email);

        // Login pakai email + password
        const { error: loginError } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: password,
        });

        if (loginError) throw loginError;

        console.log("✅ Login successful! Redirecting...");
        window.location.href = "dashboard.html";

    } catch (error) {
        console.error("❌ Login error:", error.message);

        if (error.message.includes("Invalid login credentials")) {
            errorEl.innerText = "Wrong password";
        } else if (error.message.includes("Email not confirmed")) {
            errorEl.innerText = "Please verify your email first";
        } else if (error.message.includes("Too many requests")) {
            errorEl.innerText = "Too many attempts. Try again later";
        } else {
            errorEl.innerText = "Login failed: " + error.message;
        }
    }
}

window.login = login;
