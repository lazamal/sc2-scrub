require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const BnetStrategy = require("passport-bnet").Strategy;

const { BNET_ID, BNET_SECRET, BNET_CALLBACK, SESSION_SECRET, BNET_REGION } =
  process.env;

const app = express();

// 1️⃣ CORS must come before routes
app.use(
  cors({
    origin: "http://localhost:5173", // exact origin of React frontend
    credentials: true, // allow cookies
  })
);

// 2️⃣ Session middleware must come BEFORE passport.initialize()
app.use(
  session({
    secret: SESSION_SECRET || "dev-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // false for localhost HTTP
      httpOnly: true,
      sameSite: "lax", // allows cross-origin redirects for OAuth
    },
  })
);

// 3️⃣ Initialize Passport AFTER session middleware
app.use(passport.initialize());
app.use(passport.session());

// 4️⃣ Define Passport strategy here
passport.use(
  new BnetStrategy(
    {
      clientID: BNET_ID,
      clientSecret: BNET_SECRET,
      callbackURL: BNET_CALLBACK,
      region: BNET_REGION || "eu",
      state: true, // ✅ Add this line
    },
    function (accessToken, refreshToken, profile, done) {
      profile._accessToken = accessToken;
      profile._refreshToken = refreshToken;
      return done(null, profile);
    }
  )
);

// 5️⃣ Serialize / deserialize
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// 6️⃣ Routes go here
app.get("/", (req, res) => res.send("Backend running."));
app.get(
  "/oauth/battlenet",
  passport.authenticate("bnet", { scope: ["openid"] })
);
app.get(
  "/oauth/battlenet/callback",
  passport.authenticate("bnet", { failureRedirect: "/" }),
  (req, res) => res.redirect("http://localhost:5173/home")
);
app.get("/profile", (req, res) => res.json({ user: req.user || null }));
app.get("/logout", (req, res) => {
  req.logout(() => res.redirect("http://localhost:5173/"));
});

// Add this route to your Express server
app.get("/sc2/ladder/grandmaster/:regionId", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const { regionId } = req.params;
  const accessToken = req.user._accessToken;
  const region = BNET_REGION || "eu";

  try {
    const response = await fetch(
      `https://${region}.api.blizzard.com/sc2/ladder/grandmaster/${regionId}?locale=en_US`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch SC2 data" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
