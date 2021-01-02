import React from 'react';

const Library = () => {
  return (
    <div className='library'>
      <h2>Library</h2>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td>Dune</td>
          <td>F. Herbert</td>
          <td>10</td>
        </tr>
        <tr>
          <td>The Return of The King</td>
          <td>J.R.R. Tolkien</td>
          <td>10</td>
        </tr>
      </table>
    </div>
  );
};

export default Library;
