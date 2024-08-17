document.getElementById('postForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const category = document.getElementById('category').value;
 
 
    if (title && content && category) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({ title, content, category, likes: 0, comments: [] });
        localStorage.setItem('posts', JSON.stringify(posts));
        alert('Post submitted successfully!');
        window.location.href = 'view.html';
    } else {
        alert('Please fill all fields.');
    }
 });
 
 
 
 
 