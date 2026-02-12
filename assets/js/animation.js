firebase.auth().onAuthStateChanged(async user => {
  if (user) {

    const snapshot = await db.collection("users")
      .where("email", "==", user.email)
      .get();

    const data = snapshot.docs[0].data();

    document.getElementById("welcome").innerText =
      `Happy Valentine, ${data.displayName} 💕`;

  } else {
    window.location.href = "index.html";
  }
});