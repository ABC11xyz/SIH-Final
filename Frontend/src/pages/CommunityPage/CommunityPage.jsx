import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faXmark, faThumbsUp, faThumbsDown,faUser, faComments } from '@fortawesome/free-solid-svg-icons';
import './CommunityPage.css';

const CommunityPage = () => {
    const [comments, setComments] = useState([
        { id: "1", user: "User1", text: "Hello", upvotes: 2, downvotes: 1, replies: [] },
        { id: "2", user: "User2", text: "Hi there!", upvotes: 3, downvotes: 0, replies: [] },
        { id: "3", user: "User3", text: "This is a dummy comment.", upvotes: 1, downvotes: 0, replies: [] },
        { id: "4", user: "User4", text: "Great community here!", upvotes: 4, downvotes: 2, replies: [] },
        { id: "5", user: "User5", text: "Looking forward to more discussions.", upvotes: 1, downvotes: 1, replies: [] }
    ]);
    const [newComment, setNewComment] = useState('');
    const [reply, setReply] = useState('');
    const [replyTo, setReplyTo] = useState(null);
    const [showChat, setShowChat] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');

    const chatBodyRef = useRef(null);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [chatMessages]);

    const handlePostComment = () => {
        // You can modify this to post the comment to your backend
        const newCommentObj = {
            id: `${comments.length + 1}`,
            user: "CurrentUser", // Replace with actual user name
            text: newComment,
            upvotes: 0,
            downvotes: 0,
            replies: []
        };
        setComments([...comments, newCommentObj]);
        setNewComment('');
    };

    const handlePostReply = (commentId) => {
        const newReply = { id: `${Date.now()}`, user: "CurrentUser", text: reply }; // Replace with actual user name
        setComments(comments.map(comment => 
            comment.id === commentId 
                ? { ...comment, replies: [...(comment.replies || []), newReply] } 
                : comment
        ));
        setReply('');
        setReplyTo(null);
    };

    const handleUpvote = (commentId) => {
        setComments(comments.map(comment =>
            comment.id === commentId ? { ...comment, upvotes: comment.upvotes + 1 } : comment
        ));
    };

    const handleDownvote = (commentId) => {
        setComments(comments.map(comment =>
            comment.id === commentId ? { ...comment, downvotes: comment.downvotes + 1 } : comment
        ));
    };

    const toggleChat = () => {
        setShowChat(!showChat);
        if (!showChat) {
            setChatMessages([{ sender: 'bot', text: 'Hello! How may I assist you today?' }]);
        }
    };

    const handleUserMessage = () => {
        if (userMessage.trim() === '') return;

        const newMessage = { sender: 'user', text: userMessage };
        setChatMessages(prevMessages => [...prevMessages, newMessage]);

        axios.post('https://sih-final-6lf7.onrender.com/api/auth/user/chat', { message: userMessage })
            .then(response => {
                const botMessage = response.data.reply;
                setChatMessages(prevMessages => [...prevMessages, newMessage, { sender: 'bot', text: botMessage }]);
            })
            .catch(error => {
                console.error('Error getting response from the bot!', error);
            });

        setUserMessage('');
    };

    return (
        <div className="community-page-container">
            <div className='banner-part'>
                <img src="banner2.png" alt="" />
                <h1 className="page-title">HelpDesk</h1>
                <h3 className='sub-title'>You can ask Your Doubts Here</h3>
            </div>
           
            <div className="comment-section">
                <h2 className="comment-section-title">Add a Comment</h2>
                <textarea 
                    className="comment-textarea"
                    value={newComment} 
                    onChange={(e) => setNewComment(e.target.value)} 
                    placeholder="Write your comment here..."
                    rows={4}
                />
                <button className="comment-button" onClick={handlePostComment}>Post Comment</button>
            </div>

            <div className="comments-list">
                <h2 className="comments-list-title">Comments</h2>
                {comments.length === 0 ? (
                    <p className="no-comments">No comments yet</p>
                ) : (
                    comments.map(comment => (
                        <div key={comment.id} className="comment-item">
                            <p className="comment-user">
                                <FontAwesomeIcon icon={faUser} /> {comment.user}
                            </p>
                            <p className="comment-text">{comment.text}</p>
                            <div className="comment-actions">
                                <button className="action-button" onClick={() => handleUpvote(comment.id)}>
                                    <FontAwesomeIcon icon={faThumbsUp} /> {comment.upvotes}
                                </button>
                                <button className="action-button" onClick={() => handleDownvote(comment.id)}>
                                    <FontAwesomeIcon icon={faThumbsDown} /> {comment.downvotes}
                                </button>
                                <button className="reply-button" onClick={() => setReplyTo(comment.id)}>Reply</button>
                                <span>{comment.replies.length} replies</span>
                            </div>
                            {comment.replies && comment.replies.map(reply => (
                                <div key={reply.id} className="reply-item">
                                    <p className="reply-user">
                                        <FontAwesomeIcon icon={faComments} /> {reply.user}
                                    </p>
                                    <p className="reply-text">{reply.text}</p>
                                </div>
                            ))}
                            {replyTo === comment.id && (
                                <div className="reply-form">
                                    <textarea 
                                        className="reply-textarea"
                                        value={reply} 
                                        onChange={(e) => setReply(e.target.value)} 
                                        placeholder="Write your reply here..."
                                    />
                                    <button className="reply-button" onClick={() => handlePostReply(comment.id)}>Post Reply</button>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>

            <button className="chat-button" onClick={toggleChat}>Chat with MITRA</button>

            {showChat && (
                <div className="chat-popup">
                    <div className="chat-header">
                        <h2>Chat with MITRA</h2>
                        <button className="close-chat" onClick={toggleChat}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <div className="chat-body" ref={chatBodyRef}>
                        {chatMessages.map((message, index) => (
                            <div key={index} className={`chat-message ${message.sender}`}>
                                <strong>{message.sender === 'user' ? 'You' : 'MITRA'}:</strong> {message.text}
                            </div>
                        ))}
                    </div>
                    <div className="chat-footer">
                        <input 
                            type="text" 
                            value={userMessage} 
                            onChange={(e) => setUserMessage(e.target.value)} 
                            placeholder="Type your message..." 
                        />
                        <button onClick={handleUserMessage}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CommunityPage;
