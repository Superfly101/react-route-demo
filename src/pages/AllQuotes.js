import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Superfly",
    text: "She doesn't want you, she just want attention.",
  },
  {
    id: "q2",
    author: "Superfly",
    text: "From the street she did emerge, and to the streets she shall return.",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
