// Log the current URL and query parameters
document.addEventListener("DOMContentLoaded", () => {
  console.log("Current URL:", window.location.href);
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.forEach((value, key) => {
    console.log(`Query Parameter - ${key}: ${value}`);
  });
  console.log(
    "Query parameters can be exploited by injecting malicious scripts, such as redirecting users or stealing sensitive data."
  );
});

// Log hostname, protocol, and pathname
console.log("Hostname:", window.location.hostname);
console.log("Protocol:", window.location.protocol);
console.log("Pathname:", window.location.pathname);
console.log(
  "Attackers might manipulate these properties to craft URLs for phishing, redirecting users to fake websites."
);

// Redirect to another webpage with domain restriction
const trustedDomains = ["example.com", "trustedsite.org"];
function redirectIfTrusted(url) {
  const { hostname } = new URL(url);
  if (trustedDomains.includes(hostname)) {
    window.location.href = url;
  } else {
    console.error("Redirect blocked: Untrusted domain");
  }
}
redirectIfTrusted("https://example.com");
console.log(
  "Open redirects can lead to phishing attacks by tricking users to visit malicious sites."
);

// Log pages visited in the session
console.log("Pages visited in the session:", window.history.length);
console.log(
  "Privacy concerns: Malicious scripts can track user browsing activity."
);

// Display user agent and browser identification
console.log("User Agent:", window.navigator.userAgent);
if (window.navigator.userAgent.includes("Chrome")) {
  console.log("Browser: Google Chrome");
} else if (window.navigator.userAgent.includes("Firefox")) {
  console.log("Browser: Mozilla Firefox");
} else {
  console.log("Browser not identified, possibly an automation tool.");
}

// Log screen width and height
console.log("Screen Width:", window.screen.width);
console.log("Screen Height:", window.screen.height);
console.log(
  "Attackers can use screen dimensions to optimize phishing pages for specific devices."
);

// Open a new popup window
const popup = window.open(
  "https://example.com",
  "popup",
  "width=400,height=400"
);
console.log(
  "Popup windows can be used for phishing or misleading users. Ensure blockers are enabled."
);

// Log domain and origin
console.log("Domain:", window.location.hostname);
console.log("Origin:", window.location.origin);
console.log(
  "Relevant in CORS security to prevent cross-origin resource misuse."
);

// Simulate login timeout
let timeout;
function resetTimeout() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    alert("Session timed out due to inactivity.");
  }, 10000);
}
window.addEventListener("mousemove", resetTimeout);
window.addEventListener("keydown", resetTimeout);
resetTimeout();

// Check if URL is secure
if (window.location.protocol !== "https:") {
  alert(
    "This page is not secure. Please avoid entering sensitive information."
  );
}

// Open and close a window
const newWindow = window.open("https://example.com", "newWindow");
if (newWindow) {
  newWindow.close();
  console.log("New window opened and closed.");
}
console.log(
  "Malicious scripts could disrupt user experience by closing or opening multiple windows."
);

// Scroll to top or specific element
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
console.log(
  "Attackers might hide malicious overlays by scrolling content away from visible areas."
);

// Retrieve and modify webpage title
console.log("Current Title:", document.title);
if (!document.title.includes("Secure")) {
  document.title = "Secure - " + document.title;
}
console.log(
  "Manipulating titles can deceive users into trusting malicious sites."
);
