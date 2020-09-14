if (process.env.NODE_ENV === "production") {
  module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    uri: process.env.URI,
    cookieKey: process.env.COOKIE_KEY,
  };
} else {
  module.exports = {
    googleClientID: "client-ID",
    googleClientSecret: "client-secret",
    uri: "uri-for-mongo",
    cookieKey: "jfjjs5geyhjhas9vhhsa",
  };
}
