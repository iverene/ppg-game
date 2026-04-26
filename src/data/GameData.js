export const GAME_DATA = {
  procurement_planning: {
    label: "Procurement Planning",
    color: "#DF414D",
    timebomb: [
      { question: "What is the process of identifying which project needs can be best met by procuring products or services outside the project organization?", 
        options: ["Solicitation Planning", "Solicitaion", "Procurement Planning", "Contract Administration"], 
        correct: "Procurement Planning" },
      { question: "Which contract type involves a fixed total price for a well-defined product?", 
        options: ["Unit Price", "Cost Reimbursable", "Fixed Price", "Time and Materials"], 
        correct: "Fixed Price" },
      { question: "What is the primary factor often cited as a common constraint in procurement?", 
        options: ["Staffing", "Quality", "Funds availability", "Risk"], 
        correct: "Funds availability" },
      { question: "Which output describes how remaining procurement processes will be managed?", 
        options: ["Scope Statement", "Procurement Management Plan", "Statement of Work", "Market Conditions"], 
        correct: "Procurement Management Plan" },
      { question: "Which input describes the factors that limit the buyer's options?", 
        options: ["Constraints", "Assumptions", "Market Conditions", "Procurement Resources"], 
        correct: "Constraints" },
    ],
    mix_and_match: [
      { term: "Fixed Price", definition: "A fixed total price for a well-defined product" },
      { term: "Cost Reimbursable", definition: "Payment to the seller for its actual costs" },
      { term: "Unit Price", definition: "Paid a preset amount per unit of service" },
      { term: "Statement of Requirements (SOR)", definition: "Used for a procurement item that is presented as a problem to be solved" },
    ],
    term_translation: "Make-or-Buy Analysis",
    chained_together: { 
      question: "Name the 7 Inputs of Procurement Planning", 
      answers: ["Scope statement", "Product description", "Procurement Resources", "Market Conditions", "Other Planning Outputs", "Constraints", "Assumptions"] 
    },
    guess_the_imposter: { 
      options: ["Make-or-Buy Analysis", "Expert Judgment", "Contract Type Selection", "Advertising"], 
      correct: "Advertising"
    },
  },
  solicitation_planning: {
    label: "Solicitation Planning",
    color: "#FF69B4",
    timebomb: [
      { question: "What tool uses standardized versions of bid documents?", 
        options: ["Expert Judgment","Standard Forms","Advertising","Audits"], 
        correct: "Standard Forms" },
      { question: "Which document describes what the project needs to procure?", 
        options: ["Project Charter","Statement of Work","Risk Register","WBS"], 
        correct: "Statement of Work" },
      { question: "What output defines how proposals will be scored?", 
        options: ["Procurement Documents","Evaluation Criteria","Project Plan","Risk Log"], 
        correct: "Evaluation Criteria" },
      { question: "IFB stands for?", 
        options: ["Invitation For Bid","Internal Finance Budget","Integrated Feasibility Brief","Initial Funding Block"], 
        correct: "Invitation For Bid" },
      { question: "RFP stands for?", 
        options: ["Request for Procurement","Request for Project","Request for Proposal","Request for Product"], 
        correct: "Request for Proposal" },
    ],
    mix_and_match: [
      { term: "Understanding of Need", definition: "as demonstrated by the seller’s proposal." },
      { term: "Technical Capability", definition: "does the seller have, or can the seller be reasonably expected to acquire, the technical skills and knowledge needed? " },
      { term: "Management Approach", definition: "does the seller have, or can the seller be reasonably expected to develop, management processes and procedures to ensure a successful project?" },
      { term: "Financial Capacity", definition: " does the seller have, or can the seller reasonably be expected to obtain, the financial resources needed?" },
    ],
    term_translation: "Solicitation Planning",
    chained_together: { question: "Name the Inputs of Solicitation Planning that are also an outputs of Procurement Planning", answers: ["Procurement Management Plan", "Statements of Work"] },
    guess_the_imposter: { options: ["Procurement Management Plan","Invitation for Bid","Request for Proposal","Request for Quotation"], correct: "Procurement Management Plan" },
  },
  solicitation: {
    label: "Solicitation",
    color: "#00BFFF",
    timebomb: [
      { question: "What is the primary output of the Solicitation process?", 
        options: ["Contracts","Proposals","SOW","Qualified Seller Lists"], 
        correct: "Proposals" },
      { question: "What expands the pool of potential sellers via publications?", 
        options: ["Bidders Conferences","Standard Forms","Advertising","Expert Judgment"], 
        correct: "Advertising" },
      { question: "What meeting ensures sellers understand requirements equally?", 
        options: ["Kickoff Meeting","Bidders Conference","Steering Committee","Sprint Review"], 
        correct: "Bidders Conference" },
      { question: "How many Tools & Techniques exist in Solicitation?", 
        options: ["1","2","3","4"], 
        correct: "2" },
      { question: "Which phase involves obtaining information (bids and proposals) from prospective sellers on how project needs can be met?", 
        options: ["Solicitation Planning","Procurement Planning","Source Selection","Solicitation"], correct: "Solicitation" },
    ],
    mix_and_match: [
      { term: "Advertising", definition: "Expanding the list of potential sellers via publications." },
      { term: "Bidders Conferences", definition: "Meetings with sellers to ensure common understanding of requirements." },
    ],
    term_translation: "Solicitaion",
    chained_together: { question: "Name the 2 Tools & Techniques of Solicitation", answers: ["Bidders Conferences","Advertising"] },
    guess_the_imposter: { options: ["Proposals","Bidders Conferences","Procurement documents","Contract Negotiation"], correct: "Contract Negotiation" },
  },
  source_selection: {
    label: "Source Selection",
    color: "#32CD32",
    timebomb: [
      { question: "Which system quantifies qualitative data to minimize prejudice?", 
        options: ["Screening System","Weighting System","Independent Estimates","Negotiation"], 
        correct: "Weighting System" },
      { question: "What sets minimum performance requirements for criteria?", 
        options: ["Weighting System","Contract Negotiation","Screening System","Evaluation Matrix"], 
        correct: "Screening System" },
      { question: "What is the primary output of Source Selection?", 
        options: ["Proposals","Contract","SOW","Seller List"], 
        correct: "Contract" },
      { question: "Which tool involves clarification and mutual agreement on the structure and requirements of the contract prior to the signing of the contract.", 
        options: ["Contract","Contract Negotiation","Weighing System","Screening System"], 
        correct: "Reasonableness of proposals" },
      { question: "How many Tools & Techniques exist in Source Selection?", 
        options: ["2","3","4","5"], 
        correct: "4" },
    ],
    mix_and_match: [
      { term: "Contract", definition: "A mutually binding agreement obligating the seller to provide a product." },
      { term: "Screening System", definition: "Establishing minimum performance requirements for criteria." },
      { term: "Weighing System", definition: "Method for quantifying qualitative data in order to minimize the effect of personal prejudice." },
    ],
    term_translation: "Source Selection",
    chained_together: { question: "Name the 4 Tools & Techniques of Source Selection", answers: ["Contract Negotiation","Weighting System","Screening System","Independent Estimates"] },
    guess_the_imposter: { options: ["Proposals","Evaluation Criteria","Organizational Policies","Seller Invoices"], correct: "Seller Invoices" },
  },
  contract_administration: {
    label: "Contract Administration",
    color: "#FF9900",
    timebomb: [
      { question: "Which system defines how the contract may be modified?", 
        options: ["Payment System","Performance Reporting","Contract Change Control System","Work Results"], 
        correct: "Contract Change Control System" },
      { question: "What documents buyer-seller written communications?", 
        options: ["Seller Invoices","Correspondence","Change Requests","SOW"], 
        correct: "Correspondence" },
      { question: "What do Seller Invoices represent?", 
        options: ["Project completion","Requests for payment","Change orders","Risk logs"], 
        correct: "Requests for payment" },
      { question: "How many Inputs does Contract Administration have?", 
        options: ["2","3","4","5"], 
        correct: "4" },
      { question: "Which output tracks seller performance over time?", 
        options: ["Correspondence","Performance Reporting","Seller Invoices","Contract Changes"], 
        correct: "Performance Reporting" },
    ],
    mix_and_match: [
      { term: "Correspondence", definition: "Written documentation of buyer/seller communications." },
      { term: "Seller Invoices", definition: "Requests for payment for work performed." },
      { term: "Payment Requests", definition: "Assumes that the project is using an external payment system." },
      { term: "Performance Reporting", definition: "Provides information about how effectively the seller is achieving the contractual objectives." },
    ],
    term_translation: "Contract Administration",
    chained_together: { question: "Name the 4 Inputs of Contract Administration", answers: ["Contract","Work Results","Change Requests","Seller Invoices"] },
    guess_the_imposter: { options: ["Correspondence","Payment Requests","Contract Changes","Procurement Audits"], correct: "Procurement Audits" },
  },
  contract_close_out: {
    label: "Contract Close-Out",
    color: "#9B59B6",
    timebomb: [
      { question: "What is the primary Tools & Techniques in Contract Close-out?", 
        options: ["Performance Reporting","Procurement Audits","Payment System","Contract Negotiation"], 
        correct: "Procurement Audits" },
      { question: "What verifies all work was completed correctly?", 
        options: ["Product Verification","Procurement Audits","Contract File","Formal Acceptance"], 
        correct: "Product Verification" },
      { question: "What is a complete indexed record set for final project records?", 
        options: ["Contract File","Audit Trail","Lessons Learned","Project Archive"], 
        correct: "Contract File" },
      { question: "How many outputs does Contract Close-out have?", 
        options: ["1","2","3","4"], 
        correct: "2" },
      { question: "Formal Acceptance and Closure officially notifies whom?", 
        options: ["The team","The sponsor","The seller","Stakeholders"], 
        correct: "The seller" },
    ],
    mix_and_match: [
      { term: "Contract File", definition: "A complete set of indexed records for final project records." },
      { term: "Procurement Audits", definition: "Structure view of the procurement process." },
      { term: "Early Termination", definition: "Special case of contract close-out." },
    ],
    term_translation: "Formal Acceptance and Closure",
    chained_together: { question: "Name the 2 Outputs of Contract Close-out", answers: ["Contract File","Formal Acceptance and Closure"] },
    guess_the_imposter: { options: ["Contract Documentation","Procurement Audits","Contract File","Change Requests"], correct: "Change Requests" },
  },
};

export const GAME_LOGOS = {
  timebomb: "/assets/logos/timebomb-logo.png",
  mix_and_match: "/assets/logos/mixmatch-logo.png",
  term_translation: "/assets/logos/translation-logo.png",
  chained_together: "/assets/logos/chained-logo.png",
  guess_the_imposter: "/assets/logos/imposter-logo.png"
};

export const PARTS = Object.keys(GAME_DATA);
export const GAMES = ["timebomb", "mix_and_match", "term_translation", "chained_together", "guess_the_imposter"];
export const GAME_LABELS = ["TIMEBOMB", "MIX & MATCH", "CAN THIS TERM BE TRANSLATED?", "CHAINED TOGETHER", "GUESS THE IMPOSTOR"];

export const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};