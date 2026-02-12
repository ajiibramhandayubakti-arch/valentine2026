async function login() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const snap = await db.collection("users")
      .where("username", "==", username)
      .get();

    if (snap.empty) {
      document.getElementById("error").innerText = "Username not found";
      return;
    }

    const data = snap.docs[0].data();
    await auth.signInWithEmailAndPassword(data.email, password);

    window.location.href = "dashboard.html";

  } catch {
    document.getElementById("error").innerText = "Invalid password";
  }
}