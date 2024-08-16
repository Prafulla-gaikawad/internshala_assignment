import React from "react";
import "../CSS/Price.css";
export default function Price() {
  return (
    <div>
      <div className="Navbar">
        <div>OVERVIEW</div>
        <div>AUTHENTICATION</div>
        <div>ENDPOINTS</div>
        <div>TUTORIAL</div>
        <div>CODE EXAMPLES</div>
        <div>PRICING</div>
      </div>
      <div className="websitea">
        <div className="websiteb">
          <h2>API Pricing</h2>
          <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>

          <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>API</th>
            <th>MODEL</th>
            <th>PRICE PER 1K TOKENS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>OpenAI</td>
            <td>GPT-3.5</td>
            <td>$0.002</td>
          </tr>
          <tr>
            <td>OpenAI</td>
            <td>GPT-4</td>
            <td>$0.03</td>
          </tr>
          <tr>
            <td>Together AI</td>
            <td>Llama-2-70b</td>
            <td>$0.0008</td>
          </tr>
          <tr>
            <td>Together AI</td>
            <td>Llama-2-13b</td>
            <td>$0.0006</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4>Token Estimation</h4>
    <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our<br></br> token calculator tool.</p>
        {""}{""}
        <h4>Billing</h4>
        <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills<br></br> accordingly. Detailed usage reports are available in your account dashboard.</p>
        </div>
      </div>
  </div>
  );
}
