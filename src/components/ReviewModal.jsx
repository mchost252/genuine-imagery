import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && feedback) {
      onSubmit({ name, feedback });
      setName('');
      setFeedback('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <motion.div
        className="bg-white rounded-lg p-6 w-96"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <h2 className="text-xl font-bold mb-4">Submit Your Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Feedback</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Submit
            </button>
            <button type="button" onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ReviewModal; 