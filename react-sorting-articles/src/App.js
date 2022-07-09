import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const articles = [
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23",
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-22",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-01-21",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2019-10-21",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2019-11-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
];

function App() {
  const [votes, setVotes] = useState(articles);
  const [date, setDate] = useState(articles);
  const sortVotes = () => {
    let svotes = [...votes].sort((a, b) => {
      return b.upvotes - a.upvotes;
    });
    setVotes(svotes);
  };

  const sortDates = () => {
    const sdates = [...date].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setDate(sdates);
  };
  return (
    <>
      <button onClick={sortVotes}> most voted</button>
      <button onClick={sortDates}> most recent</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        {votes.map((eachData) => {
          const { title, upvotes, date } = eachData;
          return (
            <tbody key={eachData.index}>
              <tr data-testid="article" key="article-index">
                <td data-testid="article-title">{title}</td>
                <td data-testid="article-upvotes">{upvotes}</td>
                <td data-testid="article-date">{date}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
export default App;
