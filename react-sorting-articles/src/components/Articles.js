import React from "react";

const Articles = ({ data }) => {
  // console.log(data);
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        {data.length &&
          data.map((eachData, index) => {
            const { title, upvotes, date } = eachData;
            return (
              <tbody key={index}>
                <tr data-testid="article" key="article-index">
                  <td data-testid="article-title">{title}</td>
                  <td data-testid="article-upvotes">{upvotes}</td>
                  <td data-testid="article-date">{date}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default Articles;
