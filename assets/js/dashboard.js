auth.onAuthStateChanged(async user => {

  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const snap = await db.collection("users")
    .where("email", "==", user.email)
    .get();

  const data = snap.docs[0].data();

  document.getElementById("welcome").innerText =
    "Happy Valentine, " + data.displayName;

  document.getElementById("message").innerText =
    data.message;
});

function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}