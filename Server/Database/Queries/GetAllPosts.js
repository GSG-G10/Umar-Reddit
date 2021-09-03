const connection = require('../Connection');

module.exports = () => connection
  .query(`SELECT COUNT(comments.id) ,posts.id,title,posts.content,username
  FROM POSTS INNER JOIN users ON (posts.user_id = users.id) 
  LEFT JOIN comments ON (comments.post_id = posts.id)
   GROUP BY posts.id,title,posts.content,username
    ORDER BY posts.id DESC ;`);
