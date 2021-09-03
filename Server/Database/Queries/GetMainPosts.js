const connection = require('../Connection');

module.exports = (userId) => connection.query(`
SELECT  COUNT(comments.id),posts.id,title,posts.content,username
 FROM POSTS INNER JOIN users ON (posts.user_id = users.id )
 JOIN comments ON (comments.post_id = posts.id)
 WHERE posts.user_id <>($1)
 GROUP BY posts.id,title,posts.content,username
   ORDER BY posts.id DESC`, [userId]);
