export const GAME_DATA = {
  solicitation_planning: {
    label: "Solicitation Planning",
    color: "#FF69B4",
    timebomb: [
      { question: "What tool uses standardized versions of bid documents?", options: ["Expert Judgment","Standard Forms","Advertising","Audits"], correct: "Standard Forms" },
      { question: "Which document describes what the project needs to procure?", options: ["Project Charter","Statement of Work","Risk Register","WBS"], correct: "Statement of Work" },
      { question: "What output defines how vendors will be evaluated?", options: ["Procurement Documents","Evaluation Criteria","Project Plan","Risk Log"], correct: "Evaluation Criteria" },
      { question: "IFB stands for?", options: ["Invitation For Bid","Internal Finance Budget","Integrated Feasibility Brief","Initial Funding Block"], correct: "Invitation For Bid" },
      { question: "RFP is used when which factor is paramount?", options: ["Price","Schedule","Non-financial factors","Risk"], correct: "Non-financial factors" },
    ],
    mix_and_match: [
      { term: "IFB", definition: "Invitation for Bid – used when price is the primary driver." },
      { term: "RFP", definition: "Request for Proposal – used when non-financial factors are paramount." },
    ],
    term_translation: "Evaluation Criteria",
    chained_together: { question: "Name the 3 Outputs of Solicitation Planning", answers: ["Procurement Documents","Evaluation Criteria","Statement of Work Updates"] },
    guess_the_imposter: { options: ["Standard Forms","Expert Judgment","Bidders Conferences","Procurement Documents"], correct: "Bidders Conferences" },
  },
  solicitation: {
    label: "Solicitation",
    color: "#00BFFF",
    timebomb: [
      { question: "What is the primary output of the Solicitation process?", options: ["Contracts","Proposals","SOW","Qualified Seller Lists"], correct: "Proposals" },
      { question: "What expands the pool of potential sellers via publications?", options: ["Bidders Conferences","Standard Forms","Advertising","Expert Judgment"], correct: "Advertising" },
      { question: "What meeting ensures sellers understand requirements equally?", options: ["Kickoff Meeting","Bidders Conference","Steering Committee","Sprint Review"], correct: "Bidders Conference" },
      { question: "How many Tools & Techniques exist in Solicitation?", options: ["1","2","3","4"], correct: "2" },
      { question: "Which output lists potential qualified sellers?", options: ["Proposals","Procurement Documents","Qualified Seller Lists","Contracts"], correct: "Qualified Seller Lists" },
    ],
    mix_and_match: [
      { term: "Advertising", definition: "Expanding the list of potential sellers via publications." },
      { term: "Bidders Conferences", definition: "Meetings with sellers to ensure common understanding of requirements." },
    ],
    term_translation: "Qualified Seller Lists",
    chained_together: { question: "Name the 2 Tools & Techniques of Solicitation", answers: ["Bidders Conferences","Advertising"] },
    guess_the_imposter: { options: ["Proposals","Bidders Conferences","Advertising","Contract Negotiation"], correct: "Contract Negotiation" },
  },
  source_selection: {
    label: "Source Selection",
    color: "#32CD32",
    timebomb: [
      { question: "Which system quantifies qualitative data to minimize prejudice?", options: ["Screening System","Weighting System","Independent Estimates","Negotiation"], correct: "Weighting System" },
      { question: "What sets minimum performance requirements for criteria?", options: ["Weighting System","Contract Negotiation","Screening System","Evaluation Matrix"], correct: "Screening System" },
      { question: "What is the primary output of Source Selection?", options: ["Proposals","Contract","SOW","Seller List"], correct: "Contract" },
      { question: "Independent Estimates are used to check what?", options: ["Reward vendors","Reasonableness of proposals","Train the team","Create SOW"], correct: "Reasonableness of proposals" },
      { question: "How many T&T exist in Source Selection?", options: ["2","3","4","5"], correct: "4" },
    ],
    mix_and_match: [
      { term: "Contract", definition: "A mutually binding agreement obligating the seller to provide a product." },
      { term: "Screening System", definition: "Establishing minimum performance requirements for criteria." },
    ],
    term_translation: "Independent Estimates",
    chained_together: { question: "Name the 4 T&T of Source Selection", answers: ["Contract Negotiation","Weighting System","Screening System","Independent Estimates"] },
    guess_the_imposter: { options: ["Proposals","Evaluation Criteria","Organizational Policies","Seller Invoices"], correct: "Seller Invoices" },
  },
  contract_administration: {
    label: "Contract Administration",
    color: "#FF9900",
    timebomb: [
      { question: "Which system defines how the contract may be modified?", options: ["Payment System","Performance Reporting","Contract Change Control System","Work Results"], correct: "Contract Change Control System" },
      { question: "What documents buyer-seller written communications?", options: ["Seller Invoices","Correspondence","Change Requests","SOW"], correct: "Correspondence" },
      { question: "What do Seller Invoices represent?", options: ["Project completion","Requests for payment","Change orders","Risk logs"], correct: "Requests for payment" },
      { question: "How many Inputs does Contract Administration have?", options: ["2","3","4","5"], correct: "4" },
      { question: "Which output tracks seller performance over time?", options: ["Correspondence","Performance Reporting","Seller Invoices","Contract Changes"], correct: "Performance Reporting" },
    ],
    mix_and_match: [
      { term: "Correspondence", definition: "Written documentation of buyer/seller communications." },
      { term: "Seller Invoices", definition: "Requests for payment for work performed." },
      { term: "Hot", definition: "Dog" },
      { term: "John", definition: "Rey" },
      { term: "Cat", definition: "Food" },
      { term: "6", definition: "7" },
      { term: "A", definition: "B" },
      { term: "1", definition: "2" },
    ],
    term_translation: "Performance Reporting",
    chained_together: { question: "Name the 4 Inputs of Contract Administration", answers: ["Contract","Work Results","Change Requests","Seller Invoices"] },
    guess_the_imposter: { options: ["Correspondence","Payment Requests","Contract Changes","Procurement Audits"], correct: "Procurement Audits" },
  },
  contract_close_out: {
    label: "Contract Close-Out",
    color: "#9B59B6",
    timebomb: [
      { question: "What is the primary T&T in Contract Close-out?", options: ["Performance Reporting","Procurement Audits","Payment System","Contract Negotiation"], correct: "Procurement Audits" },
      { question: "What verifies all work was completed correctly?", options: ["Product Verification","Procurement Audits","Contract File","Formal Acceptance"], correct: "Product Verification" },
      { question: "What is a complete indexed record set for final project records?", options: ["Contract File","Audit Trail","Lessons Learned","Project Archive"], correct: "Contract File" },
      { question: "How many outputs does Contract Close-out have?", options: ["1","2","3","4"], correct: "2" },
      { question: "Formal Acceptance and Closure officially notifies whom?", options: ["The team","The sponsor","The seller","Stakeholders"], correct: "The seller" },
    ],
    mix_and_match: [
      { term: "Contract File", definition: "A complete set of indexed records for final project records." },
      { term: "Product Verification", definition: "Checking if all work was completed correctly and satisfactorily." },
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