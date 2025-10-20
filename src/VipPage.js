import { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./App.css";

const VipPage = () => {
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState({
    "entry.1858518904": "", //name
  });
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail((prevState) => ({
      ...prevState,
      ["entry.1858518904"]: newEmail,
    }));
    setEmailError(!validateEmail(newEmail) && newEmail !== "");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfy5QNKp0cNzSc_LBXqtW9ntPySKbC1u7EPZ3a9TdK_EqXW_g/formResponse?entry.1858518904=${email["entry.1858518904"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gold-900 text-white">
      {/* Header */}
      <header className="p-6">
        <div className="container flex justify-between items-center">
          <div>
            <img src="images/JUIC3labs.png" width={"150px"} alt="JUIC3 Labs" />
          </div>
          <div className="text-2xl font-bold text-gold-400">
            VIP ACCESS
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-6 py-2 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-wide bg-gradient-to-r from-gold-400 to-purple-400 bg-clip-text text-transparent">
            VIP EXCLUSIVE
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-wide">
            Early Access to Premium Energy Markets
          </h2>
          <div className="bg-purple-900/30 p-6 rounded-lg border border-gold-400/50">
            <p className="px-4 text-lg text-2xl font-bold text-gold-300">
              🌟 VIP Benefits:<br></br>
              • Priority Access to High-Yield Energy Stakes<br></br>
              • Exclusive Trading Algorithms<br></br>
              • 50% Lower Platform Fees<br></br>
              • Direct Access to Energy Market Intelligence
            </p>
          </div>
          <p className="px-4 text-lg font-bold">
            Join the elite circle of energy market pioneers
            <span className="p-2 text-2xl font-bold text-gold-400">TODAY.</span>
          </p>
        </div>
        {submit ? (
          <div className="space-y-4">
            <Button
              fullWidth
              variant="contained"
              disabled
              sx={{
                "&.Mui-disabled": {
                  background: "linear-gradient(45deg, #FFD700, #FFA500)",
                  color: "black",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                },
              }}
            >
              VIP ACCESS GRANTED ✓
            </Button>
            <div className="text-center p-4 bg-green-900/30 rounded-lg border border-green-400/50">
              <p className="text-green-300 font-bold">
                🎉 Welcome to JUIC3 VIP!<br/>
                Check your email for exclusive access details.
              </p>
            </div>
          </div>
        ) : (
          <form
            className="grid gap-6 max-w-md"
            onSubmit={handleSubmit}
            target="_self"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gold-400 mb-4">
                🔐 VIP Waitlist
              </h3>
            </div>
            <TextField
              fullWidth
              variant="outlined"
              type="email"
              placeholder="Enter your VIP email address"
              value={email["entry.1858518904"]}
              onChange={handleEmailChange}
              error={emailError}
              helperText={
                emailError ? "Please enter a valid email address" : ""
              }
              className="mui-input-override"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#FFD700',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FFA500',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FFD700',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: '#FFD700',
                  opacity: 0.7,
                },
              }}
            />
            <Button
              fullWidth
              variant="contained"
              disabled={emailError || !email["entry.1858518904"]}
              sx={{
                background: emailError || !email["entry.1858518904"] 
                  ? "rgba(255, 215, 0, 0.3)" 
                  : "linear-gradient(45deg, #FFD700, #FFA500)",
                color: "black",
                fontSize: "1.2rem",
                fontWeight: "bold",
                padding: "12px",
                "&:hover": {
                  background: "linear-gradient(45deg, #FFA500, #FF8C00)",
                },
                "&.Mui-disabled": {
                  background: "rgba(255, 215, 0, 0.3)",
                  color: "rgba(0, 0, 0, 0.5)",
                },
              }}
              type="submit"
            >
              🚀 JOIN VIP WAITLIST
            </Button>
            <div className="text-center text-sm text-gold-300">
              Limited spots available • Exclusive access only
            </div>
          </form>
        )}
      </section>

      {/* VIP Features */}
      <section className="container px-6 py-12 mt-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-purple-900/20 rounded-lg border border-purple-400/30">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gold-400 mb-2">Lightning Fast</h3>
            <p className="text-gray-300">Priority processing for all VIP transactions</p>
          </div>
          <div className="text-center p-6 bg-purple-900/20 rounded-lg border border-purple-400/30">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gold-400 mb-2">Smart Analytics</h3>
            <p className="text-gray-300">Advanced AI-powered market insights</p>
          </div>
          <div className="text-center p-6 bg-purple-900/20 rounded-lg border border-purple-400/30">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-xl font-bold text-gold-400 mb-2">Premium Support</h3>
            <p className="text-gray-300">24/7 dedicated VIP customer service</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container px-6 py-4 mt-20 border-t border-gold-400/30">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">
            © 2025 JUIC3 VIP. All rights reserved.
          </span>
          <span className="text-sm text-gold-400 font-bold">
            Exclusive • Premium • Limited Access
          </span>
        </div>
      </footer>
    </div>
  );
};

export default VipPage;