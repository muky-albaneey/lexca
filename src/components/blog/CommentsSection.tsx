import { useState } from 'react';

interface Comment {
  id: number;
  name: string;
  timeAgo: string;
  text: string;
  likes: number;
  replies?: Comment[];
}

const initialComments: Comment[] = [
  {
    id: 1,
    name: 'Alex Thompson',
    timeAgo: 'Just now',
    text: 'This article was incredibly helpful! I’ve been struggling with optimizing my conversion rates, and the section on pre-sell content gave me some great ideas to implement.',
    likes: 24,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    timeAgo: '1 day ago',
    text: 'Thanks Alex! I’m glad you found it helpful. Let me know if you have any specific questions about implementing those pre-sell strategies.',
    likes: 8,
  },
  {
    id: 3,
    name: 'Michael Rivera',
    timeAgo: '3 days ago',
    text: 'Great insights on product selection. I’ve been making the mistake of promoting products solely based on commission rates without considering product quality and vendor support. Time to rethink my strategy!',
    likes: 17,
  },
  {
    id: 4,
    name: 'Emily Davis',
    timeAgo: '4 days ago',
    text: 'Interesting perspective! I think combining product quality with vendor support makes a big difference.',
    likes: 5,
  },
  {
    id: 5,
    name: 'James Smith',
    timeAgo: '5 days ago',
    text: 'Great read! I’m currently working on improving my landing pages and this gave me some direction.',
    likes: 11,
  },
  {
    id: 6,
    name: 'Laura Johnson',
    timeAgo: '1 week ago',
    text: 'Very insightful! Thank you for sharing these tips.',
    likes: 9,
  },
];

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState<string>('');
  const [replyText, setReplyText] = useState<string>('');
  const [replyOpen, setReplyOpen] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(3); // Show 3 comments initially

  const handlePostComment = () => {
    if (!newComment.trim()) return;
    const newEntry: Comment = {
      id: comments.length + 1,
      name: 'User Name', // Replace with logged-in user
      timeAgo: 'Just now',
      text: newComment,
      likes: 0,
    };
    setComments([newEntry, ...comments]);
    setNewComment('');
  };

  const handlePostReply = (parentId: number) => {
    if (!replyText.trim()) return;
    setComments(
      comments.map((comment) =>
        comment.id === parentId
          ? {
              ...comment,
              replies: [
                ...(comment.replies || []),
                {
                  id: Date.now(),
                  name: 'User Name',
                  timeAgo: 'Just now',
                  text: replyText,
                  likes: 0,
                },
              ],
            }
          : comment
      )
    );
    setReplyText('');
    setReplyOpen(null);
  };

  const toggleReplyBox = (id: number) => {
    setReplyOpen(replyOpen === id ? null : id);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); // Load 3 more comments each time
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Post Comment */}
      <div className="mb-6">
        <textarea
          className="w-full border rounded-md p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handlePostComment}
          className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Post Comment
        </button>
      </div>

      {/* Comments */}
      {comments.slice(0, visibleCount).map((comment) => (
        <div key={comment.id} className="mb-6">
          <div className="flex items-start">
            <div>
              <p className="font-semibold">{comment.name}</p>
              <p className="text-sm text-gray-500">{comment.timeAgo}</p>
              <p className="mt-2">{comment.text}</p>
              <div className="flex items-center mt-2">
                <span className="text-gray-500 mr-2">{comment.likes}</span>
                <button className="text-gray-500 hover:text-gray-700 text-sm">
                  👍 Like
                </button>
              </div>
              <button
                className="text-blue-500 mt-2 text-sm"
                onClick={() => toggleReplyBox(comment.id)}
              >
                {replyOpen === comment.id ? 'Cancel' : 'Reply'}
              </button>
            </div>
          </div>

          {/* Replies */}
          {comment.replies &&
            comment.replies.map((reply) => (
              <div key={reply.id} className="ml-6 mt-4">
                <p className="font-semibold">{reply.name}</p>
                <p className="text-sm text-gray-500">{reply.timeAgo}</p>
                <p className="mt-2">{reply.text}</p>
                <div className="flex items-center mt-2">
                  <span className="text-gray-500 mr-2">{reply.likes}</span>
                  <button className="text-gray-500 hover:text-gray-700 text-sm">
                    👍 Like
                  </button>
                </div>
              </div>
            ))}

          {/* Reply Box */}
          {replyOpen === comment.id && (
            <div className="mt-4">
              <textarea
                className="w-full border rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <button
                onClick={() => handlePostReply(comment.id)}
                className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                Send
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Load More Comments */}
      {visibleCount < comments.length && (
        <button
          onClick={handleLoadMore}
          className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
        >
          Load More Comments
        </button>
      )}
    </div>
  );
}
