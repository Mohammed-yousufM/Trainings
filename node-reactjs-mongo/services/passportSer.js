const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const HerokuUsers = mongoose.model("herokuUsers");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  HerokuUsers.findById(id)
    .then((user) => done(null, user))
    .catch((err) => console.log(err));
});

const saveToDB = async (idUs, nameUs, mailUs, photoUs, done) => {
  const userExists = await HerokuUsers.findOne({ profileId: idUs });

  if (userExists) {
    console.log("*****User is already present*****");
    done(null, userExists);
  } else {
    const herokuUser = new HerokuUsers({
      profileId: idUs,
      name: nameUs,
      email: mailUs,
      photo: photoUs,
    });
    const saved = await herokuUser.save();
    console.log("The details are saved\n", saved);
    done(null, saved);
  }
};

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log("access token:", accessToken);
      // console.log("refrrefreshToken:", refreshToken);

      const [iD, name, mail, pic] = [
        profile.id,
        profile.displayName,
        profile.emails[0]["value"],
        profile.photos[0]["value"],
      ];
      //   console.log("profile ID: ", iD);
      //   console.log("Name: ", name);
      //   console.log("Email: ", mail);
      //   console.log("Photo: ", pic);
      saveToDB(iD, name, mail, pic, done);
    }
  )
);
