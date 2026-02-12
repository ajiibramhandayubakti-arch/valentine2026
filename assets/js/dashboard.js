import { supabase } from "./supabase.js";

async function init() {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
        window.location.href = "index.html";
        return;
    }

    const { data, error } = await supabase
        .from("users")
        .select("display_name, message")
        .eq("id", session.user.id)
        .single();

    if (error || !data) {
        document.getElementById("welcome").innerText = "Welcome 💕";
        document.getElementById("message").innerText = "";
        return;
    }

    document.getElementById("welcome").innerText =
        "Happy Valentine, " + data.display_name + " 💖";

    document.getElementById("message").innerText =
        data.message || "You are loved ❤️";
}

async function logout() {
    await supabase.auth.signOut();
    window.location.href = "index.html";
}

window.logout = logout;
init();
