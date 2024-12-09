document.querySelectorAll('.like-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('You liked this post!');
  });
});

document.querySelectorAll('.comment-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Comment section activated!');
  });
});