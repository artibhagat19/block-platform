window.onload = function() {
    const postsContainer = document.getElementById('postsContainer');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
   
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <div class="post-meta">
                <span class="category">Category: ${post.category}</span>
                <div class="likes-comments">
                    <button class="like-btn" onclick="likePost(${index})">
                        Like <span class="like-count">${post.likes}</span>
                    </button>
                    <button class="comment-btn" onclick="toggleComments(${index})">
                        Comment <span class="comment-count">${post.comments.length}</span>
                    </button>
                </div>
            </div>
            <div class="post-actions">
                <button class="edit-btn" onclick="editPost(${index})">
                    Edit
                </button>
                <button class="delete-btn" onclick="deletePost(${index})">
                    Delete
                </button>
            </div>
            <div class="comments" id="comments-${index}" style="display:none;">
                <h4>Comments:</h4>
                <textarea id="comment-input-${index}" placeholder="Add a comment..."></textarea>
                <button onclick="addComment(${index})">Submit Comment</button>
                <div id="comment-list-${index}">
                    ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
                </div>
            </div>
        `;
        postsContainer.appendChild(postDiv);
    });
 };
 
 
 function likePost(index) {
    const posts = JSON.parse(localStorage.getItem('posts'));
    posts[index].likes++;
    localStorage.setItem('posts', JSON.stringify(posts));
 
 
    const likeCountElement = document.querySelectorAll('.like-count')[index];
    likeCountElement.textContent = posts[index].likes;
 }
 
 
 function toggleComments(index) {
    const commentsDiv = document.getElementById(`comments-${index}`);
    commentsDiv.style.display = commentsDiv.style.display === 'none' ? 'block' : 'none';
 }
 
 
 function addComment(index) {
    const commentInput = document.getElementById(`comment-input-${index}`);
    const commentText = commentInput.value.trim();
    if (commentText) {
        const posts = JSON.parse(localStorage.getItem('posts'));
        posts[index].comments.push(commentText);
        localStorage.setItem('posts', JSON.stringify(posts));
 
 
        const commentListElement = document.getElementById(`comment-list-${index}`);
        const newCommentElement = document.createElement('p');
        newCommentElement.textContent = commentText;
        commentListElement.appendChild(newCommentElement);
 
 
        commentInput.value = '';
    } else {
        alert('Please enter a comment.');
    }
 }
 
 
 function editPost(index) {
    const posts = JSON.parse(localStorage.getItem('posts'));
    const post = posts[index];
   
    localStorage.setItem('editingPostIndex', index);
   
    window.location.href = 'create.html';
 }
 
 
 function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem('posts'));
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    alert('Post deleted successfully!');
   
    const postCardElement = document.querySelectorAll('.post')[index];
    postCardElement.remove();
 }
 
 
 
 
 
 
 