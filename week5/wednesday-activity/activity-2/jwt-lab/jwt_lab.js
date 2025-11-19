// Step 3: Import th e jsonwebtoken library
const jwt = require("jsonwebtoken");

//Step 4: Creating and Signing a JWT
// Function to create and sign a JWT
function createJWT() {
  const payload = {
    userId: 123,
    username: "exampleUser",
  };
  const secretKey = "yourSecretKey"; // Replace with your secret key

  // Sign the JWT with the payload and secret key
  const token = jwt.sign(payload, secretKey);

  console.log("JWT Token:", token);
}

// Call the function to create and sign a JWT
createJWT();

// Step 5: Verifying a JWT
// Function to verify a JWT
function verifyJWT(token) {
  const secretKey = "yourSecretKey"; // Replace with your secret key

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error("JWT Verification Failed:", err.message);
    } else {
      console.log("JWT Verified. Decoded:", decoded);
    }
  });
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtTokenToVerify =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTc2MzU0NDQ3MX0.0PRuDGuyXhgGctTqLfkiTOV8LeEJYsDXwJ_2sAWwR0Q";

// Call the function to verify the JWT
verifyJWT(jwtTokenToVerify);

// Step 6: Decoding a JWT
// Function to decode a JWT
function decodeJWT(token) {
  const decoded = jwt.decode(token);

  console.log("Decoded JWT:", decoded);
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTc2MzU0NDQ3MX0.0PRuDGuyXhgGctTqLfkiTOV8LeEJYsDXwJ_2sAWwR0Q";

// Call the function to decode the JWT
decodeJWT(jwtToken);
